import React from 'react';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

/* ライブラリ */
import { firebase, auth, uiConfig } from "../lib/firebase";

function Login() {
  return (
    <div className="column panel-block">
      <div uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default Login;