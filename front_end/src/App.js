import './App.css';
import UserProfile from './UserProfile';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div className="App">
        <header className="App-header">
          <UserProfile />
          <LogoutButton />
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <LoginButton />
        </header>
      </div>
    );
  }
  
}

export default App;
