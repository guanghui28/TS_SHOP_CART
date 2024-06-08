import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	const [viewCart, setViewCart] = useState<boolean>(false);
	const pageContent = viewCart ? <Cart /> : <ProductList />;

	return (
		<>
			<Header viewCart={viewCart} setViewCart={setViewCart} />
			{pageContent}
			<Footer viewCart={viewCart} />
		</>
	);
};

export default App;
