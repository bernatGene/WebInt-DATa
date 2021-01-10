import React from "react";
import Researcher from "../pages/researcher";
import Layout from "./layout";
import Roles from "../pages/roles";

const AuthorisedPageContainer = () => (
  <Layout>
    <Roles /> 
    <Researcher />
  </Layout>
);

export default AuthorisedPageContainer;
