import { useState } from "react";
import { Select, Button, Drawer, Dropdown } from "antd";
import {
  EnvironmentOutlined,
  GlobalOutlined,
  MenuOutlined,
  CloseOutlined,
  HomeOutlined,
  EditOutlined,
  HeartOutlined,
  AppstoreOutlined,
  ShoppingOutlined,
  UserOutlined,
  LogoutOutlined,
  DollarOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";

const menuItems = [
  { key: "/", icon: <HomeOutlined />, label: "Bosh sahifa" },
  { key: "/elon", icon: <EditOutlined />, label: "E'lon joylash" },
  { key: "/sevimlilar", icon: <HeartOutlined />, label: "Sevimlilar" },
  { key: "/dashboard", icon: <AppstoreOutlined />, label: "Dashboard" },
  { key: "/narxlar", icon: <ShoppingOutlined />, label: "Narxlar" },
  { key: "/kabinet", icon: <UserOutlined />, label: "Shaxsiy kabinet" },
];

const langOptions = [
  { key: "uz", label: "🇺🇿  Uzbek" },
  { key: "ru", label: "🇷🇺  Русский" },
  { key: "en", label: "🇬🇧  English" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // fake auth
  const [currentLang, setCurrentLang] = useState("Uz");
  const navigate = useNavigate();
  const location = useLocation();

  const onMenuClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const langMenuItems = langOptions.map((lang) => ({
    key: lang.key,
    label: lang.label,
    onClick: () => {
      const short = lang.key === "uz" ? "Uz" : lang.key === "ru" ? "Ru" : "En";
      setCurrentLang(short);
    },
  }));

  const userDropdownItems = [
    {
      key: "dashboard",
      icon: <AppstoreOutlined />,
      label: "Dashboard",
      onClick: () => navigate("/dashboard"),
    },
    {
      key: "sevimlilar",
      icon: <HeartOutlined />,
      label: "Sevimlilar",
      onClick: () => navigate("/sevimlilar"),
    },
    {
      key: "profile",
      icon: <EditOutlined />,
      label: "Profilni tahrirlash",
      onClick: () => navigate("/kabinet"),
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Chiqish",
      onClick: handleLogout,
    },
  ];

  return (
    <>
      <nav className={styles.navbar}>
        {/* Left */}
        <div className={styles.left}>
          <div className={styles.logo} onClick={() => navigate("/")}>
            XONA
          </div>

          <div className={styles.desktopOnly}>
            <Select
              defaultValue="toshkent"
              variant="outlined"
              style={{ minWidth: 130 }}
              prefix={<EnvironmentOutlined />}
              options={[
                { value: "toshkent", label: "Toshkent" },
                { value: "samarqand", label: "Samarqand" },
                { value: "buxoro", label: "Buxoro" },
                { value: "andijon", label: "Andijon" },
              ]}
            />

            <Select
              defaultValue="uzs"
              variant="outlined"
              style={{ minWidth: 80 }}
              options={[
                { value: "uzs", label: "UZS" },
                { value: "usd", label: "USD" },
              ]}
            />
          </div>
        </div>

        {/* Right desktop */}
        <div className={styles.right}>
          <span className={styles.navLink}>E'lon joylash</span>
          <span className={styles.navLink}>Narxlar</span>

          <Dropdown menu={{ items: langMenuItems }} trigger={["click"]}>
            <div className={styles.lang}>
              <GlobalOutlined />
              <span>{currentLang}</span>
            </div>
          </Dropdown>

          {isLoggedIn ? (
            <Dropdown menu={{ items: userDropdownItems }} trigger={["click"]}>
              <div className={styles.userInfo}>
                <div className={styles.avatar}>
                  <UserOutlined />
                </div>
                <span className={styles.userName}>Xumoyunmirzo</span>
                <DownOutlined className={styles.userArrow} />
              </div>
            </Dropdown>
          ) : (
            <Button
              type="primary"
              className={styles.loginBtn}
              onClick={handleLogin}
            >
              Kirish
            </Button>
          )}
        </div>

        {/* Right mobile */}
        <div className={styles.mobileRight}>
          {isLoggedIn ? (
            <div
              className={styles.avatarSmall}
              onClick={() => setDrawerOpen(true)}
            >
              <UserOutlined />
            </div>
          ) : (
            <Button
              type="primary"
              className={styles.loginBtn}
              onClick={handleLogin}
            >
              Kirish
            </Button>
          )}
          <MenuOutlined
            className={styles.burger}
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="left"
        width={300}
        closeIcon={null}
        styles={{ body: { padding: 0 } }}
      >
        <div className={styles.drawerContent}>
          {/* Drawer header */}
          <div className={styles.drawerHeader}>
            <div className={styles.logo} onClick={() => onMenuClick("/")}>
              XONA
            </div>
            <CloseOutlined
              className={styles.closeIcon}
              onClick={() => setDrawerOpen(false)}
            />
          </div>

          {/* Menu items */}
          <div className={styles.drawerMenu}>
            {menuItems.map((item) => (
              <div
                key={item.key}
                className={`${styles.drawerItem} ${
                  location.pathname === item.key ? styles.active : ""
                }`}
                onClick={() => onMenuClick(item.key)}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Selects */}
          <div className={styles.drawerSelects}>
            <div className={styles.drawerSelectRow}>
              <GlobalOutlined />
              <Select
                defaultValue="uzbek"
                variant="borderless"
                className={styles.drawerSelect}
                options={[
                  { value: "uzbek", label: "O'zbek" },
                  { value: "russian", label: "Русский" },
                  { value: "english", label: "English" },
                ]}
              />
            </div>

            <div className={styles.drawerSelectRow}>
              <EnvironmentOutlined />
              <Select
                defaultValue="toshkent"
                variant="borderless"
                className={styles.drawerSelect}
                options={[
                  { value: "toshkent", label: "Tashkent" },
                  { value: "samarqand", label: "Samarqand" },
                  { value: "buxoro", label: "Buxoro" },
                ]}
              />
            </div>

            <div className={styles.drawerSelectRow}>
              <DollarOutlined />
              <Select
                defaultValue="uzs"
                variant="borderless"
                className={styles.drawerSelect}
                options={[
                  { value: "uzs", label: "UZS" },
                  { value: "usd", label: "USD" },
                ]}
              />
            </div>

            {!isLoggedIn && (
              <Button
                type="primary"
                className={styles.drawerLoginBtn}
                onClick={() => {
                  handleLogin();
                  setDrawerOpen(false);
                }}
              >
                Kirish
              </Button>
            )}
          </div>

          {/* Footer */}
          <div
            className={styles.drawerFooter}
            onClick={() => {
              handleLogout();
              setDrawerOpen(false);
            }}
          >
            <LogoutOutlined />
            <span>Chiqish</span>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
