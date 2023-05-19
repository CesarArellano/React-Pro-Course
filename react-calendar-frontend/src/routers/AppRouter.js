import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

// Components
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

import { startChecking } from '../actions/auth';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector(state => state.auth);
  
  useEffect(() => {
    dispatch( startChecking() );
  }, [dispatch]);
  
  if( checking ) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <Switch>
        <PublicRoute 
          exact 
          isLoggedIn={ !!uid }
          path="/login"
          component={ LoginScreen }
        />
        <PrivateRoute 
          exact
          isLoggedIn={ !!uid }
          path="/"
          component={ CalendarScreen }
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}
