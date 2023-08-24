import { BrowserRouter } from 'react-router-dom';
import Global from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Global />
    </BrowserRouter>
  );
}

export default App;
