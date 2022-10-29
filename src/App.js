import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Phone from './components/Phone';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main>This is layout</Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/phones')
        },
        {
          path: '/phones/:id',
          element: <Phone></Phone>,
          loader: () => fetch('http://localhost:5000/phones')
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
