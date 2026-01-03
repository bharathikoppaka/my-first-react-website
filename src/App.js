import { HashRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/AdminLogin";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import Category from "./admin/Category";
import Location from "./admin/Location";
import Products from "./admin/Products";

function App() {
  return (
    <HashRouter>
      {/* Public layout */}
      <TopBar />
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminLogin />} />

        {/* Admin routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/category"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Category />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/location"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Location />
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <AdminLayout>
                <Products />
              </AdminLayout>
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
      </HashRouter>
  );
}

export default App;
