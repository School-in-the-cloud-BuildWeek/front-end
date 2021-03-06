import React from 'react';
import AdminDash from './components/AdminDash';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp'
import Login from './components/Login'
import styled from 'styled-components'
import VolunteerDash from './components/VolunteerDash'
import StudentDash from './components/StudentDash'
import "bootstrap/dist/css/bootstrap.css";
import PrivateRoute from './utils/PrivateRoute';

const AppContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 100%;
`

function App() {

  return (
      <AppContainer className="App">
        <Switch>
          <PrivateRoute path="/admin" component={AdminDash} />
          <PrivateRoute path= "/VolunteerDash" component={VolunteerDash} />
          <PrivateRoute path= "/StudentDash" component={StudentDash} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/" component={Login} /> */
          {/* <Route path="#" component={VolunteerForm} /> */}
          {/* <VolunteerForm/> */}
        </Switch>
      </AppContainer>
  );
}

export default App;
