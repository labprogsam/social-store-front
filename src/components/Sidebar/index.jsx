import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { SideBarData } from "./data";
import logoIcon from '../../assets/Sidebar/logo.svg';
import logo2Icon from '../../assets/Sidebar/logo2.svg';
import logoutIcon from '../../assets/Sidebar/logout.svg';
import { clearCookies } from "../../utils/clearCookies";
import Cookies from 'js-cookie';
import {
  StyledNavbar,
  StyledNavItems,
  StyledNavTitle,
  StyledLi,
  StyledContainer,
  StyledText,
  StyledFooter,
  StyledFooterText,
  StyledLogo
} from './styles';

const SideBar = () => {
  const { replace } = useHistory();
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname);
  const [mouseEnter, setMouseEnter] = useState(false);
  
  const cookies = Cookies.get();

  useEffect(() => {
    setActive(pathname)
  }, [pathname]);

  const signOut = () => {
    clearCookies();

    if (!pathname.startsWith('/auth')) {
      replace('/auth');
    }
  }

  const hiddenElem = (item) => {
    return item?.path == "/app/portfolio" && cookies?.profile !== "tatuador"
  }

  return (
    <>
      <StyledContainer>
        <StyledNavbar onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)} expandnav={mouseEnter}>
          <StyledNavItems>
            <StyledNavTitle>
              <Link id="nav-logo" className={mouseEnter} to="/">
                <StyledLogo className={mouseEnter} id="logo" src={mouseEnter ? logoIcon : logo2Icon} alt="Logo Traços" />
              </Link>
            </StyledNavTitle>
            {SideBarData.map((item, index) => (
                !hiddenElem(item) && <StyledLi key={index}>
                  <Link onClick={() => setActive(item.path)} to={item.path}>
                    <img id="sidebar-icon" src={active === item.path ? item.activeIcon : item.icon} />
                    {mouseEnter && <StyledText isactive={active === item.path} className={mouseEnter}>{item.title}</StyledText>}
                  </Link>
                </StyledLi>
            ))}
            <StyledLi id="logout-sidebar">
              <a id="logout" onClick={() => signOut()}>
                <img id="sidebar-icon" src={logoutIcon} />
                {mouseEnter && <StyledText className={mouseEnter}>Sair</StyledText>}
              </a>
            </StyledLi>
            <StyledFooter >
              <StyledFooterText className={mouseEnter}>
                <p>Política de privacidade e dados</p>
                <div>
                  <p>Todos os direitos reservados</p>
                  <p id="no-margin-sidebar">TRAÇOS 2025</p>
                </div>
              </StyledFooterText>
            </StyledFooter>
          </StyledNavItems>
        </StyledNavbar>
      </StyledContainer>
    </>
  );
};

export default SideBar;