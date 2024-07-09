import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Link } from "react-router-dom";
import { products as _products } from "../../datas";

const Products = () => {
  const [procuts, setprocuts] = useState(_products);

  const productDelete = (id) => {
    setprocuts(procuts.filter((prod) => prod.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "model",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <span className="flex flex-row items-center">
              {
                <img
                  src={params.row.imageUrl}
                  className="rounded-full object-cover w-12 h-12 mr-4"
                ></img>
              }
              {params.row.model}
            </span>
          </>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 120,
      renderCell: ({ row }) => {
        return (
          <>
            <Link to={`/products/${row.id}`}>
              <Button
                size="small"
                variant="outlined"
                sx={{ marginRight: "15px" }}
              >
                Edit
              </Button>
            </Link>
            <Link>
              <DeleteOutlineIcon
                color="secondary"
                onClick={() => productDelete(row.id)}
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
        rows={procuts}
        columns={columns}
        sx={{ maxWidth: 1200 }}
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

export default Products;
