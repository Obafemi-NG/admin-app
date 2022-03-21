import styles from "./List.module.css";
import { Navbar, Sidebar } from "../../components";
import DataTable from "../../components/DataTable/DataTable";
const List = () => {
  return (
    <div className={styles.list}>
      <Sidebar />
      <div className={styles["list-container"]}>
        <Navbar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
