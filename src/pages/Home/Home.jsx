import { Fragment } from "react";
import { Sidebar, Navbar } from "../../components";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.container}>
        {" "}
        <Navbar />
        Body container
      </div>
    </div>
  );
};

export default Home;
