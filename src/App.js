import { useEffect } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { login } from './actions/authActions';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import authConfig from './auth_config.json';
import Welcome from './Welcome';
import Login from './Login';
import "./App.css";
function App() {
  const { isAuthenticated, isLoading, user, loginWithRedirect } = useAuth0();
  useEffect(() => {
      
  }, [isAuthenticated, isLoading, loginWithRedirect, user]);
  

  return (
    <Auth0Provider
      domain={authConfig.domain}
      clientId={authConfig.clientId}
      authorizationParams={{
        redirect_uri: authConfig.redirectUri
      }}
    >
      <Router> 
        <Routes>
          <Route path="/welcome"element={<Welcome/>}/>
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
