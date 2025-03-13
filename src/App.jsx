// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Auths/Login';
import Home from './Components/Home/Home';
import Artist from './ArtistDashboard/Artist';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Login/>} />
          <Route path="/landing" element={< Home/>} />
          <Route path="/artist" element={< Artist/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
