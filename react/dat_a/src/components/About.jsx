import React from "react";

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center my-5">
                    {/* <div className="col-lg-7">
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="http://placehold.it/900x400"
                            alt=""
                        />
                    </div> */}
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">About</h1>
                        <p>
                        DATa is a Data Annotation Interface is to create a distributed market-space that 
                        allows the generation of data sets that can be used by Machine learning researchers, 
                        Data scientists, etc. You can login here either as a researchers who want to get 
                        annotated data sets for their analysis by posting there task and tracking the 
                        progress of it or as a annotator who agrees to annotate and complete the posted task.
            </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;