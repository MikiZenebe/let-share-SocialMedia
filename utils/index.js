import { AiFillHome } from "react-icons/ai";
import { BiSolidUser, BiSolidUserPlus } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";

export const headerNavLink = [
  {
    label: "Home",
    iconUrl: <AiFillHome size={20} />,
    route: "/",
  },

  {
    label: "Find Friends",
    iconUrl: <BiSolidUserPlus size={25} />,
    route: "/findFriends",
  },
  {
    label: "Notification",
    iconUrl: <IoMdNotifications size={25} />,
    route: "/notification",
  },
];
