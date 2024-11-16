// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Auths/signup';
import Login from './Components/Auths/login';

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={< Login/>} />
          <Route path="/signup" element={< Signup/>} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
