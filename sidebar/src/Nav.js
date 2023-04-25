import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <div style={{backgroundColor:'rgb(0, 7, 75)',borderRadius:'300px'}}>
    <Navbar >
      <Container>
        <Navbar.Brand href="#" />
        <img
         src="https://th.bing.com/th/id/OIP.I-lguAI0KnldOTP8mc4VpgHaDr?pid=ImgDet&rs=1"
         width="100"
         height="35"
         className="d-inline-block align-top"
         alt="tt"
         style={{marginRight:"1100px"}}
/>
      </Container>
<div><h3 className='text' style={{color:"whitesmoke" , marginRight:"50px", textAlign:"end" , marginBotttom:"20px"}}> Welcome:Rishabh </h3></div>
    
      </Navbar>
      
      </div>
  );
}

export default Nav;
