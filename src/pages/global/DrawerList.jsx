import GroupsIcon from "@mui/icons-material/Groups";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import DescriptionIcon from '@mui/icons-material/Description';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import PieChartIcon from '@mui/icons-material/PieChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default [
    {
        text: "Dashboard",
        icon: <DashboardIcon />,
        path: "/",
      },
  {
    text: "Teams",
    icon: <GroupsIcon />,
    path: "/team",
  },
  {
    text: "Contacts",
    icon: <AddIcCallIcon />,
    path: "/contacts",
  },
  {
    text: "Calender",
    icon: <CalendarMonthIcon />,
    path: "/calendar",
  },
  {
    text: "Invoice",
    icon: <DescriptionIcon />,
    path: "/invoice",
  },
  {
    text: "Bar",
    icon: <BarChartIcon />,
    path: "/bars",
  },

  {
    text: "Form",
    icon: <FormatAlignLeftIcon />,
    path: "/form",
  },
  {
    text: "Pie",
    icon: <PieChartIcon />,
    path: "/pie",
  },
  {
    text: "Lines",
    icon: <SsidChartIcon />,
    path: "/lines",
  },
  {
    text: "Geography",
    icon: <TerrainOutlinedIcon />,
    path: "/geography",
  },
  {
    text: "FAQ",
    icon: <LiveHelpIcon />,
    path: "/faq",
  },
];
