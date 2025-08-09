import { useEffect, useRef, useState } from "react";
import book from '../../assets/books.jpg'
import BookCard from "../BookCard";
import { Link } from "react-router-dom";

const Home = () => {
    const bottomSectionRef = useRef(null);

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("/Book.json")
            .then(res => res.json())
            .then(data => setBooks(data));

    }, []);

    const handleScroll = () => {
        bottomSectionRef.current.scrollIntoView({ behavior: "smooth" })
    };


    return (
        <div>

            <section>
                <div className="hero bg-[#f8f1f1] min-h-screen px-6">
                    <div className="hero-content flex-col lg:flex-row">
                        <div>
                            <h1 className="text-5xl font-semibold mb-6">
                                Books to freshen up <br /> your bookshelf
                            </h1>
                            <p className="text-lg text-gray-600 mb-8">
                                Discover a variety of books to inspire your mind and brighten your day.
                            </p>
                            <button
                                onClick={handleScroll}
                                className="bg-[#23BE0A] hover:bg-[#1f9a07] text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
                            >
                                Get Started
                            </button>

                        </div>
                        <img
                            src={book}
                            className="max-w-sm rounded-lg shadow-2xl lg:mr-12"
                            alt="Books"
                        />
                    </div>
                </div>
            </section>

            <section ref={bottomSectionRef} className="bg-white py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10 text-center">
                        Our Book Collection
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            books.map((book) => (
                                <Link key={book.bookId} to={`books/${book.bookId}`}>
                                    <BookCard book={book} />
                                </Link>
                            ))
                        }
                    </div>


                </div>

            </section>


        </div>
    );
};

export default Home;
