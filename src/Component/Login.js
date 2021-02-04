import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const FormPage = () => {
return (
  <form className="login">
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
      <button type="button" className="btn1">Connexion</button>
        <div className="grey-text">
          <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Type your password" icon="lock" group type="password" validate />
        </div>
        <div className="text-center">
          <MDBBtn className>Connexion</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer></form>
);
};

export default FormPage;