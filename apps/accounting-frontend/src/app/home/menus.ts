export interface Menu {
  name: string;
  path?: string;
  icon: string;
  children?: Menu[];
}

export const menus: Menu[] = [
  {
    name: 'General Ledger',
    icon: 'home',
    children: [
      {
        name: 'Accounts',
        icon: 'account_balance',
        path: '/accounts',
      },
      {
        name: 'Journals',
        icon: 'book',
        path: '/journals',
      },
    ],
  },
];
