import {
  SendOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  FacebookOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>XONA</div>
        </div>

        <div className={styles.columns}>
          {/* Foydali linklar */}
          <div className={styles.column}>
            <div className={styles.columnTitle}>Foydali linklar</div>
            <div className={styles.columnList}>
              <span className={styles.columnLink}>Bosh sahifa</span>
              <span className={styles.columnLink}>E'lon joylash</span>
              <span className={styles.columnLink}>Kontakt</span>
              <span className={styles.columnLink}>FAQ</span>
              <span className={styles.columnLink}>Shaxsiy kabinet</span>
              <span className={styles.columnLink}>Foydalanish shartlari</span>
            </div>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div className={styles.column}>
            <div className={styles.columnTitle}>Ijtimoiy tarmoqlar</div>
            <div className={styles.columnList}>
              <span className={styles.columnLink}>
                <SendOutlined className={styles.linkIcon} /> Telegram
              </span>
              <span className={styles.columnLink}>
                <YoutubeOutlined className={styles.linkIcon} /> You Tube
              </span>
              <span className={styles.columnLink}>
                <InstagramOutlined className={styles.linkIcon} /> Instagram
              </span>
              <span className={styles.columnLink}>
                <FacebookOutlined className={styles.linkIcon} /> Facebook
              </span>
            </div>
          </div>

          {/* Kontakt ma'lumotlar */}
          <div className={styles.column}>
            <div className={styles.columnTitle}>Kontakt ma'lumotlar</div>
            <div className={styles.columnList}>
              <span className={styles.columnLink}>
                <PhoneOutlined className={styles.linkIcon} /> +998 99 842 79 79
              </span>
              <span className={styles.columnLink}>
                <MailOutlined className={styles.linkIcon} /> info@xona.uz
              </span>
              <span className={styles.columnLink}>
                <SendOutlined className={styles.linkIcon} /> @xona_bot
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        &copy;XONA 2025. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
