import "./App.scss";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";
import { Cart } from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductList />
        <Cart />
      </main>
    </>
  );
}

export default App;
