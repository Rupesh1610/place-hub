import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPlaces from './places/pages/NewPlaces';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/navigations/MainNavigation';
import User from './users/pages/User';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/:userId/places' element={<UserPlaces />} />
          <Route path='/places/new' element={<NewPlaces />} />
          <Route path='*' element={<h1>404 Not found!</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
