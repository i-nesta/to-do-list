import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Loyout } from './loyouts/Loyout';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'First day',
    isDone: false
  },
  {
    id: 1,
    text: 'two day',
    isDone: true
  },
  {
    id: 2,
    text: 'three day', 
    isDone: false
  },
  {
    id: 3,
    text: 'four day',
    isDone: true
  },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Loyout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos}/>
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos}/>
      },
      
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>
);

