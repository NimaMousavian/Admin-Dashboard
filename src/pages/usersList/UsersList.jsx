import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { users as _users } from "../../datas";

const UsersList = () => {
  const [users, setUsers] = useState(_users);

  const userDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <span className="flex flex-row items-center">
              {
                <img
                  src={params.row.imageUrl}
                  className="rounded-full object-cover w-10 h-10 mr-4"
                ></img>
              }
              {params.row.name}
            </span>
          </>
        );
      },
    },
    {
      field: "transactions",
      headerName: "Transactions",
      width: 100,
      type: "number",
      valueGetter: (value, row) => `${row.transaction.amount}`,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 120,
      renderCell: ({ row }) => {
        return (
          <>
            <Link to={`/users/${row.id}`}>
              <Button size="small" variant="outlined">
                Edit
              </Button>
            </Link>
            <Link>
              <DeleteOutlineIcon
                color="secondary"
                onClick={() => userDelete(row.id)}
              />
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="w-full">
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSize={2}
        pageSizeOptions={[5, 10]}
        disableSelectionOnClick
      ></DataGrid>
    </div>
  );
};

export default UsersList;
