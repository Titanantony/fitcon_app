import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Layouts
import RootLayout from './Layout/RootLayout';
import AuthLayout from './Layout/AuthLayout';

// Pages
import OnBoardingPage from './Pages/OnBoardingPage/OnBoardingPage';
import Classes from './Pages/Classes/Classes';
import LoginPage from './Pages/Auth/LogIn/LoginPage';
import SignUpPage from './Pages/Auth/SignUp/SignUpPage';
import Dashboard from './Pages/Dashboard/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Routes with navigation (RootLayout) */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<OnBoardingPage />} />
        <Route path="classes" element={<Classes />} />
        <Route path="dashboard" element={<Dashboard />} /> {/* Protected route */}
      </Route>

      {/* Routes without navigation (AuthLayout) */}
      <Route element={<AuthLayout />}>
        <Route path="signIn" element={<LoginPage />} />
        <Route path="signUp" element={<SignUpPage />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
