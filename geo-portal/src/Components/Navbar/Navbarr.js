import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import smallLogo from '../../Assets/Images/Logo150.png';
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from '../../Assets/Images/Search.svg'
import { ColorA } from '../../Assets/Colors/Colors';
import { ColorB } from '../../Assets/Colors/Colors';


export default function Navbarr() {
  return (
   
   
   
      <Navbar   key={'sm'} expand={'sm'} className="bg-body ">
        <Container style={{backgroundColor:'white' , maxHeight:'70px'}} fluid  >

          <Navbar.Brand style={{marginLeft:'20px'}} href="/">
          <Image style={{width :'70px'}} src={smallLogo}/>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${'sm'}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>


            <Offcanvas.Body style={{marginRight:'500px'}}>
              <Nav className="justify-content-center flex-grow-3 pe-4">

                <Nav.Link className='mx-2'  style={{color:ColorB, fontWeight:'bold' ,textAlign:'center'}} href="#action1">About Us</Nav.Link>
                <Nav.Link  className='mx-2' style={{color:ColorB, fontWeight:'bold',textAlign:'center'}} href="#action2">Contact Us</Nav.Link>
                <Nav.Link className='mx-2'  style={{color:ColorB, fontWeight:'bold',textAlign:'center'}} href="#action3">Pricing</Nav.Link>


                <NavDropdown
                  title="More options"
                  id={`offcanvasNavbarDropdown-expand-${'sm'}`}
                >
                  <NavDropdown.Item href="#action4">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action6">
                    Something else here
                  </NavDropdown.Item>


                </NavDropdown>

              </Nav>


              <Form className="d-flex" >
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  style={{minWidth:'120px', maxWidth:'250px'}}
                  >
                  

                  
                  </Form.Control>
                 <Image style={{color:ColorB ,  width:'25px', position:'relative',right:'50px'}} src={Search}></Image>
                
              </Form>


            </Offcanvas.Body>


          </Navbar.Offcanvas>
        </Container>
      </Navbar>
  

  )
}
