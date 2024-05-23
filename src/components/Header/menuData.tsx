import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Principal",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Acerca de ",
    path: "/about",
    newTab: false,
  },

  {
    id: 3,
    title: "Contactanos",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Paginas",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Acerca de",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Contactanos",
        path: "/contact",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
