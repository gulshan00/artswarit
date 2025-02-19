// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Auths/signup';
import Login from './Components/Auths/login';
import Home from './Components/Home/Home';
function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/login" element={< Login/>} />
          <Route path="/signup" element={< Signup/>} />
          <Route path="/" element={< Home/>} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
