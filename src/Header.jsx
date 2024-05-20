import {Navbar,Nav, NavDropdown} from 'react-bootstrap'
import {Link } from 'react-router-dom'

function Header(){
    let user = JSON.parse(localStorage.getItem('user-info'))
    
    function logout(){
           localStorage.clear();
            window.location.href = '/register';
    }
    return(

      <div className="container-fluid">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">E-Comm</Navbar.Brand>
        <Nav className="ml-auto navbar_wrapper">
          {

            localStorage.getItem('user-info') ?
           <>
           <Link to ="/">Product List</Link>
           <Link to ="/add">Add Products</Link>
          <Link to ="/update">Update Products</Link>
           </>
           :
           <>
           <Link to ="/login">Login</Link>
          <Link to ="/register">Register</Link>
           </>
          }
          
          
          
        </Nav>
        {localStorage.getItem('user-info')?
        <Nav>
                    <NavDropdown title={user && user.name} id="basic-nav-dropdown" style={{ position: 'absolute', right: '40px', top: '10px' }}>
                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null}
      </Navbar>
    </div>
    )
}

export default Header