import Header from './Header'
import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function ProductList(){

    const[data,setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);


    async function deleteOperation(id){
      

        let result= await fetch("http://127.0.0.1:8000/api/delete/"+id,{
            method:'DELETE'
        });
        result=await result.json();
        console.warn(result);
        getData();
    }

    async function getData(){
        let result = await fetch("http://127.0.0.1:8000/api/list");
        result = await result.json();
        setData(result);
    }
    return(

        <div>
        <Header/>
        <h1>Product List</h1>
        <div className="col-sm-8 offset-sm-2"  style={{ marginTop: '20px' }}>
        <Table>
            <tr>
                <td><b>Id</b></td>
                <td><b>Name</b></td>
                <td><b>Price</b></td>
                <td><b>Description</b></td>
                <td><b>Image</b></td>
                <td><b>Operations</b></td>
            </tr>
            
            {
                data.map((item)=>
                <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td><img style={{width:100}} src={"http://127.0.0.1:8000/"+item.file_path}  /></td>
                <td><span className="delete" style={{
                       backgroundColor: '#a90b0b',
                       color: '#fff',
                       padding: '5px',
                       borderRadius: '5px',
                       cursor: 'pointer'
                       }}  onClick={()=>deleteOperation(item.id)}>Delete</span></td>
                 <td>
                    <Link to={"update/"+item.id}>
                    <span className="update" style={{
                       backgroundColor: 'green',
                       color: '#fff',
                       padding: '5px',
                       borderRadius: '5px',
                       cursor: 'pointer'
                       }}>Update</span>
                       
                       </Link></td>
                       
                 </tr>
                )
            }
        </Table>
        </div>

        </div>
    )
}

export default ProductList;