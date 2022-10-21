import React from 'react';
import MainScreen from '../../pages/main-screen/main-screen';
import Header from '../header/header';

type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  return (
    <React.Fragment>
      <Header />
      <MainScreen offersCount={offersCount}/>
    </React.Fragment>
  );
}

export default App;
