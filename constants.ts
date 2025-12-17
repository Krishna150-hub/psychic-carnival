import { Invoice, ChartData } from './types';

export const MOCK_INVOICES: Invoice[] = [
  { id: 'INV-2023-001', client: 'Acme Corp', amount: 12500.00, date: '2023-10-01', status: 'Paid' },
  { id: 'INV-2023-002', client: 'Globex Inc', amount: 3400.50, date: '2023-10-05', status: 'Pending' },
  { id: 'INV-2023-003', client: 'Soylent Corp', amount: 8900.00, date: '2023-10-12', status: 'Overdue' },
  { id: 'INV-2023-004', client: 'Initech', amount: 450.00, date: '2023-10-15', status: 'Paid' },
  { id: 'INV-2023-005', client: 'Umbrella Corp', amount: 22000.00, date: '2023-10-18', status: 'Pending' },
  { id: 'INV-2023-006', client: 'Stark Ind', amount: 56000.00, date: '2023-10-20', status: 'Paid' },
];

export const REVENUE_DATA: ChartData[] = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

export const EXPENSE_DATA: ChartData[] = [
  { name: 'Marketing', value: 2400 },
  { name: 'R&D', value: 4567 },
  { name: 'Operations', value: 1398 },
  { name: 'Sales', value: 9800 },
  { name: 'Legal', value: 3908 },
];