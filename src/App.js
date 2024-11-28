import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// Layout
import RootLayout from './Layout/RootLayout';

// Pages
import OnBoardingPage from './Pages/OnBoardingPage/OnBoardingPage';
import Classes from './Pages/Classes/Classes';
import Authentication from './Pages/Auth/Authentication';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<OnBoardingPage />} />
      <Route path='classes' element={<Classes />} />
      <Route path='auth' element={<Authentication />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
