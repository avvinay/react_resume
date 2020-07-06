import React, { Component } from 'react';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Pdf from "react-to-pdf";


const ref = React.createRef();

class App extends Component {

  render() {
    const responseFacebook = (response) => {
      console.log(response);
    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">

      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1 style={{color: "red"}}>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
        
      <br/>
      <br/>
      <br/>
      <FacebookLogin
        appId="2151572408472837"
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
      />
      <br />
      <br />


      <GoogleLogin
        clientId="225485872266-4qk3r4pa4tj9lrii9hf97rf7to46ukge.apps.googleusercontent.com" 
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}


export default App;
