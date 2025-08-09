import React, { useState, useEffect } from 'react';


const booksDatabase = [
  { title: "The Great Gatsby", value: 192 },
  { title: "To Kill a Mockingbird", value: 281 },
  { title: "1984", value: 328 },
  { title: "The Alchemist", value: 177 },
  { title: "Pride and Prejudice", value: 279 },
  { title: "The Catcher in the Rye", value: 245 },
  { title: "To the Lighthouse", value: 198 },
  { title: "Brave New World", value: 267 },
  { title: "The Lord of the Rings", value: 312 },
  { title: "Jane Eyre", value: 223 },
  { title: "Wuthering Heights", value: 189 },
  { title: "The Adventures of Huckleberry Finn", value: 234 },
  { title: "Moby Dick", value: 156 },
  { title: "Great Expectations", value: 201 },
  { title: "The Odyssey", value: 298 },
  { title: "Hamlet", value: 287 },
  { title: "Romeo and Juliet", value: 265 },
  { title: "The Iliad", value: 276 },
  { title: "Don Quixote", value: 198 },
  { title: "War and Peace", value: 324 }
];


const bookColors = ["#2563eb", "#059669", "#d97706", "#ea580c", "#dc2626"];


const ViolinChart = ({ books }) => {
  if (!books || books.length === 0) return null;

  const chartHeight = 400;
  const chartWidth = Math.max(1000, books.length * 200);
  const violinWidth = 150;
  const spacing = chartWidth / (books.length + 1);
  const maxValue = Math.max(...books.map(book => book.value));
  
  const createViolinPath = (value, centerX, baseY) => {
    if (value <= 0) return `M ${centerX} ${baseY} L ${centerX} ${baseY}`;
    
    const height = (value / maxValue) * (chartHeight * 0.65);
    const width = violinWidth;
    
    const points = [];
    const steps = 50;
    
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const y = baseY - (height * t);
      const widthFactor = Math.sin(t * Math.PI) * 0.85 + 0.15;
      const x = width * widthFactor / 2;
      
      if (i === 0) {
        points.push(`M ${centerX} ${y}`);
      } else {
        points.push(`L ${centerX - x} ${y}`);
      }
    }
    
    for (let i = steps; i >= 0; i--) {
      const t = i / steps;
      const y = baseY - (height * t);
      const widthFactor = Math.sin(t * Math.PI) * 0.85 + 0.15;
      const x = width * widthFactor / 2;
      points.push(`L ${centerX + x} ${y}`);
    }
    
    points.push('Z');
    return points.join(' ');
  };

  return (
    <div className="w-full bg-gray-50 p-8 font-sans ">
      <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
        <svg 
          width={chartWidth} 
          height={chartHeight + 100}
          viewBox={`0 0 ${chartWidth} ${chartHeight + 100}`}
          className="min-w-full h-auto"
        >
        
          {[0, 85, 170, 255, 340].map((value) => (
            <g key={value}>
              <line
                x1={60}
                y1={chartHeight - (value / 340) * (chartHeight - 80)}
                x2={chartWidth - 60}
                y2={chartHeight - (value / 340) * (chartHeight - 80)}
                stroke="#e5e7eb"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <text
                x={40}
                y={chartHeight - (value / 340) * (chartHeight - 80) + 5}
                className="text-sm fill-gray-500"
                textAnchor="end"
                style={{ fontFamily: 'system-ui, sans-serif' }}
              >
                {value.toString().padStart(2, '0')}
              </text>
            </g>
          ))}

        
          {books.map((book, index) => {
            const centerX = spacing * (index + 1);
            const baseY = chartHeight - 20;
            const color = bookColors[index % bookColors.length];
            
            return (
              <g key={`${book.title}-${index}`}>
                
                <path
                  d={createViolinPath(book.value, centerX, baseY)}
                  fill={color}
                  opacity="0.9"
                />
                
            
                <text
                  x={centerX}
                  y={baseY - (book.value / maxValue) * (chartHeight * 0.65) - 15}
                  className="text-xl font-bold"
                  textAnchor="middle"
                  fill={color}
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  {book.value}
                </text>
                
            
                <text
                  x={centerX}
                  y={chartHeight + 40}
                  className="text-sm fill-gray-600"
                  textAnchor="middle"
                  style={{ fontFamily: 'system-ui, sans-serif' }}
                >
                  {book.title}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};


const BookPageChart = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const booksPerPage = 5;
  
 
  const getCurrentBooks = () => {
    const startIndex = currentPage * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    return booksDatabase.slice(startIndex, endIndex);
  };

  const currentBooks = getCurrentBooks();
  const totalPages = Math.ceil(booksDatabase.length / booksPerPage);
  const hasMore = currentPage < totalPages - 1;

  const loadMore = () => {
    if (hasMore && !loading) {
      setLoading(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setLoading(false);
      }, 800);
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
        hasMore &&
        !loading
      ) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-full mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Books Popularity Analysis
        </h1>
        
      
        <ViolinChart books={currentBooks} />

      
        <div className="text-center mt-8 mb-6">
          <p className="text-gray-600">
            Showing books {currentPage * booksPerPage + 1} - {Math.min((currentPage + 1) * booksPerPage, booksDatabase.length)} of {booksDatabase.length}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Page {currentPage + 1} of {totalPages}
          </p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
              <span className="ml-4 text-lg text-gray-600">Loading next set of books...</span>
            </div>
          </div>
        )}

       
        {hasMore && !loading && (
          <div className="text-center py-8">
            <button
              onClick={loadMore}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Load Next 5 Books
            </button>
          </div>
        )}

      
        {!hasMore && !loading && (
          <div className="text-center py-12">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-green-800 font-semibold">
                All books have been displayed!
              </p>
              <p className="text-green-600 mt-2">
                Total: {booksDatabase.length} books analyzed
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookPageChart;