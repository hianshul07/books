import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../context/books';

const BookList = ({ books, onDelete, onEdit }) => {
	const { count, incrementCount } = useContext(BooksContext);

	const renderedBooks = books.map((book) => {
		return (
			<BookShow key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
		);
	});

	return (
		<div className='book-list'>
			{renderedBooks}
		</div>
	);
};
export default BookList;
