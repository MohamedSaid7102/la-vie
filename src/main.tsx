// 3ed parties
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  redirect,
} from 'react-router-dom';
// Styles
import '@styles/index.css';
// Componenets
import App from './App';
import { AboutUs, AuthWrapper, Footer } from '@components/';
import { Home, Signin, Signup, ErrorPage } from '@pages/';
// redux toolki
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from '@redux/features/api/apiSlice';
import { store } from '@redux/store';
import { useNavigate } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      // Singin
      {
        path: '/signin',
        element: (
          <AuthWrapper>
            <Signin />
          </AuthWrapper>
        ),
      },
      // Signup
      {
        path: '/signup',
        element: (
          <AuthWrapper>
            <Signup />
          </AuthWrapper>
        ),
      },
      // home
      {
        path: '/home',
        element: <Home />,
      },
      // About
      {
        path: '/about',
        element: (
          <div>
            <AboutUs />
            <Footer />
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);

