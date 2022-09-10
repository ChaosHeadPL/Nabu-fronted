import ArticleIcon from '@mui/icons-material/Article';
import DescriptionIcon from '@mui/icons-material/Description';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CampaignIcon from '@mui/icons-material/Campaign';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TableViewIcon from '@mui/icons-material/TableView';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import HomeIcon from '@mui/icons-material/Home';


import Home from '../../../pages/Home/Home';
import Articles from '../../../pages/Articles/Articles';
import Checklists from '../../../pages/Checklists/Checklists';
import Notes from '../../../pages/Notes/Notes';
import Relations from '../../../pages/Relations/Relations';
import Snippets from '../../../pages/Snippets/Snippets';
import Tables from '../../../pages/Tables/Tables';
import ToDo from '../../../pages/ToDo/ToDo';
import Videos from '../../../pages/Videos/Videos';
import Authentication from '../../../pages/Authentication/Authentication';
import PeopleIcon from '@mui/icons-material/People';


export const mainNavbarItems = [
    {
        id: 0,
        icon: <HomeIcon />,
        label: 'Home',
        route: 'home',
        element: <Home />,
    },
    {
        id: 1,
        icon: <PeopleIcon />,
        label: 'Authentication',
        route: 'authentication',
        element: <Authentication />,
    },
    {
        id: 2,
        icon: <ArticleIcon />,
        label: 'Articles',
        route: 'articles',
        element: <Articles />,
    },
    {
        id: 3,
        icon: <FactCheckIcon />,
        label: 'Checklists',
        route: 'checklists',
        element: <Checklists />,
    },
    {
        id: 4,
        icon: <DescriptionIcon />,
        label: 'Notes',
        route: 'notes',
        element: <Notes />,
    },
    {
        id: 5,
        icon: <CampaignIcon />,
        label: 'Relations',
        route: 'relations',
        element: <Relations />,
    },
    {
        id: 6,
        icon: <IntegrationInstructionsIcon />,
        label: 'Snippets',
        route: 'snippets',
        element: <Snippets />,
    },
    {
        id: 7,
        icon: <TableViewIcon />,
        label: 'Tables',
        route: 'tables',
        element: <Tables />,
    },
    {
        id: 8,
        icon: <ListAltIcon />,
        label: 'ToDo',
        route: 'toDo',
        element: <ToDo />,
    },
    {
        id: 9,
        icon: <OndemandVideoIcon />,
        label: 'Videos',
        route: 'videos',
        element: <Videos />,
    },
]