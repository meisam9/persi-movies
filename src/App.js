import {Fragment} from 'react';
import { AuthProvider } from './context';
import MainRouter from './router';




function App() {
  return (
    <Fragment>
      <AuthProvider>
      <MainRouter />
      </AuthProvider>
    </Fragment>
  );
}

export default App;
