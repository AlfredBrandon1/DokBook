import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'

const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'My Patients List',
        path: '/my-patients',
        icon: <AiIcons.AiOutlineTable/>,
        cName: 'nav-text'
    },
    {
        title: 'Add Patient',
        path: '/add-patient',
        icon: <AiIcons.AiOutlineUserAdd/>,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <BsIcons.BsFillCalendarDateFill/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/',
        icon: <AiIcons.AiOutlineLogout/>,
        cName: 'nav-text'
    },
]

export default SidebarData