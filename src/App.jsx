import InternalRoutes from "./routes/InternalRoutes";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/auth";
import AlertProvider from "./contexts/alert";
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <AuthProvider>
          <InternalRoutes />
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;