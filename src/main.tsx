// 3ed parties
import React from 'react';
import ReactDOM from 'react-dom/client';
// Componenets
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
// rect-router
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
// Styles
import './styles/index.css';
// Componenets
import { ErrorPage } from './router/ErrorPage';
import { AuthWrapper } from './components/authuntication/AuthWrapper';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/signin',
        element: (
          <AuthWrapper>
            <Signin />
          </AuthWrapper>
        ),
      },
      {
        path: '/signup',
        element: (
          <AuthWrapper>
            <Signup />
          </AuthWrapper>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

