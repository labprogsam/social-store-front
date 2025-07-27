import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { CategoriesView, HomeView, ProductView, OngView, Login, OngProduct } from '../views';
import ProductDetailView from '../views/ProductDetail';

import {
  Base,
  ScrollToTop
} from '../components';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from './ProtectRoute';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


const InternalRoutes = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Router basename="/app">
        <ScrollToTop />
        <Routes>
          <Route element={<Base />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomeView />} />

            {/* 2. Adicione a nova rota dinâmica aqui */}
            <Route path="produtos/:id" element={<ProductDetailView />} /> {/* <-- ADICIONE ESTA LINHA */}

            <Route path="categories/:id" element={<CategoriesView />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route
              path="ong"
              element={
                // <ProtectedRoute>
                  <Base />
                // </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to={"home"} />} />
              <Route path="home" element={<div>ong home</div>} />
              <Route path="criar-produto" element={<OngProduct />} />
            </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default InternalRoutes;
