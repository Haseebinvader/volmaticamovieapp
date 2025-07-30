import { NavItem } from "@/lib/Types/navItems";

const navbarItems: NavItem[] = [
  {
    name: "Movies",
    dropdown: true,
    items: [
      { name: "Now Showing", path: "/explore/movies/now-showing" },
      { name: "Coming Soon", path: "/explore/movies/coming-soon" },
      { name: "Top Rated", path: "/explore/movies/top-rated" },
      { name: "Popular", path: "/explore/movies/popular" },
      { name: "Trending", path: "/explore/movies/trending" },
    ],
  },
  {
    name: "TV Shows",
    dropdown: true,
    items: [
      { name: "Now Showing", path: "/explore/tv/now-showing" },
      { name: "Coming Soon", path: "/explore/tv/coming-soon" },
      { name: "Top Rated", path: "/explore/tv/top-rated" },
      { name: "Popular", path: "/explore/tv/popular" },
      { name: "Trending", path: "/explore/tv/trending" },
    ],
  },
  {
    name: "Genres",
    path: "/genres",
  },
  {
    name: "Actors",
    path: "/actors",
  },
  {
    name: "Directors",
    path: "/directors",
  },
];

export default navbarItems;
export const SKELETON_COUNT = 12;
