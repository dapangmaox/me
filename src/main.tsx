import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Router from 'routes/Router';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={Router} />
  </>
);
