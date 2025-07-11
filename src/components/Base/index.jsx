import {
  StyledMainContainer
} from './styles';
import Header from '../Header';
import Footer from '../Footer';

function Base({ children }) {
  return (
    <StyledMainContainer>
      <Header />
      {children}
      <Footer />
    </StyledMainContainer>
  )
}

export default Base;
