import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Screens/login';
import UsersList from './Screens/userlist';


function App() {
  const [authToken, setAuthToken] = useState(null);

  return (
    <BrowserRouter>
      <Routes> 
        <Route
          path="/"
          element={!authToken ? <Login setAuthToken={setAuthToken} /> : <UsersList authToken={authToken} />}
        />
        <Route path="/users" element={<UsersList authToken={authToken} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
