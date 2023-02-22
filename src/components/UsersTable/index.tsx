import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TextField, Box, Toolbar } from "@mui/material";
import axios from "axios";

import TableComponent from "../TableComponent";
import { ITableRows, IResults } from "../../shared/types";

import { useStyles } from "./styles";

function UsersTable({
  handleChange,
}: {
  handleChange(dataRows: Array<IResults>): void;
}) {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = useState<number>(8);
  const [gender, setGender] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [nationality, setNationality] = useState<string>('');
  const [dataValues, setDataValues] = useState<ITableRows>({
    results: [],
    info: { seed: "" },
  });

  const params = useParams();

  useEffect(() => {
    (async () => {
      try {
        await axios
          .get(
            `https://randomuser.me/api?results=${rowsPerPage}&gender=${gender}&nat=${nationality}&page=${page}`
          )
          .then((res) => {
            const data = res.data;
            setDataValues(data);
            handleChange(data.results);
            if (!params.id) {
              localStorage.setItem("seed", data.info.seed);
              localStorage.setItem("rowsnum", `${rowsPerPage}`);
              localStorage.setItem("page", `${page}`);
            }
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [rowsPerPage, gender, nationality, page]);

  useEffect(() => {
    if (!params.id) {
      //use local storage to save seed and rows to get data by api
      localStorage.setItem("seed", dataValues.info.seed);
      localStorage.setItem("rowsnum", `${rowsPerPage}`);
    }
  }, [dataValues, params.id]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box className={classes.root}>
      <Toolbar className="tabelHeaders">
        <h4 className="table-title">All Users</h4>
        <div>
          <TextField
            id="outlined-basic"
            label="Gender"
            onChange={(newValue) =>
              setGender(newValue.target.value?.toLowerCase())
            }
            size={"small"}
          />
          <TextField
            id="outlined-basic"
            label="Nationality"
            onChange={(newValue) =>
              setNationality(newValue.target.value?.toLowerCase())
            }
            size={"small"}
          />
        </div>
      </Toolbar>
      <TableComponent
        dataValues={dataValues}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        page={page}
      />
    </Box>
  );
}

export default UsersTable;
