import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
import BooksContext from './context/booksContext';
import { useState, useEffect, useContext } from 'react';

function App() {
	const { fetchBooks } = useContext(BooksContext);

	useEffect(() => {
		fetchBooks();
	}, []);

	return (
		<div className='app'>
			<h1>Reading List</h1>
			<BookList />
			<BookCreate />
		</div>
	);
}

export default App;
