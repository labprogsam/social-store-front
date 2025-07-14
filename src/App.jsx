import InternalRoutes from "./routes/InternalRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/auth";
import AlertProvider from "./contexts/alert";
import { Base } from "./components";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <Base>
        <AlertProvider>
          <AuthProvider>
            <InternalRoutes />
          </AuthProvider>
        </AlertProvider>
      </Base>
    </BrowserRouter>
  );
}

export default App;