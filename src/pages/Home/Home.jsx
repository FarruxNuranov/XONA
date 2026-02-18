import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import homeMainPage from "../../assets/homeMainPage.jpg";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import ListingsList from "../../Components/ListingsList/ListingsList";
import PropertyCard from "../../Components/PropertyCard/PropertyCard";
import listingsData from "../../data/listingsData";
import styles from "./Home.module.scss";

const featuredListings = listingsData.slice(0, 6);

const Home = () => {
  return (
    <div>
      <div className={styles.hero}>
        <img src={homeMainPage} alt="XONA" />
        <div className={styles.overlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            XONA - jaraga turar joy izlash portali!
          </h1>
          <SearchFilter />
        </div>
      </div>

      {/* Mobile swiper - only visible on mobile */}
      <div className={styles.mobileSwiper}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1.3}
          spaceBetween={12}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {featuredListings.map((listing) => (
            <SwiperSlide key={listing.id}>
              <PropertyCard listing={listing} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ListingsList />
    </div>
  );
};

export default Home;
