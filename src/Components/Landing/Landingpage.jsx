
import { Button } from 'react-bootstrap';
import React from "react";
import Login from "../Login/Login.jsx";
import { Carousel } from 'react-bootstrap';


class Land extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goToUserLogin: false,
      goToCompanyLogin: false,
    };
    this.toUserLogin = this.toUserLogin.bind(this);
  }
  // take you to user login interface
  toUserLogin() {
    var logUser = !this.state.goToUserLogin;
    this.setState({ goToUserLogin: logUser });
  }
 
  
  render() {
    return (
      <div>
       
          <center>
        {!this.state.goToUserLogin ? (
          <div>
              <br></br><br></br><br></br>
            
            <h3 className="landP">
              Plan and schedule your workflow online. Increase your team
              efficiency.
            </h3>
           
            <br />
            {/* <Button variant="primary">Primary</Button>{' '} */}
            <Button variant="primary" className="landB1" onClick={this.toUserLogin}>
            Join as Admin
            </Button>
          
          </div>
        ) : this.state.goToUserLogin ? (
          <Login/>
          
        ) : null}
        </center>
        </div>
    );
  }
}
export default Land;
