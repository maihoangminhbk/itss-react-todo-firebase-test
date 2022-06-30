import React from 'react';
// import Styledfirebaseauth from 'react-firebaseui/Styledfirebaseauth';

/* ライブラリ */
import { firebase, auth, uiconfig } from "../lib/firebase";

function Login() {
  return (
    <div className="column panel-block">
      <div uiconfig={uiconfig} firebaseauth={auth} />
    </div>
  );
};

export default Login;