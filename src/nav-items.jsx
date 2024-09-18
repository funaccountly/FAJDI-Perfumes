import { HomeIcon, InfoIcon, ShoppingBagIcon, NewspaperIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <InfoIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Shop",
    to: "/shop",
    icon: <ShoppingBagIcon className="h-4 w-4" />,
    page: <Index />, // Placeholder, replace with actual Shop component when created
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <NewspaperIcon className="h-4 w-4" />,
    page: <Blog />,
  },
];
