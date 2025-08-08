import {
  StyledMainContainer
} from './styles';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function Base() {
  return (
    <StyledMainContainer>
      <Header />
      <Outlet />
      <Footer />
    </StyledMainContainer>
  )
}

export default Base;
