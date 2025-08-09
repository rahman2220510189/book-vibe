import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/Book.json')
      .then(res => res.json())
      .then(data => {
        const foundBook = data.find(b => b.bookId === bookId || b.bookId === parseInt(bookId));
        setBook(foundBook);
        setLoading(false);
      });
  }, [bookId]);

  if (loading) {
    return <div className="text-center py-20 text-xl font-semibold">Loading book details...</div>;
  }

  if (!book) {
    return <div className="text-center py-20 text-red-500 text-xl">Book not found</div>;
  }

  const handleMarkAsRead = () => {
    const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    const alreadyRead = readBooks.find(b => b.bookId === book.bookId);

    if (!alreadyRead) {
      const newBook = {
        ...book,
        readDate: new Date().toISOString().split('T')[0] // Correct date format
      };
      localStorage.setItem('readBooks', JSON.stringify([...readBooks, newBook]));
    }

    navigate('/library');
  };

  const handleAddToWishlist = () => {
    const wishlistBooks = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
    const alreadyInWishlist = wishlistBooks.find(b => b.bookId === book.bookId);

    if (!alreadyInWishlist) {
      localStorage.setItem('wishlistBooks', JSON.stringify([...wishlistBooks, book]));
    }

    navigate('/library');
  };

  return (
    <section className="max-w-6xl mx-auto p-8 flex gap-10">
      <div className="w-1/3 bg-gray-100 p-4 rounded-lg">
        <img src={book.image} alt={book.title} className="rounded" />
      </div>
      <div className="w-2/3">
        <h1 className="text-3xl font-bold mb-4">{book.bookName}</h1>
        <p><strong>By:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p className="mt-4"><strong>Review:</strong> {book.review}</p>
        <div className="mt-4">
          <strong>Tag: </strong>
          {book.tags.map(tag => (
            <span key={tag} className="inline-block bg-green-100 text-green-600 rounded px-3 py-1 mr-2">
              #{tag}
            </span>
          ))}
        </div>
        <hr className="my-6" />
        <p><strong>Number of Pages:</strong> {book.totalPages}</p>
        <p><strong>Publisher:</strong> {book.publisher}</p>
        <p><strong>Year of Publishing:</strong> {book.year}</p>
        <p><strong>Rating:</strong> {book.rating}</p>

        <div className="space-x-3 mt-3">
          <button onClick={handleMarkAsRead} className="bg-[#59C6D2] hover:bg-[#23BE0A] text-white font-semibold px-6 py-2 rounded shadow-md transition duration-300 ease-in-out">
            Read
          </button>
          <button onClick={handleAddToWishlist} className="bg-[#59C6D2] hover:bg-[#23BE0A] text-white font-semibold px-6 py-2 rounded shadow-md transition duration-300 ease-in-out">
            Wishlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
