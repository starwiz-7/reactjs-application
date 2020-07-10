import React from 'react';
import { Container } from 'reactstrap'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import ResetPassword from './components/ResetPassword/ResetPassword'
import SuccessfulPasswordReset from './components/SuccessfulPasswordReset/SuccessfulPasswordReset'

function App() {
  return (
    <Container fluid={true}>
      {/* <Login/> */}
      {/* <SignUp /> */}
      {/* <ResetPassword /> */}
      {/* <ForgotPassword /> */}
      <SuccessfulPasswordReset />
    </Container>
  );
}

export default App;
