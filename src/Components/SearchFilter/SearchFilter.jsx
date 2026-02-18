import { useState } from "react";
import { Select, Input, Button, Drawer } from "antd";
import { DownOutlined, SearchOutlined, FilterOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./SearchFilter.module.scss";

const FilterFields = () => (
  <>
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
  </>
);

const SearchFilter = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* Desktop filter */}
      <div className={styles.filterCard}>
        <div className={styles.filterRow}>
          <FilterFields />
          <Button type="primary" className={styles.searchBtn}>
            Qidirish
          </Button>
        </div>
        <div className={styles.moreFilters}>
          <span>Ko'proq filtrlar</span>
          <DownOutlined />
        </div>
      </div>

      {/* Mobile filter */}
      <div className={styles.mobileFilter}>
        <div className={styles.mobileFilterRow}>
          <Input
            placeholder="Qidirish..."
            prefix={<SearchOutlined style={{ color: "#999" }} />}
            className={styles.mobileSearchInput}
          />
          <Button
            className={styles.mobileFilterBtn}
            icon={<FilterOutlined />}
            onClick={() => setDrawerOpen(true)}
          >
            Filtr
          </Button>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <Drawer
        title={null}
        placement="bottom"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        height="auto"
        closable={false}
        styles={{ body: { padding: 0 } }}
      >
        <div className={styles.drawerContent}>
          <div className={styles.drawerHeader}>
            <span className={styles.drawerTitle}>Filtrlar</span>
            <CloseOutlined
              className={styles.drawerClose}
              onClick={() => setDrawerOpen(false)}
            />
          </div>
          <div className={styles.drawerFields}>
            <FilterFields />
          </div>
          <div className={styles.drawerActions}>
            <Button
              type="primary"
              className={styles.drawerSearchBtn}
              block
              onClick={() => setDrawerOpen(false)}
            >
              <SearchOutlined /> Qidirish
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SearchFilter;
