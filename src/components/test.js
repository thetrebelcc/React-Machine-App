import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import Image from 'react-bootstrap/Image';
import axios from 'axios';






export default class Test extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);


};


handleClick({currentTarget}) { 
  
 
  
  console.log(currentTarget.value) // e.currentTarget.value would be equivalent
};


 
  render() 
  
  {
    const imageClick1 = () => {
      console.log('Click');
      axios.post('https://api.telegram.org/bot1003390479:AAHzEzSbHQsEKTPhRn1jjHIeI1gfnzcTS8Y/sendMessage?chat_id=-1001270050860&text=IMBROKEN!', )
      .then(res => console.log(res.data))
      alert("Machine has been reported down!");
      axios.post('http://localhost:4000/students/create-student',{
        
name: 'fabian',
email: 'Flintstone@gmail.com'
      })
      .then(res => console.log(res.data));
      
    } 
    

return (
      <Container>

  <Row>
    <Col sm>      
    <Image src="tdp-1.5-main.jpg"  onClick={() => imageClick1()} rounded />
    <button value="here!" onClick={this.handleClick}>   
        Click me
      </button>
</Col>
    <Col sm></Col>
  </Row>
</Container>
    )
  }
}


