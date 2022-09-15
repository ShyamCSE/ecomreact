import './App.css';
import Header from './Component/Header';
import Footer from './Component/Fotter';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './Component/Main';
import Store from './Component/Store';
import Products from './Component/Products';


function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Stores/:id" element={<Store />} />
        <Route path="Products/:id" element={<Products />} />
      </Routes>
      <Footer />

    </>
  );
}
export default App;
