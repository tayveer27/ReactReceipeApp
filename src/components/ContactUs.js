import React , { useState } from 'react'

function ContactUs() {

    const [FormDetails, setFormDetails] = useState({})


    const formHandler = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormDetails(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(FormDetails)
    }

    return (

        <React.Fragment>

            <div className="container-fluid bg-contact">
                <h1 className="grad-text">Connect With Us</h1>
                <h4 className="desc-text">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.</h4>
            </div>


            <div className="container contact text-left p-3 ">
                <div className="row mb-5 mt-5">
                    <div className="col-md-6">
                        <h1 className="title-w"><b>Contact Us</b></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate aperiam neque.</p>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control"  placeholder="Name *" name="name" onChange={formHandler} />
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control"  placeholder="Email *" name="email" onChange={formHandler} />
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control"  placeholder="Subject" name="subject" onChange={formHandler} />
                            </div>

                            <div className="form-group">
                                <textarea type="text" className="form-control"  placeholder="Message *" name="message" onChange={formHandler} />
                            </div>
                            <button type="submit" className="p-btn p-3 rounded">Send Message</button>
                        </form>
                    </div>
                    <div className="col-md-6 bg-form-righ">

                    </div>
                </div>

                <div className="g-map mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6247525.214068946!2d-8.204858548697695!3d40.130043766347974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc42e3783261bc8b%3A0xa6ec2c940768a3ec!2sSpain!5e0!3m2!1sen!2sin!4v1614757946461!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactUs
