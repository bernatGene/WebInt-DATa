import React from "react";

import { Link, withRouter } from "react-router-dom";

function Home(props) {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://www.anolytics.ai/wp-content/uploads/2019/04/accureacy.png"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        {/* <h1 class="font-weight-light">Home</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p> */}
                        <br/>
                        <div class="col-sm-12">
                            <form class="md-float-material form-material" action="#" method="POST">
                                <div class="auth-box card">
                                    <div class="card-block">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <h3 class="text-center heading">Create your New Account</h3>
                                            </div>
                                        </div>
                                        <div class="form-group form-primary"> <input type="text" class="form-control" name="first_name" value="" placeholder="Display name" id="first_name" /> </div>
                                        <div class="form-group form-primary"> <input type="text" class="form-control" name="email" value="" placeholder="Email" id="email" /> </div>
                                        <div class="form-group form-primary"> <input type="password" class="form-control" name="password" placeholder="Password" value="" id="password" /> </div>
                                        <div class="form-group form-primary"> <input type="password" class="form-control" name="password_confirm" placeholder="Repeat password" value="" id="password_confirm" /> </div>
                                        {/* <div class="form-group form-primary"> <input type="text" class="form-control" name="role" placeholder="Your Role" value="" id="password_confirm" /> </div> */}
                                        <br/>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <h3 class="text-center heading">Select your Role</h3>
                                            </div>
                                        </div>
                                        <div class="row">
                                            
                                            <div class="col-md-12"> <input type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" name="researcher" value="Researcher" />
                                            </div>
                                            <br/>
                                            <div class="col-md-12"> <input type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" name="annotator" value="Annotator" />
                                            </div>
                                        </div>
                                        <div class="or-container">
                                            <div class="line-separator"></div>
                                            <div class="or-label">or</div>
                                            <div class="line-separator"></div>
                                        </div>
                                        <br /> 

                                        <p class="text-inverse text-center">
                                            Already have an account?
                                        {/* <a href="<?= base_url() ?>auth/login" data-abc="true">
                                                Login
                                        </a> */}
                                        <li class={`nav-item  ${props.location.pathname === "/login" ? "active" : ""}`}>
                                            <Link class="nav-link" to="/login">
                                                Login
                                            </Link>
                                        </li>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                    

                </div>
            </div>
        </div>
    );
}

export default withRouter(Home);