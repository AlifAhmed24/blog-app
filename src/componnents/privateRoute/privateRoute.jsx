import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = false;
  
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate
            to="/login"
            state={{ from: location }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;