export interface IPopUp{
    picture: { medium: string , large:string};
    name: { first: string; last: string };
    location: {
      city: string;
      country: string;
      postcode: string;
      state: string;
      street: { name: string; number: string };
    };
    email: string;
    phone: string;
    registered: { date: string };
    id: { value: string };
  }