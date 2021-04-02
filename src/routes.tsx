import { toast } from 'react-toastify';
import { BrowserRouter, Switch, Route, RouteProps, Redirect } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

import Landing from './Pages/Landing';
import Login from './Pages/Login';
import RecoverPassword from './Pages/RecoverPassword';
import Error from './Pages/Error';
import getIsAuth from './services/getIsAuth';
import ErrorRecover from './Pages/ErrorRecover';

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const isAuth = getIsAuth();

  if (isAuth) return <Route {...props} />
  else {
    toast.error('sessão expirada');
    return <Redirect to="/" />
  }
};

const UnauthRoute: React.FC<RouteProps> = (props) => {
  const isAuth = getIsAuth();

  if (!isAuth) return <Route {...props} />
  else return <Redirect to="/dashboard" />
};

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/recover" exact component={RecoverPassword} />
        <Route path="/error" exact component={Error} />
        <Route path="/error-recover" exact component={ErrorRecover} />
        <PrivateRoute path="/dashboard" exact component={Dashboard}  />
        <UnauthRoute path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;