import { useEffect, useState } from "react";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read"); // default tab

  useEffect(() => {
    const storedRead = JSON.parse(localStorage.getItem("readBooks")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlistBooks")) || [];

    setReadBooks(storedRead);
    setWishlistBooks(storedWishlist);
  }, []);

  const renderBookCard = (book, showDate = false) => (
    <div key={book.bookId} className="bg-white shadow-md rounded-lg p-4 flex gap-4 mb-6">
      <img src={book.image} alt={book.bookName} className="w-24 h-32 object-cover rounded" />
      <div>
        <h2 className="text-xl font-bold">{book.bookName}</h2>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Pages:</strong> {book.totalPages}</p>
        <p><strong>Tags:</strong> {book.tags.map(tag => (
          <span key={tag} className="mr-2 text-green-600">#{tag}</span>
        ))}</p>
        {showDate && <p><strong>Read on:</strong> {book.readDate}</p>}
      </div>
    </div>
  );

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center"> My Library</h1>

    
      <div className="flex justify-center gap-4 mb-8">
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
