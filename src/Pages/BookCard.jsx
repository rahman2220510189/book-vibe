import React from "react";

const BookCard = ({ book }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} type="full" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<Star key={i} type="half" />);
      } else {
        stars.push(<Star key={i} type="empty" />);
      }
    }

    return <div className="flex gap-1">{stars}</div>;
  };

  const Star = ({ type }) => {
    const baseClass = "w-5 h-5 flex-shrink-0";
    if (type === "half") {
      return (
        <svg className={baseClass} viewBox="0 0 20 20" fill="url(#halfGrad)">
          <defs>
            <linearGradient id="halfGrad">
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#d1d5db" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.922-.755 1.688-1.54 1.118l-3.384-2.455a1 1 0 00-1.175 0l-3.384 2.455c-.784.57-1.838-.196-1.54-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.036 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      );
    }

    return (
      <svg
        className={`${baseClass} ${type === "full" ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.455a1 1 0 00-.364 1.118l1.286 3.974c.3.922-.755 1.688-1.54 1.118l-3.384-2.455a1 1 0 00-1.175 0l-3.384 2.455c-.784.57-1.838-.196-1.54-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.036 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
      </svg>
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden w-[326px] mx-auto flex flex-col">
   
      <div className="w-full bg-gray-50 p-6 flex items-center justify-center">
        <img
          src={book.image}
          alt={book.bookName}
          className="max-h-48 object-contain "
          loading="lazy"
        />

         
      </div>
         <div className="flex flex-wrap gap-2 mb-4 mx-2">
            {book.tags?.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-slate-100 text-[#23BE0A] px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

   
      <div className="px-2 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-1">{book.bookName}</h2>
          <p className="text-gray-600 mb-1 text-sm">by {book.author}</p>
          <p className="text-gray-500 mb-3 text-xs">
            Published by {book.publisher} in {book.yearOfPublishing}
          </p>

       

           <div className="mb-4">
            <span className="text-xs bg-[#EAF6EB] text-[#23BE0A] font-medium px-3 py-1 rounded-full">
              {book.category}
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-gray-700">{book.rating.toFixed(1)}</span>
            {renderStars(book.rating)}
          </div>

         
         

      
      
        </div>

  
        
      </div>
    </div>
  );
};

export default BookCard;
