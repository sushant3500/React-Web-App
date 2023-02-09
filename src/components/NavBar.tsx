import Nav from 'react-bootstrap/Nav';
import { Button, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.removeItem('auth');
    navigate('/login');
  }
  return (
    <>
      <Navbar className='mt-2' bg="dark" variant="dark">


        <Nav className="me-auto">
          <Nav.Link className='fs-3 mx-4' href="/">Customer List</Nav.Link>
        </Nav>

        <Button className='me-4' onClick={logOut}>logout</Button>


      </Navbar>

    </>
  );
}

export default NavBar;