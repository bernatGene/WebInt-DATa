import React from "react";

function Login() {
  return (
    <div className="login">
      <div class="container">
        <div class="row align-items-center my-5">
          {/* <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="http://placehold.it/900x400"
                            alt=""
                        />
                    </div> */}
          <div class="col-lg-5">
            <h1 class="font-weight-light">Login</h1>
            {/* <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p> */}
            <br/>
            
            <form class="md-float-material form-material" action="#" method="POST">
              <div class="auth-box card">
                <div class="card-block">
                  <div class="row">
                    {/* <div class="col-md-12">
                      <h3 class="text-center heading">Create your New Account</h3>
                    </div> */}
                  </div>
                  <div class="form-group form-primary"> <input type="text" class="form-control" name="email" value="" placeholder="Email" id="email" /> </div>
                  <div class="form-group form-primary"> <input type="password" class="form-control" name="password" placeholder="Password" value="" id="password" /> </div>
                  {/* <div class="form-group form-primary"> <input type="text" class="form-control" name="role" placeholder="Your Role" value="" id="password_confirm" /> </div> */}
                  <div class="row">
                    <div class="col-md-12"> <input type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" name="submit" value="Login" onclick="/login" />
                    </div>
                  </div>
                  {/* <div class="or-container">
                    <div class="line-separator"></div>
                    <div class="or-label">or</div>
                    <div class="line-separator"></div>
                  </div> */}
                  <br />
                </div>
              </div>
            </form>
            


            {/* <div class="row">
              <div class="col-md-12"> <input type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" name="researcher" value="Researcher" />
              </div>
            </div>
            <br/>
            <div class="row">
              <div class="col-md-12"> <input type="submit" class="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" name="anootator" value="Annotator" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;