import 'react-toastify/dist/ReactToastify.css'
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <RouterProvider router={routes}></RouterProvider>
      </div>
      <ToastContainer />
    </HelmetProvider>
  );
}

export default App;
