import MenuPage from "../../components/Menu";

import styles from './Home.module.css'

const Home = () => {
  return(
    <div className={styles.home}>
      <MenuPage/>
      <div className={styles.containerHome}>
      <h1>Sistema de Gestão de Fazendas</h1>
      </div>
    
    </div>
  );
};
export default Home;
