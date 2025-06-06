import styled, { keyframes } from "styled-components";

const animation2 = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const StyledContainer = styled.div`
  min-width: 90px;
  height: 100vh;
  position: relative;
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: #333333;
  min-width: ${(props) => (props.expandnav ? "230px" : "90px")};
  max-width: ${(props) => (props.expandnav ? "230px" : "90px")};
  transition: all 0.2s ease-in-out;
  height: 100vh;
  left: 0;
  z-index: 10;
  position: fixed;
  top: 0;
`;

export const StyledNavItems = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  margin: 0px;
`;

export const StyledNavTitle = styled.div`
  margin: 40px 0px 50px 0px;
  text-decoration: none;
  color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 70px;

  #nav-logo {
    margin-left: 20px;
    &.true {
      animation: ${animation2} 1s forwards;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    width: 100%;
    color: #ffffff;
    margin-left: 30px;
  }

  #sidebar-icon {
    width: 25px;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: max-content;
  list-style: none;
  height: 60px;
  color: ${(props) => (props.isactive ? "#C4A02E" : "#FFF")};
  border-radius: 1px;

  #logout {
    cursor: pointer;
  }

  a,
  .no-redirect {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-size: 16px;
    width: 100%;
    height: 100%;
    font-weight: 500;
    border-radius: 4px;
    margin-left: 30px;
  }

  a {
    :hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  img {
    width: 25px;
  }

  &#logout-sidebar {
    margin-top: auto;
  }
`;

export const StyledText = styled.p`
  opacity: 0;
  white-space: nowrap;
  margin: 0 0 0 20px;
  color: ${(props) => (props.isactive ? "#C4A02E" : "#FFF")};
  &.true {
    animation: ${animation2} 1s forwards;
  }
`;

export const StyledFooter = styled.div`
  width: 100%;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  margin-left: 30px;
  background-color: transparent;
  flex-direction: column;
  margin-bottom: 20px;

  img {
    width: 25px;
  }
`;

export const StyledFooterText = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 10px;
  opacity: 0;
  height: 75px;
  margin-bottom: 20px;

  &.true {
    animation: ${animation2} 1s forwards;
  }

  p {
    margin: 15px 0 0 0;
  }

  #no-margin-sidebar {
    margin: 0px;
  }
`;

export const StyledLogo = styled.img`
  opacity: 1;
  &.true {
    animation: ${animation2} 1s forwards;
  }
`;