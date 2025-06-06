import homeIcon from '../../assets/Sidebar/home.svg';
import perfilIcon from '../../assets/Sidebar/perfil.svg';
import notificationIcon from '../../assets/Sidebar/notification.svg';
import searchIcon from '../../assets/Sidebar/search.svg';
import portifolioIcon from '../../assets/Sidebar/portifolio.svg';
import calendarIcon from '../../assets/Sidebar/calendar.svg';

import homeActiveIcon from '../../assets/Sidebar/home-active.svg';
import perfilActiveIcon from '../../assets/Sidebar/perfil-active.svg';
import notificationActiveIcon from '../../assets/Sidebar/notification-active.svg';
import searchActiveIcon from '../../assets/Sidebar/search-active.svg';
import portifolioActiveIcon from '../../assets/Sidebar/portifolio-active.svg';
import calendarActiveIcon from '../../assets/Sidebar/calendar-active.svg';

export const SideBarData = [
    {
        title: "Início",
        path: "/app",
        activeIcon: homeActiveIcon,
        icon: homeIcon,
        cName: "nav-text",
    },
    {
        title: "Portfólio",
        path: "/app/portfolio",
        activeIcon: portifolioActiveIcon,
        icon: portifolioIcon,
        cName: "nav-text",
    },
    {
        title: "Agendamento",
        path: "/app/agendamento",
        activeIcon: calendarActiveIcon,
        icon: calendarIcon,
        cName: "nav-text",
    },
    {
        title: "Explorar",
        path: "/app/explorar",
        activeIcon: searchActiveIcon,
        icon: searchIcon,
        cName: "nav-text",
    },
    {
        title: "Perfil",
        path: "/app/perfil",
        activeIcon: perfilActiveIcon,
        icon: perfilIcon,
        cName: "nav-text",
    }
  ];