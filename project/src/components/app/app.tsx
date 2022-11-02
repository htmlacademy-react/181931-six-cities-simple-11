import { Route, BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';
import { AppRoute } from '../../const';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import Layout from '../layout';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';

type AppProps = {
  offers: Offers;
  reviews: Reviews;
};

function App({ offers, reviews }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            path={AppRoute.Main}
            element={<MainScreen offers={offers} />}
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Room}
            element={<PropertyScreen offers={offers} reviews={reviews} />}
          />
          <Route path='*' element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
