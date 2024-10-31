import reportWebVitals from "./reportWebVitals";
import Header from "./components/header/header";
import Signup from "./components/signUp/signUp";
import MainPrograms from "./components/main_programs/mainPrograms";
import Register from "./components/signUp/register";
import Profile from "./components/profilepage/profile";
import Player from "./components/player/player";
import CoursesMeny from "./components/courses/courses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./css/app.css";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/signUp" element={<Signup />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/programs/main" element={<MainPrograms />}></Route>
        <Route path="/courses/main" element={<CoursesMeny />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/video" element={<Player />}></Route>
      </Routes>
    </div>
  );
}
reportWebVitals();
export default App;
