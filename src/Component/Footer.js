import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Nos Prouduits</h5>
            <p>
            Achat sur internet PC portable, Smartphone, TV<br/>électroménager et produits high-tech aux meilleurs priX
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">CHOIX</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Ordinateur Portable</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Smart Phone</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Tablette</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Accsessoir</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;