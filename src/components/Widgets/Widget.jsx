// imported CSS style.
import styles from "./Widget.module.css";

// imported Material UI...
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = ({ type }) => {
  let data = {};

  // These values are based on assumptions until we will be fetching real data.
  let amount = 100;
  let diff = 20;
  // ...end of assumptions
  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
        icon: (
          <PermIdentityOutlinedIcon
            className={styles["widget-icon"]}
            style={{
              color: "purple",
              backgroundColor: "rgba(148, 5, 148, 0.123)",
            }}
          />
        ),
      };
      break;
    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "See All Orders",
        icon: (
          <ProductionQuantityLimitsOutlinedIcon
            className={styles["widget-icon"]}
            style={{
              color: "orange",
              backgroundColor: "rgba(194, 101, 14, 0.301)",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See Net Earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className={styles["widget-icon"]}
            style={{
              color: "blue",
              backgroundColor: "rgba(14, 47, 194, 0.301)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See Details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className={styles["widget-icon"]}
            style={{
              color: "green",
              backgroundColor: "rgba(65, 194, 14, 0.199)",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }
  console.log(data.link);
  return (
    <div className={styles.widget}>
      <div className={styles.left}>
        <span className={styles.title}> {data.title} </span>
        <span className={styles.amount}>
          {" "}
          {data.isMoney && "$"} {amount}{" "}
        </span>
        <span className={styles.cta}> {data.link} </span>
      </div>
      <div className={styles.right}>
        <div className={styles.diff}>
          <ArrowDropUpOutlinedIcon className={styles["arrow-icon"]} />{" "}
          <p>{diff} %</p>
        </div>
        <div className={styles["icon-container"]}> {data.icon} </div>
      </div>
    </div>
  );
};

export default Widget;
