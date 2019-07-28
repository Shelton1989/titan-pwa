import React from 'react';
import './App.css';

import LoginView from './views/LoginView';
import SiteView from './views/SiteView';
import AssetsView from './views/AssetView';
import JobsView from './views/JobsView';
import CreateSiteView from './views/CreateSiteView';
import CreateAssetView from './views/CreateAssetView';
import UpdateAssetView from './views/updateAssetView';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginView}></Route>
          <Route exact path="/" render={()=>{
            return <Redirect to="/login" />
          }} />
          <Route path="/health" render={()=>{
            return <Redirect to="/login" />
          }} />
          <PrivateRoute path="/sites" component={SiteView} ></PrivateRoute>
          <PrivateRoute exact path="/assets" component={AssetsView} ></PrivateRoute>
          <PrivateRoute path="/jobs" component={JobsView} ></PrivateRoute>
          <PrivateRoute path="/create_site" component={CreateSiteView} ></PrivateRoute>
          <PrivateRoute path="/create_asset" component={CreateAssetView} ></PrivateRoute>
          <PrivateRoute path="/assets/:id" component={UpdateAssetView} ></PrivateRoute>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('token')
  return (
    <Route 
      {...rest}
      render={props =>
        (token)? (<Component {...props} />) :
        (<Redirect to={{
          pathname: "/login",
          state: { from: props.location}
        }} />)
      }
    />
  )
}

export default App;
