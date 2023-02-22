import {
  Avatar,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
  TableHead,
  TableCell,
  TableFooter,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useStyles } from './style';

function TableComponent({
  dataValues,
  handleChangeRowsPerPage,
  rowsPerPage,
  handleChangePage,
  page,
}: {
  dataValues: any;
  handleChangeRowsPerPage(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
  rowsPerPage: number;
  handleChangePage(
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ): void;
  page: number;
}) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
        <TableHead>
          <TableRow className={classes.headRow}>
            {[
              'User',
              'Contact Information',
              'Registration Date',
              'Country/Post Code',
            ].map((column,index) => (
              <TableCell key={`headRow-${index}`}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataValues.results.map((row: any, index: any) => {
            return (
              //here used login uuid because id for most users has null id
              <TableRow
                onClick={() => {
                  navigate(`/Users/${row?.login?.uuid}`);
                }}
                key={index}>
                <TableCell key={1}>
                  <span className={classes.AvatarTableCell}>
                    <Avatar alt="Travis Howard" src={row.picture.medium} />
                    <span className="text-container">
                      <p className={classes.text1}>
                        {row.name.first} {row.name.last}
                      </p>
                      <span className={classes.text2}>
                        {row.location.street.number} {row.location.street.name}.{' '}
                        {row.location.city},{row.location.state}
                      </span>
                    </span>
                  </span>
                </TableCell>
                <TableCell key={2}>
                  <p className={classes.text1}>{row.email}</p>
                  <p className={classes.text2}>{row.phone}</p>
                </TableCell>
                <TableCell key={3}>
                  <div className={classes.text1}>
                    {' '}
                    {monthNames[new Date(row.registered.date).getMonth()]}{' '}
                    {new Date(row.registered.date).getDay()},
                    {new Date(row.registered.date).getFullYear()}{' '}
                  </div>
                  <div className={classes.text2}>
                    {new Date(row.registered.date).getHours() % 12}:
                    {new Date(row.registered.date)
                      .getMinutes()
                      .toLocaleString('en-US', {
                        minimumIntegerDigits: 2,
                        useGrouping: false,
                      })}{' '}
                    {new Date(row.registered.date).getHours() >= 12
                      ? 'pm'
                      : 'am'}
                  </div>
                </TableCell>
                <TableCell key={4}>
                  <p className={classes.text1}>{row.location.country}</p>
                  <p className={classes.text2}>{row.location.postcode}</p>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow className={classes.footerRow}>
            <TablePagination
              count={-1}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              labelDisplayedRows={() => {
                return null;
              }}
              rowsPerPageOptions={[8, 10, 25]}
              className={classes.tablePagination}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
