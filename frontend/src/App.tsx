import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'
import AddBlog from './pages/AddBlog'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Blogs />} />
          <Route path="/content" element={<BlogDetails />} />
          <Route path="/add" element={<AddBlog />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App