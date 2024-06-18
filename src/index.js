import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import ArticlePage from './components/ArticlePage';
import App from './App';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContacPage';
import DepressionPage from './components/DepressionPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: '/article',
        element: <ArticlePage/>
      },
      {
        path: '/service',
        element: <ServicePage/>
      },
      {
        path: '/contact',
        element: <ContactPage/>
      }
      ,{
        path: '/article/depression',
        element: <DepressionPage/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
