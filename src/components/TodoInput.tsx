import React, { KeyboardEvent, useRef } from 'react';
import TextField from '@mui/material/TextField';
type Props = {
  themeIsLight: boolean;
};

function TodoInput({ themeIsLight }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  document.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
      if (inputRef.current?.value) {
        console.log('Todo Eklenecek');
        inputRef.current.value = '';
      } else {
        inputRef.current?.focus();
      }
    }
  });

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        placeholder="Add Todo"
        className={`${
          themeIsLight
            ? 'text-light-text border-light-border bg-light-input-background placeholder:text-light-text'
            : 'text-dark-text border-dark-border bg-dark-input-background placeholder:text-dark-text'
        } w-full p-2 mb-5 border`}
      />
    </>
  );
}

export default TodoInput;
