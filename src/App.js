import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogPage from "./components/blogs";
import BlogDetails from "./components/blogDetails";
import BlogBaackendForm from "./adminComponent/blogAdminForm";
import HomePage from "./components/HomePage";
import UserEmailsAdmin from "./adminComponent/userEmailsAdmin";
import Footer from "./components/Footer"
import Navebar from "./components/navbar/header";
import AdminMainComp from "./adminComponent/adminMainComponent";

function App() {
  return (
    <>
      <Navebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/adminPage" element={<AdminMainComp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
