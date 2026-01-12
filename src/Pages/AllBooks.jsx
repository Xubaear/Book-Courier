import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setLoading(true);
    fetch("https://bookcourier.vercel.app/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Get unique categories from books
  const categories = ["all", ...new Set(books.map(book => book.category || "uncategorized").filter(Boolean))];

  // Filter books
  let displayedBooks = books.filter((book) => {
    const matchesSearch = book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || (book.category || "uncategorized") === categoryFilter;
    const matchesPrice = priceFilter === "all" || 
                        (priceFilter === "low" && parseFloat(book.price) <= 100) ||
                        (priceFilter === "medium" && parseFloat(book.price) > 100 && parseFloat(book.price) <= 300) ||
                        (priceFilter === "high" && parseFloat(book.price) > 300);
    const matchesAvailability = availabilityFilter === "all" ||
                               (availabilityFilter === "available" && book.available) ||
                               (availabilityFilter === "unavailable" && !book.available);
    
    return matchesSearch && matchesCategory && matchesPrice && matchesAvailability;
  });

  // Sort books
  if (sortOrder === "asc") {
    displayedBooks.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (sortOrder === "desc") {
    displayedBooks.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (sortOrder === "title-asc") {
    displayedBooks.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
  } else if (sortOrder === "title-desc") {
    displayedBooks.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
  }

  // Pagination
  const totalPages = Math.ceil(displayedBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBooks = displayedBooks.slice(startIndex, endIndex);

  // Skeleton Loader Component
  const SkeletonCard = () => (
    <div className="card bg-base-100 shadow-lg border border-base-300 rounded-xl overflow-hidden h-full animate-pulse">
      <div className="h-64 w-full bg-base-300"></div>
      <div className="card-body p-4 space-y-3">
        <div className="h-4 bg-base-300 rounded w-3/4"></div>
        <div className="h-3 bg-base-300 rounded w-1/2"></div>
        <div className="h-8 bg-base-300 rounded w-full"></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen container mx-auto p-4 md:p-6 pt-32">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Books Collection</h1>

      {/* Search and Filters */}
      <div className="bg-base-200 rounded-xl p-6 mb-8 shadow-lg">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="form-control">
            <input
              type="text"
              placeholder="Search by book name or author..."
              className="input input-bordered w-full"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Price Range</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={priceFilter}
                onChange={(e) => {
                  setPriceFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="all">All Prices</option>
                <option value="low">Low (≤ 100 Tk)</option>
                <option value="medium">Medium (101-300 Tk)</option>
                <option value="high">High (> 300 Tk)</option>
              </select>
            </div>

            {/* Availability Filter */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Availability</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={availabilityFilter}
                onChange={(e) => {
                  setAvailabilityFilter(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="all">All</option>
                <option value="available">Available Only</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Sort By</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={sortOrder}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="default">Default</option>
                <option value="title-asc">Title: A-Z</option>
                <option value="title-desc">Title: Z-A</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 text-base-content/70">
        Showing {displayedBooks.length} book{displayedBooks.length !== 1 ? 's' : ''}
        {displayedBooks.length !== books.length && ` (filtered from ${books.length} total)`}
      </div>

      {/* Books Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      ) : paginatedBooks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-base-content/60 mb-4">No books found matching your criteria.</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setSearchTerm("");
              setCategoryFilter("all");
              setPriceFilter("all");
              setAvailabilityFilter("all");
              setSortOrder("default");
            }}
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {paginatedBooks.map((book) => (
              <div
                key={book._id}
                onClick={() => navigate(`/book/${book._id}`)}
                className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer border border-base-300 rounded-xl overflow-hidden h-full flex flex-col"
              >
                <figure className="relative h-64 w-full">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className={`h-full w-full object-cover ${!book.available ? 'grayscale opacity-60' : ''}`}
                  />
                  {!book.available && (
                    <div className="absolute top-2 right-2 badge badge-error text-white text-xs">
                      Out of Stock
                    </div>
                  )}
                </figure>

                <div className="card-body flex-grow flex flex-col p-4">
                  <h2 className="card-title text-base font-semibold line-clamp-2 mb-1">{book.title}</h2>
                  <p className="text-sm text-base-content/60 mb-2 line-clamp-1">By {book.author}</p>
                  
                  {book.category && (
                    <span className="badge badge-outline badge-sm mb-2 w-fit">{book.category}</span>
                  )}
                  
                  <div className="mt-auto space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-base font-bold text-primary">{book.price} Tk</p>
                      <span className={`badge text-xs ${book.available ? 'badge-success' : 'badge-error'}`}>
                        {book.available ? 'In Stock' : 'Unavailable'}
                      </span>
                    </div>
                    <Link to={`/book/${book._id}`} className="btn btn-primary btn-sm w-full mt-2">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mb-8">
              <button
                className="btn btn-sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                « Previous
              </button>
              
              <div className="join">
                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        className={`join-item btn btn-sm ${currentPage === page ? 'btn-active' : ''}`}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </button>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="join-item btn btn-sm btn-disabled">...</span>;
                  }
                  return null;
                })}
              </div>

              <button
                className="btn btn-sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next »
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllBooks;