import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { TodoPage, todoLoader } from './pages/TodoPage';
import { Checkbox } from '@mui/material';
import Icon from '@mui/material/Icon';
import { changeTheme } from './redux/theme/themeSlicer';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todopage" element={<TodoPage />} loader={todoLoader} />
        <Route />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

const Root = () => {
  const themeIsLight = useSelector((state: RootState) => state.theme.isLight);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(themeIsLight);
  useEffect(() => {
    dispatch(changeTheme());
  }, [checked]);
  return (
    <>
      <nav
        className={`container mx-auto flex justify-between items-center ${
          themeIsLight
            ? 'bg-light-input-background'
            : 'bg-dark-input-background'
        }`}>
        <Link to="/">Signin</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/todopage">Todo Page</Link>
        <Checkbox
          icon={<Icon className="text-dark-text">light_mode</Icon>}
          checkedIcon={<Icon className="text-light-text">dark_mode</Icon>}
          inputProps={{ 'aria-label': 'controlled' }}
          checked={checked}
          onChange={() => setChecked((old) => !old)}
        />
      </nav>
      <Outlet />
    </>
  );
};
