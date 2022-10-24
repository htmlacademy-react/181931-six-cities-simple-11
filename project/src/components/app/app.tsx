import {Route, BrowserRouter, Routes} from 'react-router-dom';
import React from 'react';
import {AppRoute} from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Layout from '../layout';

type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route
            index
            element={<MainScreen offersCount={offersCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={
              <LoginScreen/>
            }
          />
          <Route
            path={AppRoute.Room}
            element={<PropertyScreen />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
