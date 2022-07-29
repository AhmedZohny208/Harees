import { 
  HomeOutlined,
  GoldOutlined,
  CrownOutlined,
  FileOutlined,
  ReadOutlined,
  DotChartOutlined,
  DashboardOutlined,
  UserOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
  {
    key: 'home',
    path: `${APP_PREFIX_PATH}/home`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'organization',
    path: `${APP_PREFIX_PATH}/organization`,
    title: 'Organization',
    icon: GoldOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'packages',
    path: `${APP_PREFIX_PATH}/packages`,
    title: 'Packages',
    icon: CrownOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'invoices',
    path: `${APP_PREFIX_PATH}/invoices`,
    title: 'Invoices',
    icon: FileOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'reports',
    path: `${APP_PREFIX_PATH}/reports`,
    title: 'Reports & Documents',
    icon: ReadOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'operator',
    path: `${APP_PREFIX_PATH}/operator`,
    title: 'Operator',
    icon: UserOutlined,
    breadcrumb: false,
    submenu: []
  },
  // {
  //   key: 'compounds',
  //   path: `${APP_PREFIX_PATH}/home/compounds`,
  //   title: 'Compounds',
  //   icon: HomeOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
  // {
  //   key: 'supervisors',
  //   path: `${APP_PREFIX_PATH}/home/supervisors`,
  //   title: 'Supervisors',
  //   icon: TeamOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
  // {
  //   key: 'compoundAdmins',
  //   path: `${APP_PREFIX_PATH}/home/compound-admins`,
  //   title: 'Compounds Admins',
  //   icon: UserOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
  {
    key: 'stats',
    path: `${APP_PREFIX_PATH}/home/statistics`,
    title: 'Statisitics',
    icon: DotChartOutlined,
    breadcrumb: false,
    submenu: []
  },
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
