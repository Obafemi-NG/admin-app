import styles from "./Featured.module.css";

// Imported React SVG Component...
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Imported Material UI below...
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

const Featured = () => {
  // just an assumption, thus, a temporary value.
  let percentage = 66;
  let sales = 520;
  let target = "72.6";
  let lastWeek = "15.9";
  let lastMonth = "12.9";
  //   ---end of assumed values.

  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <p>Total Revenue</p>
        <MoreVertOutlinedIcon className={styles.icon} />
      </div>
      <div className={styles.bottom}>
        <div className={styles.progressbar} style={{ width: 100, height: 100 }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth="3"
          />
        </div>
        <p className={styles.title}>Total Sales made today</p>
        <p className={styles.sales}> {`$${sales}`} </p>
        <p className={styles.desc}>
          {" "}
          Previous transaction processing. Last payments may not be included{" "}
        </p>
        <div className={styles.items}>
          <div className={styles.details}>
            <p className={styles.title}>Target</p>
            <ArrowDropDownOutlinedIcon />
            <p className={styles.rate}> {`$${target}k`} </p>
          </div>
          <div className={styles.details}>
            <p className={styles.title}>Last Week</p>
            <ArrowDropDownOutlinedIcon />
            <p className={styles.rate}> {`$${lastWeek}k`} </p>
          </div>
          <div className={styles.details}>
            <p className={styles.title}>Last Month</p>
            <ArrowDropDownOutlinedIcon />
            <p className={styles.rate}> {`$${lastMonth}k`} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
