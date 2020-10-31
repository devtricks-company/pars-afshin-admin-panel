import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "../components/layouts/Layout";
import { Main } from "../components/main/Main";
import { SideBar } from "../components/sidebar/Sidebar";
import routes from "../routes";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/auth/authContext";

const SideBarContainer = styled.ul`
  width: 100%;
  list-style: none;
`;

const LinkContainer = styled.li`
  width: 100%;
  text-align: center;
`;

const switchRoute = (
  <Switch>
    {routes.map((props, key) => {
      if (props.layout === "/admin") {
        return (
          <Route
            path={props.layout + props.path}
            component={props.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);
const Admin = (props) => {
  const authContext = useContext(AuthContext);
  const { admin, logout } = authContext;

  return (
    <>
      {admin ? (
        <Layout>
          <SideBar>
            <SideBarContainer>
              {routes.map((route, key) =>
                route.show ? (
                  <LinkContainer>
                    <Link to={route.layout + route.path}>{route.name}</Link>
                  </LinkContainer>
                ) : null
              )}
            </SideBarContainer>
          </SideBar>
          <Main>{switchRoute}</Main>
        </Layout>
      ) : (
        props.history.push("/login")
      )}
    </>
  );
};

export default Admin;
