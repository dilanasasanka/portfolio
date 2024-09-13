import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectViewPage from './pages/ProjectViewPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path="/projects/:id" element={<ProjectViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
