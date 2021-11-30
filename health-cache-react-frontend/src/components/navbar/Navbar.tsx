import * as React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';


const NavbarScroller = (props: {
  brand: { name: string; to: string },
  links: Array<{ name: string, to: string }>
}) => {

  const { brand, links } = props;
  const NavLinks: any = () => links.map((link: { name: string, to: string }) => <Li key={link.name}><a onClick={() => navigate("/" + brand.to)} href="#">{link.name}</a></Li>);


  const navigate = useNavigate();

  let sessionUserId = sessionStorage.getItem("USER_ID");
  const [userId, setUserId] = useState(sessionUserId);

  useEffect(() => {
    console.log("sessionUserId: " + sessionUserId);

  }, [userId, sessionUserId])

  return (
    <Navbar>
      <Brand href="#" onClick={() => navigate("/" + brand.to)}>
      </Brand>
      <Ul>
     <NavLinks/>
      </Ul>
    </Navbar >
  )
};

const Theme = {
  colors: {
    bg: `#fff`,
    dark: `#24292e`,
    light: `#EEEEEE`,
    red: `#ff5851`,
  },
  fonts: {
    body: `IBM Plex Sans, sans-serif`,
    heading: `IBM Plex Sans, sans-serif`,
  }
}

const Navbar = styled.nav`
  background: ${Theme.colors.dark};
  font-family: ${Theme.fonts.heading};
  color: ${Theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  a { color: white; text-decoration: none; }`;

const Brand = styled.a`
  font-weight: bold;
  font-style: italic;
  margin-left: 1rem;
  padding-right: 1rem;`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: nowrap;
 
  -webkit-overflow-scrolling: touch;`;

const Li = styled.li`
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  display: flex;
  font-size: 14px;
  height: 50px;
  justify-content: center;
  line-height: 16px;
  margin: 0 1.125rem ;
  text-decoration: none;
  white-space: nowrap;`;

export default NavbarScroller;