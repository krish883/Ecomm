import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button} from 'react-bootstrap'
import Header from './Header.jsx'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './Login.jsx'
import Register from './Register.jsx'
import AddProduct from './AddProduct.jsx'
import UpdateProduct from './UpdateProduct.jsx'
import Protected from './Protected.jsx'
import ProductList from './ProductList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <div className="div container" style={{ paddingTop: '56px' }}>
        <BrowserRouter>
       <Header/>

        
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Protected Cmp={ProductList}/>} />
            <Route path="/add" element={<Protected Cmp={AddProduct}/>} />
            <Route path="/update/:id" element={<Protected Cmp={UpdateProduct}/>} />
          </Routes>
        </BrowserRouter>


       


      

      {/* <button>Simple Button</button>
      <Button>Bootstrap</Button> */}
      </div>
      
      </>
   
  )
}

export default App
 