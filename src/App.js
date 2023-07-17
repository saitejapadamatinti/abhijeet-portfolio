import { Route, Routes } from "react-router-dom";
import "./App.css";
import BlogPage from "./components/blogs";
import BlogDetails from "./components/blogDetails";
import BlogBaackendForm from "./adminComponent/blogAdminForm";
import HomePage from "./components/HomePage";
import UserEmailsAdmin from "./adminComponent/userEmailsAdmin";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/adminBlogForm" element={<BlogBaackendForm />} />
        <Route path="/adminUsersEmails" element={<UserEmailsAdmin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
