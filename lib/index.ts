import {
  RectangleGroupIcon,
  FolderOpenIcon,
  ChartBarIcon,
  UserPlusIcon,
  BanknotesIcon,
  ArrowPathIcon,
  DocumentChartBarIcon,
} from "@heroicons/react/24/outline";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface INavigationType {
  name: string;
  icon: any;
  children?: Partial<INavigationType>[];
  href?: string;
  current?: boolean;
}

export const navigation: INavigationType[] = [
  { name: "Dashboard", icon: RectangleGroupIcon, href: "/", current: false },
  { name: "Projects", icon: FolderOpenIcon, href: "/projects", current: false },
];

export const projects = [
  {
    name: "Test Project",
    from: "2023-08-01",
    to: "2023-11-01",
    billingMaturity: "1",
  },
];

export const menuItems = [
  {
    name: "Projects",
    icon: FolderOpenIcon,
    url: "/projects",
  },
];

export const projectsMenu = [
  {
    name: "Dashboard",
    icon: ChartBarIcon,
    url: "/projects",
  },
];

export const exploreMenu = [
  {
    name: "Bank Accounts",
    icon: BanknotesIcon,
    url: "bank-accounts",
  },
  {
    name: "Create Accounts",
    icon: UserPlusIcon,
    url: "create-account",
  },
  {
    name: "Reconcile Accounts",
    icon: ArrowPathIcon,
    url: "reconcile-accounts",
  },
  {
    name: "Reports",
    icon: DocumentChartBarIcon,
    url: "reports",
  },
];
