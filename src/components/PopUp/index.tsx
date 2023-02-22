import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { IResults } from '../../shared/types';

import { useStyles } from './styles';

function PopUp({
  dataResults,
  coverColor,
}: {
  dataResults: Array<IResults> | undefined;
  coverColor?: string;
}) {
  
  const params = useParams();
  const navigate = useNavigate();
  const classes = useStyles({ coverColor });
  const [data, setData] = useState<IResults | null>(null);

  //By the link below it shows that we can't directly get data of user by it id so instead I used seed which gets all of the data that
  //was displed in tabel previously and then I filter this array by id .
  //https://github.com/RandomAPI/Randomuser.me-Node/issues/97?fbclid=IwAR2I9NYE0wzCU4nQ6eFg7swUh4iKB3-M_Du2-lq0CR1Lt1H6Zj4WlewbKSU
  useEffect(() => {
    //if we have the data we don't need to call a request just use it
    const value = dataResults?.find((x: any) => {
      return x.login?.uuid === params.id;
    });
    !value
      ? (async () => {
          try {
            await axios
              .get(
                `https://randomuser.me/api?results=${localStorage.getItem(
                  'rowsnum'
                )}&seed=${localStorage.getItem(
                  'seed'
                )}&page=${localStorage.getItem('page')}`
              )
              .then((res) => {
                setData(
                  res.data.results?.find((x: any) => {
                    return x.login?.uuid === params.id;
                  })
                );
              });
          } catch (error) {
            console.log(error);
          }
        })()
      : setData(value);
  }, [localStorage.getItem('page')]);
  return (
    <Drawer
      anchor={'right'}
      open={true}
      onClose={() => {
        navigate(`/Users`);
      }}>
      <Box className={classes.root}>
        <Box className={'popupCoverImage'} />
        <div className={'popUpDetails'}>
          <Avatar alt="Travis Howard" src={data?.picture?.large} />
          <h4>
            {data?.name?.first} {data?.name?.last}
          </h4>
          <p>
            {data?.location?.postcode}
            {data?.location?.city}
            {data?.location?.country}
          </p>
        </div>
      </Box>
    </Drawer>
  );
}

export default PopUp;
