import axios from 'axios';

export const getData = async (
  rowsPerPage: number,
  gender: string,
  nationality: string,
  page: number,
  id: string | undefined
) => {
  return await axios.get(
    `https://randomuser.me/api?results=${rowsPerPage}&gender=${gender}&nat=${nationality}&page=${page}`
  );
};

export const getDataBySeed = async () => {
  return await axios.get(
    `https://randomuser.me/api?results=${localStorage.getItem(
      'rowsnum'
    )}&seed=${localStorage.getItem('seed')}&page=${localStorage.getItem(
      'page'
    )}`
  );
};
