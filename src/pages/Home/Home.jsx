import bannerImg from "../../assets/11.webp";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import ListingsList from "../../Components/ListingsList/ListingsList";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.title}>
            XONA - jaraga turar joy izlash portali!
          </h1>
          <SearchFilter />
        </div>
        <div className={styles.banner}>
          <img src={bannerImg} alt="Xon Saroy" />
        </div>
      </div>
      <ListingsList />
    </div>
  );
};

export default Home;
