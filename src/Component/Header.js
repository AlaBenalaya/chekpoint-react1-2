import React from 'react'
import usersLogo from '../image/it_logo.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBAnimation } from "mdbreact";

const AnimationPage = () => {
    return (
        <MDBAnimation type="bounce" infinite>
            <img className="img-fluid" alt="" src={usersLogo} />
        </MDBAnimation>
    );
};

export default AnimationPage;

