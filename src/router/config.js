import {Route, Redirect} from 'react-router-dom'

export function PublicRoute({ children, isAuthenticated, restricted,  ...rest }) {
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          isAuthenticated & restricted ? (
            <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
          ) : (
            children
          ))
      }
    />
  );
};


export function PrivateRoute({ children, isAuthenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={
          ({ location }) => (
            isAuthenticated
              ? (
                children
              ) : (
                <Redirect
                to={{
                  pathname: '/login',
                  state: { from: location }
                }}
              />
                
              ))
        }
      />
    )
  }
