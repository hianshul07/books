import { useState, useContext } from 'react';
import BooksContext from '../context/booksContext';

const BookCreate = () => {
	const [title, setTitle] = useState('');
	const { createBook } = useContext(BooksContext);

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createBook(title);
		setTitle('');
	};

	return (
		<div className='book-create'>
			<form onSubmit={handleSubmit}>
				<label htmlFor=''>Title</label>
				<input
					className='input'
					type='text'
					name=''
					id=''
					value={title}
					onChange={handleChange}
				/>
				<button className='button'>Create!!!</button>
			</form>
		</div>
	);
};
export default BookCreate;
