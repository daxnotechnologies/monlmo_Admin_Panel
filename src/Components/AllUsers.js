import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Iconstyle } from "./styles";

export default function Users() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 250,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 250,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: actionButtons,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 45 },
  ];
  function actionButtons() {
    return (
      <Grid container>
        <Grid item>
          <IconButton onClick={null}>
            <EditIcon style={Iconstyle} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={null}>
            <DeleteIcon style={Iconstyle} />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography
        component="h1"
        variant="h3"
        color="inherit"
        sx={{ flexGrow: 1, mb: 4, textTransform: "bold", fontWeight: "bold" }}
      >
        ALL USERS
      </Typography>
      <Box sx={{ height: "70vh", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
    </Container>
  );
}
