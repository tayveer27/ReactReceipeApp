import React from 'react'
import PropTypes from "prop-types";
import FeatureData from '../directory/Feature'


function FeaturesDiv() {
    return (
        <div className="container FeaturesDiv text-left mt-5 pb-3">
            <div className="row">
                {
                    FeatureData.map((feature, i) => {
                        return (
                            <div className="col-md-4" key={i}>
                                <div className="wrapped">
                                    <div className="icon mt-5 mb-3">
                                        <i className={`${feature.iconClass}`}></i>
                                    </div>
                                    <div className="content">
                                        <h2 className="title mt-2">{feature.title}</h2>
                                        <p className="pt-2">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}


FeaturesDiv.propTypes = {
    title: PropTypes.string,
    iconClass: PropTypes.string,
    description: PropTypes.string
}
export default FeaturesDiv
