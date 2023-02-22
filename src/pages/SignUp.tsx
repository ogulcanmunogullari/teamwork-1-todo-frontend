import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { SignUpContainer } from '../components/SignUpContainer';

type Props = {};

function SignUp({}: Props) {
  const themeIsLight = useSelector((state: RootState) => state.theme.isLight);
  return (
    <div
      className={`${
        themeIsLight ? 'bg-light-input-background' : 'bg-dark-input-background'
      }
      py-10  mt-[10%]`}>
      <SignUpContainer themeIsLight={themeIsLight} />
    </div>
  );
}

export default SignUp;
