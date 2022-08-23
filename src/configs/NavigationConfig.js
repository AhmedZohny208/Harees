import { 
  // HomeOutlined,
  EnvironmentOutlined,
  // GoldOutlined,
  // CrownOutlined,
  // FileOutlined,
  // ReadOutlined,
  // DotChartOutlined,
  DashboardOutlined,
  // UserOutlined,
  ApiOutlined,
  UsergroupAddOutlined,
  ToolOutlined,
  TeamOutlined,
  RocketOutlined,
  PartitionOutlined
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
  // {
  //   key: 'organization',
  //   path: `${APP_PREFIX_PATH}/organization`,
  //   title: 'Organization',
  //   icon: GoldOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
  // {
  //   key: 'packages',
  //   path: `${APP_PREFIX_PATH}/packages`,
  //   title: 'Packages',
  //   icon: CrownOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
  // {
  //   key: 'invoices',
  //   path: `${APP_PREFIX_PATH}/invoices`,
  //   title: 'Invoices',
  //   icon: FileOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
  // {
  //   key: 'reports',
  //   path: `${APP_PREFIX_PATH}/reports`,
  //   title: 'Reports & Documents',
  //   icon: ReadOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
  // {
  //   key: 'operator',
  //   path: `${APP_PREFIX_PATH}/operator`,
  //   title: 'Operator',
  //   icon: UserOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
  {
    key: 'areas',
    path: `${APP_PREFIX_PATH}/areas`,
    title: 'Areas',
    icon: EnvironmentOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'services',
    path: `${APP_PREFIX_PATH}/services`,
    title: 'Services',
    icon: ApiOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'teams',
    path: `${APP_PREFIX_PATH}/teams`,
    title: 'Teams',
    icon: PartitionOutlined,
    breadcrumb: false,
    submenu: []
  },
  // {
  //   key: 'compounds',
  //   path: `${APP_PREFIX_PATH}/compounds`,
  //   title: 'Compounds',
  //   icon: HomeOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
  {
    key: 'tenants',
    path: `${APP_PREFIX_PATH}/tenants`,
    title: 'Tenants',
    icon: UsergroupAddOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'supervisors',
    path: `${APP_PREFIX_PATH}/supervisors`,
    title: 'Supervisors',
    icon: TeamOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'technician',
    path: `${APP_PREFIX_PATH}/technician`,
    title: 'Technician',
    icon: ToolOutlined,
    breadcrumb: false,
    submenu: []
  },
  {
    key: 'teamlead',
    path: `${APP_PREFIX_PATH}/teamlead`,
    title: 'Teamleads',
    icon: RocketOutlined,
    breadcrumb: false,
    submenu: []
  },
  // {
  //   key: 'compoundAdmins',
  //   path: `${APP_PREFIX_PATH}/home/compound-admins`,
  //   title: 'Compounds Admins',
  //   icon: UserOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
  // {
  //   key: 'stats',
  //   path: `${APP_PREFIX_PATH}/home/statistics`,
  //   title: 'Statisitics',
  //   icon: DotChartOutlined,
  //   breadcrumb: false,
  //   submenu: []
  // },
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
