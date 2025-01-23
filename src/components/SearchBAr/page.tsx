"use client"
import React, { useState, useEffect } from 'react';
import { getProductsBySearchTerm } from '@/sanity/lib/data'; // Make sure to implement this function

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchTerm.trim() === '') {
        setSearchResults([]);
        return;
      }

      try {
        const results = await getProductsBySearchTerm(searchTerm);
        setSearchResults(results);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    const debounceSearch = setTimeout(() => {
      fetchSearchResults();
    }, 500); // Debounce the search with 500ms delay

    return () => clearTimeout(debounceSearch); // Clear timeout if search term changes
  }, [searchTerm]);

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search products or categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded-md w-full"
      />
      <div className="mt-4">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((product) => (
              <li key={product._id}>
                <div className="flex items-center">
                  <img src={product.imageUrl} alt={product.title} className="w-16 h-16 object-cover rounded" />
                  <div className="ml-4">
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
