import 'swiper/css';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={Home} />
    </BrowserRouter>
  );
}

export default App;
