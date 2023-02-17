import React from 'react';
import {SignInContainer} from "../components/SignInContainer";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";


type Props = {};

function SignIn({}: Props) {
  const themeIsLight = useSelector((state: RootState) => state.theme.isLight);
  return<div
        className={`${
            themeIsLight ? 'bg-light-input-background' : 'bg-dark-input-background'
        }
      py-10`}>
      <SignInContainer themeIsLight={themeIsLight} />
    </div>

}

export default SignIn;
