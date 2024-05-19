import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Games from './routes/games';
import GamesList from './routes/gameslist';
import Login from './routes/login';
import Recomendador from './routes/recomendador';
import Register from './routes/register';
import Resultado from './routes/resultado';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/gameslist" element={<GamesList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recomendador" element={<Recomendador />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
