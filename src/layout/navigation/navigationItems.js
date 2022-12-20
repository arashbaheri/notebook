import {
  IoCalendarOutline,
  IoChatbubblesOutline,
  IoCubeOutline,
  IoLeafOutline,
  IoSettingsOutline,
} from 'react-icons/io5'

export const navigationItems = [
  {
    id: 1,
    title: 'Home',
    icon: <IoLeafOutline size={25} />,
  },
  {
    id: 2,
    title: 'Project',
    icon: <IoCubeOutline size={25} />,
  },
  {
    id: 3,
    title: 'Calender',
    icon: <IoCalendarOutline size={25} />,
  },
  {
    id: 4,
    title: 'Teamchat',
    icon: <IoChatbubblesOutline size={25} />,
  },
  {
    id: 5,
    title: 'Setting',
    icon: <IoSettingsOutline size={25} />,
  },
]
