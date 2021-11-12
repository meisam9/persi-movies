import {Suspense, lazy} from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./config";
import { useAuthState } from "../context";
import Loading from "../components/loading";
import Layout from "../layout";

const Home = lazy(() => import('../pages/home'));
const Login = lazy(() => import('../pages/auth/login'));
const UserProfile = lazy(() => import('../pages/auth/userProfile'));
const Movie = lazy(() => import('../pages/movie'));
const BrowseMovies = lazy(()=> import('../pages/browseMovies'));
const NotFound = lazy(()=> import ('../pages/notFound'));
const Trends = lazy(()=> import('../pages/trends'))


const MainRouter = () => {
    const token = useAuthState().token
    const isLoggedin = () => {
        if(token) {
            return true
        }else {
            return false
        }
    }
    const isAuthenticated = isLoggedin();
    
    return (
        <BrowserRouter>
            <Layout>
                
            <Suspense fallback={<Loading/>}>
                <Switch>
                    <PublicRoute path= '/' exact isAuthenticated={isAuthenticated}>
                        <Home />
                    </PublicRoute>
                    <PublicRoute path= '/movie/:id' exact isAuthenticated={isAuthenticated}>
                        <Movie />
                    </PublicRoute>
                    <PublicRoute path= '/login' exact isAuthenticated={isAuthenticated} restricted={true}>
                        <Login />
                    </PublicRoute>
                    <PublicRoute path='/browse-movies' exact isAuthenticated={isAuthenticated}>
                        <BrowseMovies />
                    </PublicRoute>
                    <PublicRoute path='/trends' exact isAuthenticated={isAuthenticated}>
                        <Trends/>
                    </PublicRoute>
                    <PrivateRoute path='/user-profile' exact isAuthenticated={isAuthenticated}>
                        <UserProfile />
                    </PrivateRoute>
                    <Route path= '*'>
                        <NotFound />
                    </Route>
                </Switch>
            </Suspense>
            </Layout>
        </BrowserRouter>
    )
}

export default MainRouter