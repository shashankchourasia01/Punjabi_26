import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="w-[80%] mx-auto ">
    <h2 className="text-center text-[2rem] mt-8 bg-green-800 text-white">Businesses in {categoryName}</h2>
    <div className="business-list mt-4 py-2">
        {businesses.length > 0 ? (
            businesses.map((business) => (
                <div key={business._id} className="business-card flex flex-col justify-center items-start mt-8">
                    <h3 className="font-bold text-[2rem]">{business.businessName}</h3>
                    <p className="py-2"><strong>About:</strong> {business.aboutCompany}</p>
                    <p className="py-2"><strong>Address:</strong> {business.address.street}, {business.address.city}</p>
                    <p className="py-2"><strong>Services:</strong> {business.serviceProducts.join(", ")}</p>
                    <a href={business.website} target="_blank" rel="noopener noreferrer" className="py-2 text-yellow-800">Visit Website</a>
                </div>
            ))
        ) : (
            <p>No businesses found.</p>
        )}
    </div>
</div>
  );
};

export default CategoryPage;
