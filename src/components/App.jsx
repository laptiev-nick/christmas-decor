import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { Main } from './Main/Main';

export const App = () => {
  return (
    <BrowserRouter basename="christmas-decor">
       <Routes> 
        <Route path="/" element={<Layout />}> 
          <Route index element={<Main />} /> 
        </Route> 
      </Routes> 
    </BrowserRouter>
    )
};
