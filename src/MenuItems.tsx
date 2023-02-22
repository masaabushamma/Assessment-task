import { ReactComponent as IdeasIcon } from './assets/icons/ideas-icon.svg';
import { ReactComponent as UsersIcon } from './assets/icons/users-icon.svg';
import { ReactComponent as OverviewIcon } from './assets/icons/overview-icon.svg';
import { ReactComponent as TicketsIcon } from './assets/icons/tickets-icon.svg';

import UsersView from './components/UsersView';
import { AccountDetails } from "./AccountDetails";


//Menu items to pass it to sidebar component
export const MenuItems = [
  {
    itemName: 'Overview',
    itemIcon: <OverviewIcon />,
    content: <></>,
    path: '/Overview',
  },
  {
    itemName: 'Tickets',
    itemIcon: <TicketsIcon />,
    content: <></>,
    path: '/Tickets',
  },
  {
    itemName: 'Ideas',
    itemIcon: <IdeasIcon />,
    content: <></>,
    path: '/Ideas',
  },
  {
    itemName: 'Users',
    itemIcon: <UsersIcon />,
    content: <UsersView AccountDetails={AccountDetails}/>,
    path: '/Users',
    children: { path: '/Users/:id', content: <UsersView AccountDetails={AccountDetails} /> },
  },
];
