type PropsType = {
	viewCart: boolean;
	setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Nav = ({ viewCart, setViewCart }: PropsType) => {
	const button = viewCart ? (
		<button onClick={() => setViewCart(false)}>View Product</button>
	) : (
		<button onClick={() => setViewCart(true)}>View Cart</button>
	);

	return <nav className="nav">{button}</nav>;
};

export default Nav;
