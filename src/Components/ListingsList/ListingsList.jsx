import { useState } from "react";
import { Pagination } from "antd";
import PropertyCard from "../PropertyCard/PropertyCard";
import listingsData from "../../data/listingsData";
import styles from "./ListingsList.module.scss";

const PAGE_SIZE = 12;

const ListingsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentListings = listingsData.slice(startIndex, startIndex + PAGE_SIZE);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>E'lonlar</h2>

      <div className={styles.grid}>
        {currentListings.map((listing) => (
          <PropertyCard key={listing.id} listing={listing} />
        ))}
      </div>

      <div className={styles.pagination}>
        <Pagination
          current={currentPage}
          total={listingsData.length}
          pageSize={PAGE_SIZE}
          onChange={setCurrentPage}
          showSizeChanger
          pageSizeOptions={["10", "12", "20"]}
        />
      </div>
    </section>
  );
};

export default ListingsList;
