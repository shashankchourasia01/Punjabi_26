import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Star, X } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/company/business/${categoryName}`
        );
        console.log(response);
        setBusinesses(response.data);
      } catch (error) {
        console.error("Error fetching businesses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, [categoryName]);

  const toggleCard = (businessId) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [businessId]: !prevState[businessId],
    }));
  };

  return (
    <div className="w-[90%] mx-auto relative">
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
      >
        <X className="w-5 h-5" />
      </button>
      <h2 className="text-center text-[2rem] mt-8 bg-blue-800 text-white p-4 rounded-lg">
        Businesses in {categoryName}
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {businesses.length > 0 ? (
          businesses.map((business) => (
            <Card
              key={business._id}
              className="w-[95%] md:w-[80%] lg:w-[60%] mx-auto relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => toggleCard(business._id)}
            >
              <img
                src={business.imageUrl}
                alt={business.businessName}
                className="w-full h-[150px] object-cover"
              />
              <CardContent className="p-3">
                <span className="absolute top-2 left-2 bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {business.category}
                </span>
                <h3 className="font-bold text-lg mt-2">{business.businessName}</h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-3 w-3 text-yellow-500" />
                  ))}
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">Premium</span>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">Verified</span>
                </div>
                {expandedCards[business._id] && (
                  <div className="mt-4">
                    <p><strong>About:</strong> {business.aboutCompany}</p>
                    <p><strong>Address:</strong> {business.address.street}, {business.address.city}</p>
                    <p><strong>Services:</strong> {business.serviceProducts.join(", ")}</p>
                    <a href={business.website} target="_blank" rel="noopener noreferrer">
                      <Button className="mt-2 px-3 py-1 text-sm">Visit Website</Button>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center">No businesses found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
