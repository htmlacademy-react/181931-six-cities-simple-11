import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Layout from '../layout';
import { Reviews } from '../../types/reviews';
import browserHistory from '../../browser-history';
import HistoryRouter from '../../components/history-route/history-route';

type AppProps = {
  reviews: Reviews;
};

function App({reviews}: AppProps): JSX.Element {

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            path={AppRoute.Main}
            element={<MainScreen />}
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Room}
            element={<PropertyScreen reviews={reviews} />}
          />
          <Route path='*' element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
