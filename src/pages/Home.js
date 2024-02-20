import NavBar from "../features/navbar/NavBar";
import ProductList from "../features/product/components/ProductList"

function Home() {
  return (
    <NavBar>
      <ProductList />
    </NavBar>
  )
}

export default Home;