import { useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Box, Toolbar } from "@mui/material";

import PopUp from "../PopUp";
import UsersTable from "../UsersTable";

import { IResults } from "../../shared/types";
import {IAccountDetails} from './type'

import { useStyles } from "./styles";
import colors from '../../styles/colors.module.scss'

function UsersView({AccountDetails}:{AccountDetails:IAccountDetails}) {
  const classes = useStyles();
  const params = useParams();
  const [dataResults, setDataResults] = useState<Array<IResults>|undefined>();

  const handleChange = (dataRows: Array<IResults>) => {
    setDataResults(dataRows);
  };

  return (
    <>
      <Box component="main" className={classes.root}>
        <Toolbar className="userView">
          <h2>Users</h2>
          <div className={classes.UserAvatar}>
            <p>{AccountDetails.accountName}</p>
            <Avatar src={AccountDetails.accountImage} />
          </div>
        </Toolbar>
        <UsersTable handleChange={handleChange} />
      </Box>
      {params.id && <PopUp dataResults={dataResults} coverColor={colors.Blue}/>}
    </>
  );
}

export default UsersView;
