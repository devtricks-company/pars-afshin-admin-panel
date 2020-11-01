import React, { useContext, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "../components/layouts/Layout";
import { Main } from "../components/main/Main";
import { SideBar } from "../components/sidebar/Sidebar";
import routes from "../routes";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/auth/authContext";
import SidebarHeader from "../components/sidebar/SidebarHeader";
import Navheader from "../components/NavHeader/Navheader";

const SideBarContainer = styled.ul`
  width: 100%;
  list-style: none;
`;

const LinkContainer = styled.li`
  width: 100%;
  text-align: center;
  padding:10px 0;
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
  const [navName,setNavName] = useState('Dashboard');
  const clickLinkHandler  = (e) => {
    const allMenu =Array.from(e.target.parentElement.parentElement.children);
    allMenu.forEach(li => {
      li.classList.remove('active');
      li.children[0].style.color = "white";
    })
    e.target.parentElement.classList.add('active');

    e.target.style.color = 'black';
    setNavName(e.target.textContent);
  }
  return (
    <>
      {admin ? (
        <Layout>
          <SideBar>
            <SideBarContainer>
              <SidebarHeader admin={admin} />
              {routes.map((route, key) =>
                route.show ? (
                 
                  <LinkContainer className={route.name === "Dashboard" ? 'active' : ''} >
                    <Link style={{color:"white",fontFamily:'sans-serif',textDecoration:'none'}} to={route.layout + route.path}
                    onClick={clickLinkHandler}
                    >{route.name}</Link>
                  </LinkContainer> 
                ) : null
              )}
            </SideBarContainer>
          </SideBar>
          <Main>
            <Navheader name={navName}/>
            {switchRoute}</Main>
        </Layout>
      ) : (
        props.history.push("/login")
      )}
    </>
  );
};

export default Admin;
