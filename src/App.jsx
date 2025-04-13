// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Auths/Login';
import Home from './Components/Home/Home';
import Artist from './ArtistDashboard/Artist';
import Client from './ClientDashboard/Client';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={< Login/>} />
          <Route path="/" element={< Home/>} />
          <Route path="/artist" element={< Artist/>} />
          <Route path="/client" element={< Client/>} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
