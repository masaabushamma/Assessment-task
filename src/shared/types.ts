export interface ITableRows {
  info: {
    seed: string;
  };
  results: Array<{
    picture: { medium: string };
    name: { first: string; last: string };
    location: {
      city: string;
      country: string;
      postcode: string;
      state: string;
      street: { name: string; number: string };
    };
    login: { uuid: string };
    email: string;
    phone: string;
    registered: { date: string };
    id: { value: string };
  }>;
}
export interface IResults {
  picture?: { medium: string; large: string };
  name?: { first?: string; last?: string };
  location?: {
    city: string;
    country: string;
    postcode: string;
    state: string;
    street: { name: string; number: string };
  };
  login?: { uuid: string };
  email?: string;
  phone?: string;
  registered?: { date: string };
  id?: { value: string };
}
