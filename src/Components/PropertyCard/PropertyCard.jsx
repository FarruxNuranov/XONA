import { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./PropertyCard.module.scss";

const PropertyCard = ({ listing }) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleLike = (e) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <div className={styles.card} onClick={() => navigate(`/listing/${listing.id}`)}>
      <div className={styles.imageWrap}>
        <img src={listing.image} alt={listing.title} />
        <div
          className={`${styles.heart} ${liked ? styles.liked : ""}`}
          onClick={handleLike}
        >
          {liked ? <HeartFilled /> : <HeartOutlined />}
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.priceRow}>
          <span className={styles.price}>{listing.price} y.e</span>
          <span className={styles.meta}>
            <span className={styles.metaIcon}>🛏</span> {listing.rooms} xona
          </span>
          <span className={styles.meta}>
            <span className={styles.metaIcon}>◇</span> {listing.area}m²
          </span>
        </div>
        <div className={styles.title}>{listing.title}</div>
        <div className={styles.location}>{listing.location}</div>
      </div>
    </div>
  );
};

export default PropertyCard;
