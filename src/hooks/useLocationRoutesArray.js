import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getNavbarData } from "store/reducer-and-action/language/language";

export const useLocationRoutesArray = () => {
  const navbar = useSelector(getNavbarData);
  const { pathname } = useLocation();
  const currentList = navbar.find((part) => pathname.includes(part.link));
  const secondOrderRoute = currentList.list.find(({ route }) =>
    pathname.includes(route)
  );
  const routes = [
    { title: currentList.head, route: currentList.link },
    ...(secondOrderRoute ? [secondOrderRoute] : []),
    ...pathname
      .split("/")
      .filter(
        (item) =>
          currentList?.link !== item &&
          secondOrderRoute?.route !== item &&
          item !== ""
      )
      .map((item) => ({ route: item })),
  ];
  return routes;
};
