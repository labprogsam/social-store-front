import InternalRoutes from "./routes/InternalRoutes";
import {
  Header,
  Footer
} from './components';
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/auth";
import AlertProvider from "./contexts/alert";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <AuthProvider>
          <Header />
          <InternalRoutes />
          <Footer/>
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;