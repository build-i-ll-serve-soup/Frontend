import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

const Nav = props => (
  <NavLink exact {...props} activeClassName="active"/>
)
 const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

 const panes = [
  { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={createLabel("home", "Home Page")} /> },
  { menuItem: <Menu.Item key='login' as={Nav} to={`/login`} content={createLabel("sign-in", "Login")} /> },
  { menuItem: <Menu.Item key='signup' as={Nav} to={`/signup`} content={createLabel("write", "Signup")} /> },
  { menuItem: <Menu.Item key='content' as={Nav} to={`/content`} content={createLabel("archive", "Content")} />},
  { menuItem: <Menu.Item key='add-item' as={Nav} to={`/add-item`} content={createLabel("write", "Add Item")} /> },
 
]

 const TabNav = () => <Tab menu={{pointing: true, secondary: true}}panes={panes}/>

export default TabNav
