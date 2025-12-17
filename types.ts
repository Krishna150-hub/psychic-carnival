export interface Invoice {
  id: string;
  client: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface ChartData {
  name: string;
  value: number;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  INVOICES = 'INVOICES',
  SETTINGS = 'SETTINGS',
}