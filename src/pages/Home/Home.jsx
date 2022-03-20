// imported Components created in this project folder.
import { Sidebar, Navbar, Widget, Featured, Chart } from "../../components";
import Table from "../../components/Table/Table";

// imported CSS style.
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.container}>
        {" "}
        <Navbar />
        <div className={styles.widgets}>
          <Widget type="user" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className={styles.charts}>
          <Featured />
          <Chart />
        </div>
        <div className={styles.table}>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
