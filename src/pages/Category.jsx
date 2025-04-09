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
  const [expandedCards, setExpandedCards] = useState(false);
  const [detail, setDetail] = useState(false);
  const [businessPopup, setBusinessPopup] = useState({
    aboutCompany: "",
    address: {},
    serviceProducts: [],
    imageUrl: "",
    website: "",
  });

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
    <div className="w-[90%] mx-auto relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
      >
        <X className="w-5 h-5" />
      </button>
      <h2 className="text-center text-[2rem] mt-8 bg-[#002248] text-white p-4 rounded-lg">
        Businesses in {categoryName}
      </h2>
      <div
        className={`grid md:grid-cols-3 gap-6 mt-6 ${detail ? "blur-sm" : ""}`}
      >
        {businesses.length > 0 ? (
          businesses.map((business) => (
            <Card
              key={business._id}
              className="w-[95%] md:w-[80%] lg:w-[60%] mx-auto relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => {
                setDetail(true);
                setBusinessPopup({
                  aboutCompany: business.aboutCompany,
                  address: business.address,
                  serviceProducts: business.serviceProducts,
                  imageUrl: business.imageUrl,
                  website: business.website,
                });
              }}
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
                <h3 className="font-bold text-lg mt-2">
                  {business.businessName}
                </h3>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-3 w-3 text-yellow-500" />
                  ))}
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm">
                    Premium
                  </span>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
                    Verified
                  </span>
                </div>
                {expandedCards[business._id] && (
                  <div className="mt-4">
                    <p>
                      <strong>About:</strong> {business.aboutCompany}
                    </p>
                    <p>
                      <strong>Address:</strong> {business.address.street},{" "}
                      {business.address.city}
                    </p>
                    <p>
                      <strong>Services:</strong>{" "}
                      {business.serviceProducts.join(", ")}
                    </p>
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="mt-2 px-3 py-1 text-sm">
                        Visit Website
                      </Button>
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

      {/* Popup Section */}
      <div
        className={`${
          detail
            ? "block w-[70%] mx-auto bg-white z-[10] absolute top-30 left-0 right-0 rounded-xl shadow-2xl transition duration-300 delay-150 ease-in"
            : "opacity-0"
        }`}
      >
        <div className="flex w-full rounded-xl overflow-hidden relative">
          {/* Left Side with Green Background and Image */}
          <div className="w-1/2 bg-[#004225] relative flex flex-col items-center justify-center p-4">
            {/* Semi-circle effect */}
            <div className="absolute left-0 top-0 h-full w-full rounded-r-full bg-[#004225] -z-10" />
            <img
              src={businessPopup.imageUrl}
              alt="business"
              className="w-[90%] h-[250px] object-cover rounded-lg z-10"
            />
            <div className="flex gap-4 mt-4 z-10">
              <span className="flex items-center gap-1 bg-yellow-600 text-white px-4 py-1 rounded-full font-semibold text-sm">
                👑 Premium
              </span>
              <span className="flex items-center gap-1 bg-green-600 text-white px-4 py-1 rounded-full font-semibold text-sm">
                ✅ Verified
              </span>
            </div>
          </div>

          {/* Right Side Info */}
          <div className="w-1/2 p-6 flex flex-col justify-between">
            <div>
              <p className="mb-2">
                <strong>Business Name:</strong> {businessPopup.aboutCompany}
              </p>
              <p className="mb-2">
                <strong>Address:</strong> {businessPopup.address.street},{" "}
                {businessPopup.address.city}
              </p>
              <p className="mb-2">
                <strong>Services:</strong>{" "}
                {businessPopup.serviceProducts.map((e, i) => (
                  <span key={i} className="mx-1">
                    |{e}|
                  </span>
                ))}
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> {/* Add phone if available */}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {/* Add email if available */}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-6">
              <a
                href={businessPopup.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#4a7c59] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#3d644a]">
                  Visit Website
                </button>
              </a>

              <button
                onClick={() => setDetail(false)}
                className="bg-[#4a7c59] text-white font-semibold px-5 py-2 rounded-md hover:bg-[#3d644a]"
              >
                Get Direction
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
