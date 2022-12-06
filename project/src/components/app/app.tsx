import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Layout from '../layout';
import browserHistory from '../../browser-history';
import HistoryRouter from '../../components/history-route/history-route';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={AppRoute.Main} element={<MainScreen />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Room} element={<PropertyScreen />} />
          <Route path='*' element={<NotFoundScreen />} />
          <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
