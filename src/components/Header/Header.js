import { Link } from "gatsby"
import React from "react"
import { Nav, NavLink, Bars, NavMenu, NavBtn } from './HeaderStyles'
import { menuData } from '../../data/MenuData'
import { Button } from "../Button"

const Header = () => {
  return (
    <Nav>
      <NavLink to='/'>EXPLORIX</NavLink>
      <Bars />
      <NavMenu>
        {
          menuData.map((item, index) => (
            <NavLink to={item.link} keu={index}>{item.title}</NavLink>
          ))
        }
      </NavMenu>
      <NavBtn>
        <Button primary round >Book a Flight</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header
