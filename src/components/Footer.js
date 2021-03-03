import React from 'react'
import logo from '../assets/logo192.png'


function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-md-4 pt-2">
                    <img src={logo} />
                </div>

                <div className="col-md-4">
                    <div className="icon rounded-circle p-3">
                        <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="icon rounded-circle p-3">
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div className="icon rounded-circle p-3">
                        <i className="fab fa-google"></i>
                    </div>
                </div>

                <div className="col-md-4">
                   <p className="light-color pt-3"> Copyright © 2020  All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
