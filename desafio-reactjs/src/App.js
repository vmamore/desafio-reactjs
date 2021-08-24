import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/profile/:username" exact component={Profile} />
    </BrowserRouter>
  );
}

export default App;
