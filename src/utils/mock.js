import EmptyPlaces from "../components/EmptyPlaces";
import Home from "../components/Home";
import OrdinaryRooms from "../components/OrdinaryRooms";

export const data = [
  {
    id: 1,
    path: "/",
    title: "Home",
    Component: <Home />,
    hidden: true,
  },
  {
    id: 1,
    path: "/about",
    title: "About",
    Component: <h1>About</h1>,
  },
  {
    id: 2,
    path: "/contact",
    title: "Contact",
    Component: <h1>Contact</h1>,
  },
  {
    id: 3,
    path: "/products",
    title: "Products",
    Component: <h1>Products</h1>,
  },
  {
    id: 4,
    path: "/adress",
    title: "Adress",
    Component: <h1>Adress</h1>,
  },
  {
    id: 5,
    path: "/empty-class",
    title: "Empty Class",
    Component: <EmptyPlaces />,
    child: true,
    children: [
      {
        id: 5 - 1,
        path: "/empty-class/ordinary-rooms",
        title: "Ordinary rooms",
        Component: <OrdinaryRooms />,
        child: true,
        children: [
          {
            id: 5 - 1 - 1,
            path: "/empty-class/ordinary-rooms/2",
            title: "2",
            Component: <h1>2 Building</h1>,
          },
          {
            id: 5 - 1 - 2,
            path: "/empty-class/ordinary-rooms/4",
            title: "4",
            Component: <h1>4 Building</h1>,
          },
        ],
      },
      {
        id: 5 - 2,
        path: "/empty-class/luxury",
        title: "Luxury rooms",
        Component: <h1>Luxury rooms</h1>,
      },
      {
        id: 5 - 3,
        path: "/empty-class/cottages",
        title: "Cottages",
        Component: <h1>Cottages</h1>,
      },
    ],
  },
];
