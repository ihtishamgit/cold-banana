import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import ProductList from "./Pages/ProductList/ProductList";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ProductDetail />
      <ProductList />
      <Footer />
    </>
  );
}

export default App;
