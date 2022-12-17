import './index.css';

import {Route, Routes} from 'react-router-dom'

import routes from './routes';

function App() {
  return (
    <div className="App">
     <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
