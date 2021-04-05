import { toast } from 'react-toastify';
import { BrowserRouter, Switch, Route, RouteProps, Redirect } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

import Landing from './Pages/Landing';
import Login from './Pages/Login';
import RecoverPassword from './Pages/RecoverPassword';
import getIsAuth from './services/getIsAuth';
import Error from './Pages/Error';

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
        <PrivateRoute path="/dashboard" exact component={Dashboard}  />
        <UnauthRoute path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;