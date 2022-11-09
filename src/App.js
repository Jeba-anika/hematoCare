import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </HelmetProvider>
  );
}

export default App;
