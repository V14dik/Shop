import "./App.scss";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductList />
      </main>
    </>
  );
}

export default App;
