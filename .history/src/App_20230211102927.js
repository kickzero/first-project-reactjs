import Footer from './components/Footer';
import Header from './components/Header';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostDetailPage from './pages/PostDetailPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actFetchAllCategoriesAsync } from './store/category/action';
import { actGetMenusAsync } from './store/menu/action';
import { actFetchMeAsync } from './store/user/action';
import ChangePassword from './pages/ChangePasswordPage';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actGetMenusAsync());
    dispatch(actFetchAllCategoriesAsync());
    dispatch(actFetchMeAsync());
  },[dispatch] );

  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route path="/post/:slug">
            <PostDetailPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/changePassword">
            <ChangePassword />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <div className="spacing" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
