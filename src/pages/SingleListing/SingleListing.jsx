import { useParams, useNavigate, Link } from "react-router-dom";
import { Button, Tag, Input, Select, DatePicker } from "antd";
import {
  HeartOutlined,
  ShareAltOutlined,
  PhoneOutlined,
  SendOutlined,
  HomeOutlined,
  CheckCircleOutlined,
  EnvironmentOutlined,
  StarFilled,
  CoffeeOutlined,
  DesktopOutlined,
  WifiOutlined,
  DatabaseOutlined,
  SoundOutlined,
  CarOutlined,
  FireOutlined,
  TabletOutlined,
  SkinOutlined,
} from "@ant-design/icons";
import listingsData from "../../data/listingsData";
import styles from "./SingleListing.module.scss";

const reviews = [
  {
    name: "Azizbek",
    rating: 4,
    text: "Uy yaxshi, lekin ayrim maishiy texnikalar eskirgan ekan. Bekzod aka muammoni hal qilishga harakat qildi, umuman olganda yaxshi yashadim.",
  },
  {
    name: "Shahzod",
    rating: 5,
    text: "Uy egasi juda xushmuomala va yordamga tayyor. Uy juda toza va barcha sharoitlar mavjud edi. O'zini juda qulay his qildim!",
  },
  {
    name: "Dilnoza",
    rating: 4,
    text: "Ko'proq qulayliklar bo'lishi mumkin edi, lekin uy egasining xushmuomaligi va e'tiborliligi barchasini qopladi. Umuman olganda, yaxshi tajriba!",
  },
  {
    name: "Madina",
    rating: 5,
    text: "Juda qulay va toza uy! Bekzod aka do'stona va hurmatli inson. Keyingi safar ham shu yerni tanlayman!",
  },
  {
    name: "Ulug'bek",
    rating: 4,
    text: "Uy yaxshi, faqat kelganimda biroz sovuq edi. Bekzod aka darhol yordam berdi, muammo tez hal bo'ldi. Tavsiya qilaman!",
  },
  {
    name: "Abror",
    rating: 5,
    text: "Xumoyun aka juda yaxshi inson! Har qanday savolga tez javob beradi, uyda esa barcha qulayliklar bor. Juda mamnun qoldim!",
  },
];

const amenities = [
  { icon: <CoffeeOutlined />, label: "Oshxona" },
  { icon: <FireOutlined />, label: "Konditsioner" },
  { icon: <DesktopOutlined />, label: "Ish stoli" },
  { icon: <TabletOutlined />, label: "Televizor" },
  { icon: <WifiOutlined />, label: "Wifi" },
  { icon: <SkinOutlined />, label: "Kir yuvish mashinasi" },
  { icon: <DatabaseOutlined />, label: "Holodilnik" },
  { icon: <FireOutlined />, label: "Gaz plitasi" },
  { icon: <SoundOutlined />, label: "Mikrotolqinli pech" },
  { icon: <CarOutlined />, label: "Parkovka" },
];

const SingleListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const listing = listingsData.find((item) => item.id === Number(id));

  if (!listing) {
    return (
      <div className={styles.page}>
        <h2>E'lon topilmadi</h2>
        <Button onClick={() => navigate("/")}>Bosh sahifaga</Button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className={styles.breadcrumbLeft}>
          <Link to="/" className={styles.breadcrumbLink}>Bosh sahifa</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span>E'lon tafsilotlari</span>
        </div>
        <span className={styles.date}>31 Iyul, 11:27</span>
      </div>

      {/* Title row */}
      <div className={styles.titleRow}>
        <h1 className={styles.title}>{listing.title}</h1>
        <div className={styles.titleActions}>
          <ShareAltOutlined className={styles.actionIcon} />
          <HeartOutlined className={styles.actionIcon} />
        </div>
      </div>

      {/* Image gallery */}
      <div className={styles.gallery}>
        <div className={styles.galleryMain}>
          <img src={listing.image} alt={listing.title} />
        </div>
        <div className={styles.galleryGrid}>
          <img src={`${listing.image}&q=80`} alt="" />
          <img src={`${listing.image}&q=70`} alt="" />
          <img src={`${listing.image}&q=60`} alt="" />
          <div className={styles.galleryMore}>
            <img src={`${listing.image}&q=50`} alt="" />
            <div className={styles.galleryOverlay}>
              <HomeOutlined /> Barchasini ko'rish
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Left */}
        <div className={styles.main}>
          {/* Tags */}
          <div className={styles.tags}>
            <Tag>{listing.rooms} xona</Tag>
            <Tag>{listing.area}m²</Tag>
            <Tag>4/9 qavat</Tag>
            <Tag>5 kishi uchun</Tag>
            <Tag>Oila / Bollar / Qizlar</Tag>
          </div>

          {/* Price */}
          <div className={styles.price}>{listing.price} y.e.</div>

          {/* Description */}
          <p className={styles.description}>
            "Chilonzor-3" savdo markazi 1/2/4 M. Ulug'bek va Xamza metro
            liniyalarida. Makro, Korzinka supermarketlari yaqin masofada.
            168-maktab, bolalar bog'chalari, musiqa maktablari va kiyim
            do'konlariga yaqin joylashgan. Uzoq vaqt ijarada turmoqchi
            bo'lganlar uchun. Talabalar yoki oilalilar uchun beriladi.
            Rieltrlar bezovta qilmasin!!!
          </p>

          {/* Amenities */}
          <h3 className={styles.sectionTitle}>Uy sharoitlari</h3>
          <div className={styles.amenities}>
            {amenities.map((item) => (
              <div key={item.label} className={styles.amenityItem}>
                <span className={styles.amenityIcon}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <Button className={styles.showAllBtn}>
            Barcha sharoitlarni ko'rish →
          </Button>

          {/* Map */}
          <h3 className={styles.sectionTitle}>Manzil</h3>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0!2d69.2401!3d41.3111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQwLjAiTiA2OcKwMTQnMjQuNCJF!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Manzil"
            />
          </div>

          {/* Reviews */}
          <div className={styles.reviewsHeader}>
            <h3 className={styles.sectionTitle}>Sharhlar</h3>
            <Button className={styles.showAllBtn}>Sharh qoldiring →</Button>
          </div>
          <div className={styles.reviewsGrid}>
            {reviews.map((review) => (
              <div key={review.name} className={styles.reviewCard}>
                <div className={styles.reviewTop}>
                  <div className={styles.reviewAvatar}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.reviewName}>{review.name}</div>
                    <div className={styles.reviewStars}>
                      {review.rating}.0{" "}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarFilled
                          key={i}
                          className={
                            i < review.rating
                              ? styles.starActive
                              : styles.starInactive
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={styles.reviewText}>{review.text}</p>
              </div>
            ))}
          </div>
          <Button className={styles.showAllBtn}>
            Ko'proq sharhlarni ko'rish →
          </Button>
        </div>

        {/* Right sidebar */}
        <div className={styles.sidebar}>
          {/* Metro card */}
          <div className={styles.card}>
            <div className={styles.cardLabel}>Eng yaqin metro</div>
            <div className={styles.metroRow}>
              <div className={styles.metroDot}>M</div>
              <div>
                <div className={styles.metroName}>Mirzo Ulug'bek</div>
                <div className={styles.metroInfo}>10 min &nbsp; 500 m</div>
              </div>
            </div>
          </div>

          {/* Owner card */}
          <div className={styles.card}>
            <div className={styles.ownerRow}>
              <div className={styles.ownerAvatar}>X</div>
              <div>
                <div className={styles.ownerName}>
                  Xumoyunmirzo <CheckCircleOutlined className={styles.verified} />
                </div>
                <div className={styles.ownerRating}>4.5 ⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <p className={styles.ownerDesc}>
              Mas'uliyatli uy egasiman. Uyning tartibi va qulay bo'lishini
              ta'minlayman, ijarachilar uchun yaxshi sharoit yaratishga harakat
              qilaman.
            </p>
            <Button type="primary" className={styles.phoneBtn} block>
              <PhoneOutlined /> Telefon qilish
            </Button>
            <Button className={styles.messageBtn} block>
              <SendOutlined /> Habar yozish
            </Button>
          </div>

          {/* Booking form */}
          <div className={styles.card}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Kirish sanasi <span className={styles.required}>*</span>
              </label>
              <DatePicker
                placeholder="DD-MM-YYYY"
                className={styles.formInput}
                format="DD-MM-YYYY"
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>
                Qancha vaqt turmoqchisiz <span className={styles.required}>*</span>
              </label>
              <Select
                placeholder="Tanlanmagan"
                className={styles.formInput}
                options={[
                  { value: "1", label: "1 oy" },
                  { value: "3", label: "3 oy" },
                  { value: "6", label: "6 oy" },
                  { value: "12", label: "1 yil" },
                ]}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel}>Necha kishi uchun</label>
              <Input placeholder="Necha kishi uchun" />
            </div>
            <Button type="primary" className={styles.submitBtn} block>
              <HomeOutlined /> Uy uchun so'rov yuborish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;
