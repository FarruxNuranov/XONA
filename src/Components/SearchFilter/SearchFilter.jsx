import { Select, Input, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./SearchFilter.module.scss";

const SearchFilter = () => {
  return (
    <div className={styles.filterCard}>
      <div className={styles.filterRow}>
        <div className={styles.filterItem}>
          <span className={styles.label}>E'lon turi</span>
          <Select
            placeholder="Barchasi"
            variant="outlined"
            className={styles.select}
            options={[
              { value: "all", label: "Barchasi" },
              { value: "sell", label: "Sotish" },
              { value: "rent", label: "Ijaraga berish" },
            ]}
          />
        </div>

        <div className={styles.filterItem}>
          <span className={styles.label}>Jihozlangan</span>
          <Select
            placeholder="Barchasi"
            variant="outlined"
            className={styles.select}
            options={[
              { value: "all", label: "Barchasi" },
              { value: "yes", label: "Ha" },
              { value: "no", label: "Yo'q" },
            ]}
          />
        </div>

        <div className={styles.filterItem}>
          <span className={styles.label}>Xonalar soni</span>
          <div className={styles.rangeGroup}>
            <Input placeholder="dan" className={styles.rangeInput} />
            <Input placeholder="gacha" className={styles.rangeInput} />
          </div>
        </div>

        <div className={styles.filterItem}>
          <span className={styles.label}>Narxi (so'm)</span>
          <div className={styles.rangeGroup}>
            <Input placeholder="dan" className={styles.rangeInput} />
            <Input placeholder="gacha" className={styles.rangeInput} />
          </div>
        </div>

        <div className={styles.filterItem}>
          <span className={styles.label}>Kimlar uchun</span>
          <Select
            placeholder="Barchaga"
            variant="outlined"
            className={styles.select}
            options={[
              { value: "all", label: "Barchaga" },
              { value: "family", label: "Oilalar" },
              { value: "students", label: "Talabalar" },
            ]}
          />
        </div>

        <Button type="primary" className={styles.searchBtn}>
          Qidirish
        </Button>
      </div>

      <div className={styles.moreFilters}>
        <span>Ko'proq filtrlar</span>
        <DownOutlined />
      </div>
    </div>
  );
};

export default SearchFilter;
