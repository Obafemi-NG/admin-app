import styles from "./Sidebar.module.css";
import { Dashboard } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-top"]}>Hezcode</div>
      <hr />
      <div className={styles["sideBar-body"]}>
        <ul>
          <li>
            <Dashboard />
            <span>Dashboard</span>
          </li>
          <li>
            <span>Users</span>
          </li>
          <li>
            <span>Products</span>
          </li>
          <li>
            <span>Orders</span>
          </li>
          <li>
            <span>Delivery</span>
          </li>
          <li>
            <span>Notification</span>
          </li>
          <li>
            <span>System Health</span>
          </li>
          <li>
            <span>Logs</span>
          </li>
          <li>
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className={styles["sidebar-bottom"]}>color options</div>
    </div>
  );
};

export default Sidebar;
