import { useEffect, useState } from 'react'
import Header from './Header'
import {useParams} from 'react-router-dom'

function UpdateProduct(props){

    const[data,setData]=useState([])
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [filePath, setFilePath] = useState('');

    const { id } = useParams();
    // console.warn("props",props.match.params.id)
    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await fetch(`http://127.0.0.1:8000/api/product/${id}`);
                result = await result.json();
                setData(result);
                setName(result.name);
                setPrice(result.price);
                setDescription(result.description);
                setFilePath(result.file_path);
            } catch (error) {
                console.error('Error fetching data:', error);
            }

            
        };
        fetchData();
    }, [id]);

    const handleSubmit = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, price, description, file_path: filePath })
            });
            if (response.ok) {
                console.log('Product updated successfully');
                alert("Data has been saved")
               window.location.href = '/';
            } else {
                console.error('Failed to update product');
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    
    return(

        <div>
            <Header/>
            <h1>Update Product</h1>
            <div className='col-sm-6 offset-sm-3'>
                <br/>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/><br/>
            <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)}/><br/>
            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}/><br/>
            <input type="file" className="form-control" defaultValue={data.file_path}/><br/>
            <img style={{width:200}} src={"http://127.0.0.1:8000/" + data.file_path}/><br/><br/>
            <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>
            
        </div>
    )
}

export default UpdateProduct