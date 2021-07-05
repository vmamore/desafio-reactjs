import { BrowserRouter, Route } from 'react-router-dom';

import { UserContextProvider } from './context/UserContext';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
