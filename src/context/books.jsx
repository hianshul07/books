import { createContext, useState } from 'react';

const BooksContext = createContext();

const Provider = ({ children }) => {
	const [count, setCount] = useState(7);

	const valueToShare = {
		count,
		incrementCount: () => {
			setCount((prevCount) => prevCount + 1);
		},
	};

	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
};

export { Provider };
export default BooksContext;
