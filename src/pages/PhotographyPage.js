import React, { useState } from "react";
import styles from "./PhotographyPage.module.css";
import NavbarLayout from "../components/layout/NavbarLayout";

const photos = Array.from({ length: 38 }, (_, i) => `photography/${i + 1}.jpg`);

const PhotographyPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 10;
  const totalPages = Math.ceil(photos.length / photosPerPage);

  // Calculate indexes for current photos
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <NavbarLayout>
      <div className={styles.galleryContainer}>
        <div className={styles.photosList}>
          {currentPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Photo ${indexOfFirstPhoto + index + 1}`}
              className={styles.photo}
            />
          ))}
        </div>
        <div className={styles.pagination}>
          {[...Array(totalPages).keys()].map((number) => (
            <button
              key={number}
              onClick={() => {
                paginate(number + 1);
                window.scrollTo(0, 0);
              }}
              className={`${styles.pageButton} ${
                currentPage === number + 1 ? styles.active : ""
              }`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </NavbarLayout>
  );
};

export default PhotographyPage;
