import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../services/Helper";

const SearchResults = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("q"); // Get the search query from URL

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!query) return;
            
            try {
                const response = await axios.get(`${SERVER_URL}company/searchResults?query=${query}`);
                setResults(response.data.data);
            } catch (err) {
                setError("Error fetching search results");
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [query]); // Runs whenever query changes

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
            
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            
            {results.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                    {results.map((product) => (
                        <div key={product._id} className="p-4 border rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold">{product.name}</h3>
                            <p className="text-gray-700">{product.description}</p>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p>No products found.</p>
            )}
        </div>
    );
};

export default SearchResults;
