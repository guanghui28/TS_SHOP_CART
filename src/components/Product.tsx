import { ProductType } from "../context/ProductProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement } from "react";

type PropsType = {
	product: ProductType;
	dispatch: React.Dispatch<ReducerAction>;
	REDUCER_ACTIONS: ReducerActionType;
	inCart: boolean;
};

const Product = ({
	product,
	dispatch,
	REDUCER_ACTIONS,
	inCart,
}: PropsType): ReactElement => {
	const onAddCart = () =>
		dispatch({
			type: REDUCER_ACTIONS.ADD,
			payload: { ...product, quantity: 1 },
		});

	const itemInCart = inCart && "➡️ Item in Cart: ✅";

	return (
		<article className="product">
			<h3>{product.name}</h3>
			<img
				src={`./${product.sku}.jpg`}
				alt={product.name}
				className="product__img"
			/>
			<p>
				{new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD",
				}).format(product.price)}{" "}
				{itemInCart}
			</p>
			<button onClick={onAddCart}>Add to Cart</button>
		</article>
	);
};

export default Product;
