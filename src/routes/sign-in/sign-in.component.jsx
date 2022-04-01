import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { Button } from '@mui/material';

const SignIn = (props) => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <Button onClick={logGoogleUser} color="primary">
        Sign in with Google Popup
      </Button>
    </div>
  );
}

export default SignIn;