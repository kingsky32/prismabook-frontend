import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Routes/Home";
import Auth from "../Routes/Auth";
import Login from "../Routes/Login";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";
import Footer from "./Footer";
import Header from "./Header/Header";
import { Helmet } from "react-helmet";
import Favicon from "../Assets/favicon2.ico";
import { connect } from "react-redux";
import { me } from "../store";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../ShardQueries";

const LoggedInRoutes = ({ me }) => {
  const { data, loading } = useQuery(ME);
  useEffect(() => {
    !loading && data && data.me && me(data.me);
  }, [loading, data, me])
  return (
    <>
      <Helmet>
      <link rel="shortcut icon" href={Favicon} />
      </Helmet>

      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/:id" component={Profile} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  )
};

const LoggedOutRoutes = () =>
  <>
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route exact path="/login" component={Login} />
    </Switch>
    <Footer />
  </>;

const Routes = ({ isLoggedIn, me }) =>
  <Switch>
    {isLoggedIn ? <LoggedInRoutes me={me} /> : <LoggedOutRoutes />}
  </Switch>;

const mapDispatchToProps = dispatch => {
  return {
    me: text => dispatch(me(text))
  };
};

export default connect(null, mapDispatchToProps)(Routes);
