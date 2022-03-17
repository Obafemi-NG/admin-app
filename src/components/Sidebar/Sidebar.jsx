import styles from "./Sidebar.module.css";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-top"]}>Jazi</div>
      {/* <hr /> */}
      <div className={styles["sidebar-body"]}>
        <ul>
          <p className={styles.title}>MAIN</p>
          <li>
            <DashboardOutlinedIcon className={styles.icons} />
            <span>Dashboard</span>
          </li>
          <p className={styles.title}>LIST</p>
          <li>
            <PersonOutlineIcon className={styles.icons} />
            <span>Users</span>
          </li>
          <li>
            <Inventory2OutlinedIcon className={styles.icons} />
            <span>Products</span>
          </li>
          <li>
            <ProductionQuantityLimitsOutlinedIcon className={styles.icons} />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className={styles.icons} />
            <span>Delivery</span>
          </li>
          <p className={styles.title}>USEFUL</p>
          <li>
            <AssessmentOutlinedIcon className={styles.icons} />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className={styles.icons} />
            <span>Notification</span>
          </li>
          <p className={styles.title}>SERVICE</p>
          <li>
            <LocalHospitalOutlinedIcon className={styles.icons} />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className={styles.icons} />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className={styles.icons} />
            <span>Settings</span>
          </li>
          <p className={styles.title}>USER</p>
          <li>
            <AccountCircleOutlinedIcon className={styles.icons} />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className={styles.icons} />
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      {/* <div className={styles["sidebar-bottom"]}>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
