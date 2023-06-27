import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

import styles from "./Menu.module.css";

const MenuPage = () => {
  const navigate = useNavigate();
  const redirectPage = ({ key }) => {
    navigate(key);
    console.log("key", key);
  };

  return (
    <Menu
      className={styles.menu}
      onClick={(key) => redirectPage(key)}
      items={[
        { label: "Home", key: "/" },
        { label: "Atendimento", key: "/Atendimento" },
        { label: "Ação Sanitária", key: "/Acao"},
        
      ]}
    ></Menu>
  );
};
export default MenuPage;
