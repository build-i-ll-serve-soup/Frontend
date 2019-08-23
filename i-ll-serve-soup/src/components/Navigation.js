import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const Navigation = props => (
  <NavLink exact {...props} activeClassName="active"/>
)
 const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

 const panes = [
  { menuItem: <Menu.Item key='home' as={Navigation} to={`/`} content={createLabel("home", "Home Page")} /> },
  { menuItem: <Menu.Item key='login' as={Navigation} to={`/login`} content={createLabel("sign-in", "Login")} /> },
  { menuItem: <Menu.Item key='signup' as={Navigation} to={`/signup`} content={createLabel("write", "Signup")} /> },
  { menuItem: <Menu.Item key='content' as={Navigation} to={`/content`} content={createLabel("archive", "Content")} /> }
 ]

 const TabNav = () => <Tab menu={{pointing: true, secondary: true}}panes={panes}/>

export default TabNav
