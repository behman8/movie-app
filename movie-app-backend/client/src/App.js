import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import MoviesContainer from './Containers/MoviesContainer';
import LoginForm from './Containers/LoginForm';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies" element={<MoviesContainer />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
