import React, { useState, useCallback} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import NewPlace from './Places/pages/NewPlace';
import UpdatePlace from './Places/pages/UpdatePlace';
import UserPlaces from './Places/pages/UserPlaces';

import MainNavigation from './shared/componets/Navigation/MainNavigation';
import Auth from './user/pages/Auth';
import Users from './user/pages/Users';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, [])

  let routes

  if(isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
         <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
         <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
         <Route path="/:userId/places" exact>
         <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
    <Router>
      <MainNavigation />
    <main>
      {routes}
    </main>
  </Router>
  </AuthContext.Provider>
  )
}

export default App;
