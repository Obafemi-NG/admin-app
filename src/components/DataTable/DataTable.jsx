import styles from "./DataTable.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataTableSource/dataTableSource";
const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: () => (
        <div className={styles["action-row"]}>
          <span className={styles.view}>View</span>
          <span className={styles.delete}>Delete</span>
        </div>
      ),
    },
  ];
  return (
    <div className={styles.dataTable}>
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default DataTable;
