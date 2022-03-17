// imported CSS styles.
import styles from "./Navbar.module.css";

// imported Material UI
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.search}>
          <input placeholder="Search..." />
          <SearchOutlinedIcon className={styles.icon} />
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            {" "}
            <LanguageOutlinedIcon className={styles.icon} />{" "}
            <span className={styles.language}>English</span>
          </div>
          <div className={styles.item}>
            {" "}
            <DarkModeOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            {" "}
            <FullscreenExitOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            {" "}
            <NotificationsNoneOutlinedIcon className={styles.icon} />
            <div className={styles.badge}>1</div>
          </div>
          <div className={styles.item}>
            {" "}
            <ChatBubbleOutlineOutlinedIcon className={styles.icon} />
            <div className={styles.badge}>5</div>
          </div>
          <div className={styles.item}>
            {" "}
            <ListOutlinedIcon className={styles.icon} />
          </div>
          <div className={styles.item}>
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="avatar"
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
