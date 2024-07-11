import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

export const headerNavLink = [
  {
    label: "Home",
    iconUrl: <AiOutlineHome size={20} />,
    route: "/",
  },

  {
    label: "Find Friends",
    iconUrl: <BiUser size={22} />,
    route: "/find-friends",
  },
  {
    label: "Notification",
    iconUrl: <IoMdNotificationsOutline size={22} />,
    route: "/notification",
  },
];
