import { BrowserRouter, Route, Routes } from 'react-router-dom';
import'../node_modules/bootstrap/dist/css/bootstrap.css'
import'../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import Header from './template/Header';
import AddProduct from './product/AddProduct';
import ViewProduct from './product/ViewProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path="" element={<ViewProduct/>}></Route>
        <Route path="add" element={<AddProduct/>}></Route>
        <Route path="view" element={<ViewProduct/>}></Route>
        <Route path='edit/:id'element={<AddProduct/>}></Route>

      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
