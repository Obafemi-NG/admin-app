import { Fragment } from "react";
import { Sidebar } from "../../components";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.container}>container</div>
    </div>
  );
};

export default Home;
