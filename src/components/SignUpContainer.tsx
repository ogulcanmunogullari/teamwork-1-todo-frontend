import { Link } from 'react-router-dom';
type Props = {
  themeIsLight: boolean;
};

export const SignUpContainer = ({ themeIsLight }: Props) => {
  return (
    <div
      className={`${
        themeIsLight
          ? 'bg-light-background border-light-border sm:shadow-lg sm:shadow-light-border'
          : 'bg-dark-background border-dark-border sm:shadow-lg sm:shadow-dark-background'
      } max-w-[640px] p-2 sm:p-5 mx-auto border overflow-hidden`}>
      <h1
        className={`text-center text-xl mb-5 ${
          themeIsLight ? 'text-light-text' : 'text-dark-text'
        }`}>
        Sign Up
      </h1>
      <div className="flex flex-col gap-2">
        <div className={`flex gap-2`}>
          <label
            htmlFor="signUpInput"
            className={`${
              themeIsLight ? 'text-light-text' : 'text-dark-text'
            } w-20`}>
            Username:
          </label>
          <input
            id="signUpInput"
            className={`flex-1 ${
              themeIsLight
                ? 'bg-light-input-background text-light-text'
                : 'bg-dark-input-background text-dark-text'
            }`}
            type="text"
          />
        </div>
        <div className={`flex gap-2`}>
          <label
            htmlFor="passwordInput"
            className={`${
              themeIsLight ? 'text-light-text' : 'text-dark-text'
            } w-20`}>
            Password:
          </label>
          <input
            type="password"
            id="passwordInput"
            className={`flex-1  ${
              themeIsLight
                ? 'bg-light-input-background text-light-text'
                : 'bg-dark-input-background text-dark-text'
            }`}
          />
        </div>
      </div>
      <div className={`flex justify-between items-center mt-5`}>
        <label>
          <Link
            to={'/'}
            className={`underline ${
              themeIsLight
                ? 'text-light-text decoration-light-text'
                : 'text-dark-text decoration-dark-text'
            }`}>
            I have an account.
          </Link>
        </label>
        <button
          className={`border py-1 px-4 shadow 
              transition-all ${
                themeIsLight
                  ? 'shadow-dark-input-background border-light-border bg-light-input-background text-light-text duration-500 focus:shadow-inner focus:shadow-dark-input-background focus:bg-light-background'
                  : 'shadow-dark-border border-dark-border bg-dark-input-background text-dark-text duration-500 focus:shadow-inner focus:shadow-dark-background focus:bg-dark-input-background'
              }`}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
