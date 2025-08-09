import { useEffect, useState } from "react";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read");

  useEffect(() => {
    const storedRead = JSON.parse(localStorage.getItem("readBooks")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlistBooks")) || [];

    setReadBooks(storedRead);
    setWishlistBooks(storedWishlist);
  }, []);

  const renderBookCard = (book, showDate = false) => (
    <div key={book.bookId} className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center mb-6 border border-blue-100">
      <img src={book.image} alt={book.bookName} className="w-28 h-40 object-cover rounded-md" />
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{book.bookName}</h2>
        <p className="text-sm text-gray-600 mb-1">By: <span className="font-medium">{book.author}</span></p>
        <div className="flex flex-wrap gap-2 mb-2">
          {book.tags.map(tag => (
            <span key={tag} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">#{tag}</span>
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-1">Year of Publishing: <span className="font-medium">{book.yearOfPublishing}</span></p>
        <p className="text-sm text-gray-600 mb-1"> Publisher: <span className="font-medium">{book.publisher}</span></p>
        <p className="text-sm text-gray-600 mb-1">Page: <span className="font-medium">{book.totalPages}</span></p>
        <div className="flex flex-wrap gap-3 mt-3 mb-3">
          <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Category: {book.category}</span>
          <span className="bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full">Rating: {book.rating}</span>
        </div>
        {showDate && (
          <p className="text-sm text-gray-600 mb-2">📖 Read on: <span className="font-medium">{book.readDate}</span></p>
        )}
     
      </div>
    </div>
  );

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center"> My Library</h1>

     
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("read")}
          className={`px-6 py-2 font-semibold rounded-full transition ${
            activeTab === "read" ? "bg-[#23BE0A] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Read Books
        </button>
        <button
          onClick={() => setActiveTab("wishlist")}
          className={`px-6 py-2 font-semibold rounded-full transition ${
            activeTab === "wishlist" ? "bg-[#23BE0A] text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          Wishlist
        </button>
      </div>

 
      {activeTab === "read" ? (
        <div>
          {readBooks.length > 0 ? (
            readBooks.map(book => renderBookCard(book, true))
          ) : (
            <p className="text-gray-500 text-center">You haven't read any books yet.</p>
          )}
        </div>
      ) : (
        <div>
          {wishlistBooks.length > 0 ? (
            wishlistBooks.map(book => renderBookCard(book))
          ) : (
            <p className="text-gray-500 text-center">Your wishlist is empty.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default ListedBooks;
