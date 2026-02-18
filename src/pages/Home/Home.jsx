import homeMainPage from "../../assets/homeMainPage.jpg";
import SearchFilter from "../../Components/SearchFilter/SearchFilter";
import ListingsList from "../../Components/ListingsList/ListingsList";
import styles from "./Home.module.scss";

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
      <ListingsList />
    </div>
  );
};

export default Home;
