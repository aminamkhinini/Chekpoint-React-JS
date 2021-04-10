//import logo from './logo.svg';//
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import { Navbar,NavbarBrand,Nav,Navlink,Form,Button,FormControl,Card} from 'react-bootstrap';
import img1 from './cake1.jpg'
import img2 from './cake2.jpg'
import img3 from './cake3.jpg'
import img4 from './cake4.jpg'
function App() {
  return (
<div className="App">

<Card className="text-center" >
  <Card.Header>
  <Navbar bg="light" variant="light" id="nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Product</Nav.Link>
      <Nav.Link href="#pricing">About us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </Navbar>
  </Card.Header>
 
  <Card.Body className="cardbody">
   
   <Container Id="cont1">
   <Row>
    <Col>
    <h1>Cake Order Form </h1>
    <p> Order your freshly baked cakes made using only the finest quality natural ingredients.</p>
 
  
     <Container fluid="md">
     <Row>
     <Col>
     <p> Please choose your favorite cake from among the following:* </p> 
     <Container>
     <Row id ="image1">
    <Col md >
    <Form.Check type="radio" aria-label="radio 1" />
    <img src={img1} alt="cake1"  width={290} height={210} id="photo1" ></img>
    <Form.Check type="radio" aria-label="radio 1" />
    <img src={img2} alt="cake2" width={290} height={210}></img>
    </Col>
    <Col md>
    <Form.Check type="radio" aria-label="radio 1" />
     <img src={img3} alt="cake3" width={290} height={210} rounded></img> 
    <Form.Check type="radio" aria-label="radio 1" />
    <img src={img4} alt="cake4" width={290} height={210}></img> 
    </Col> 
   </Row>
    </Container>
   </Col>
   </Row>
   </Container>


<Container>
    <Row>
    <Col>
    <h1> Order Information</h1>
    <Form>
   <Form.Label> Name*</Form.Label>
   <Form.Row>
    <Col>
      <Form.Control placeholder="First " />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>
</Form>
    
  
     <Form>
  <Row>
     <Col>
     <Form.Label>Delivery date</Form.Label>
     <Form.Control placeholder="MM/DD/YYYY"  />
    </Col>
    <Col>
    <Form.Label>Preferred delivery time</Form.Label>
       <Form.Control placeholder="HH:MM AM" />
    </Col>
  </Row>
</Form>
    <Form>
  <Row>
     <Col>
     <Form.Label>Phone*</Form.Label>
     <Form.Control placeholder="### ### ####" />
    </Col>
    <Col>
    <Form.Label>Email*</Form.Label>
       <Form.Control  />
       <p >To receive the complete recipe</p>
    </Col>
  </Row>
</Form>
<Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Street Adrress" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
   
    <Form.Control placeholder="Street Adress Line 2" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Control  placeholder="City">
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Control placeholder="Region">
       
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Control  placeholder="Postal/Zip Code">
      </Form.Control>
    </Form.Group>
   <Form.Group as={Col} controlId="formGridState">
      <Form.Control as="select" defaultValue="Choose..." placenholder="Country">
        <option>Country...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
  <Button type="submit" >order</Button>
</Col>
</Row>
</Container>
</Col>
</Row>
</Container>
    
  </Card.Body>
  <Card.Footer className="text-muted">Never submit sensitive information,such as credit card number or passwords. </Card.Footer>
</Card>
   
  
  

</div>
  );
}

export default App;
