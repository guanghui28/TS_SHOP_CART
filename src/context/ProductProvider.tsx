import { createContext, ReactElement, useState, useEffect } from "react";

export type ProductType = {
	sku: string;
	name: string;
	price: number;
};

const initialState: ProductType[] = [];

export type UseProductContextType = {
	products: ProductType[];
};

const initialContextState: UseProductContextType = { products: [] };

const ProductContext =
	createContext<UseProductContextType>(initialContextState);

type ChildrenType = {
	children?: ReactElement | ReactElement[];
};

export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
	const [products, setProducts] = useState<ProductType[]>(initialState);

	useEffect(() => {
		const fetchProducts = async (): Promise<ProductType[]> => {
			const data = await fetch("http://localhost:3500/products")
				.then((res) => res.json())
				.catch((err) => {
					if (err instanceof Error) console.log(err.message);
				});

			return data;
		};

		fetchProducts().then((data) => setProducts(data));
	}, []);

	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
};
