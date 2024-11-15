import React from "react";
import { useParams } from "react-router-dom";
import apartments from "../Data/ApartmentData";

export default function ApartmentDetail() {
  const { id } = useParams();
  const apartment = apartments.find((apt) => apt.id === parseInt(id));

  if (!apartment) {
    return <h1 style={styles.error}>Apartment not found</h1>;
  }

  const { image, title, price, bedrooms, bathrooms } = apartment;

  // Use actual image URLs for Bedroom, Kitchen, Balcony, Bathroom
  const roomImages = [
    "https://via.placeholder.com/400x300?text=Bedroom",  // Bedroom Image URL
    "https://via.placeholder.com/400x300?text=Kitchen",  // Kitchen Image URL
    "https://via.placeholder.com/400x300?text=Balcony",  // Balcony Image URL
    "https://via.placeholder.com/400x300?text=Bathroom", // Bathroom Image URL
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <img src={image} alt={title} style={styles.mainImage} />
      <div style={styles.detailsContainer}>
        <h2 style={styles.detailText}>Price: ₹{price.toLocaleString()}</h2>
        <p style={styles.detailText}>Bedrooms: {bedrooms}</p>
        <p style={styles.detailText}>Bathrooms: {bathrooms}</p>
      </div>
      <div style={styles.roomImagesContainer}>
        <h2 style={styles.subTitle}>Inside Views</h2>
        <div style={styles.imagesRow}>
          {roomImages.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`Room ${index + 1}`}
              style={styles.roomImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    margin: "0 auto",
    maxWidth: "900px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  mainImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  detailsContainer: {
    marginTop: "20px",
    textAlign: "left",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  detailText: {
    fontSize: "1.2rem",
    margin: "10px 0",
    color: "#555",
  },
  roomImagesContainer: {
    marginTop: "30px",
    textAlign: "center", // Center the text
  },
  subTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#444",
  },
  imagesRow: {
    display: "flex",            // Arrange images in a row
    justifyContent: "center",   // Center the images horizontally
    gap: "10px",                // Space between images
    flexWrap: "wrap",           // Allow images to wrap on smaller screens
  },
  roomImage: {
    width: "22%",               // Reduced width for spacing
    height: "auto",
    margin: "10px",             // Space between images
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  error: {
    textAlign: "center",
    color: "red",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "50px",
  },
};
