import { NavbarListType } from 'types/types';

export const loginNavBarItems: NavbarListType = [
  {
    id: 0,
    dom: <img src="src/assets/images/logo.png" alt="logo" />,
    path: '/',
    navigatable: true,
  },
  {
    id: 1,
    dom: <span>Home</span>,
    path: '/home',
    navigatable: true,
  },
  {
    id: 2,
    dom: <span>Shop</span>,
    path: '/shop',
    navigatable: true,
  },
  {
    id: 3,
    dom: <span>Blog</span>,
    path: '/blog',
    navigatable: true,
  },
  {
    id: 4,
    dom: <span>About</span>,
    path: '/about',
    navigatable: true,
  },
  {
    id: 5,
    dom: <span>Commnity</span>,
    path: '/commnity',
    navigatable: true,
  },
  {
    id: 6,
    dom: (
      <button
        className="bg-primary text-white px-4 py-2 rounded-md"
        tabIndex={-1}
      >
        Sign Up
      </button>
    ),
    path: '/signup',
    navigatable: true,
  },
];

/**!SECTION
 * import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from 'src/redux/store';
import { NavbarListType } from 'types/types';

const menueOpen = useSelector((state: RootState) => state.navbar.menueOpen);

export const loginNavBarItems: NavbarListType = [
  {
    dom: getDomNodeCode(
      <img
        src="src/assets/images/logo.png"
        alt="logo"
        className="max-w-[60px]
  sm:relative sm:top-0 sm:left-0"
      />,
      '/home'
    ),
    path: '/home',
    navigatable: true,
  },
  {
    dom: getDomNodeCode('Home', '/home'),
    path: '/home',
    navigatable: true,
  },
  {
    dom: getDomNodeCode('Shop', '/shop'),
    path: '/shop',
    navigatable: true,
  },
  {
    dom: getDomNodeCode('Blog', '/blog'),
    path: '/blog',
    navigatable: true,
  },
  {
    dom: getDomNodeCode('About', '/about'),
    path: '/about',
    navigatable: true,
  },
  {
    dom: getDomNodeCode('Community', '/community'),
    path: '/commnity',
    navigatable: true,
  },
  {
    dom: (
      <li>
        <button className="bg-primary text-white px-4 py-2 rounded-md ">
          Sign Up
        </button>
      </li>
    ),
    navigatable: false,
  },
];

function getDomNodeCode(domContent: string | JSX.Element, path: string) {
  return (
    <li
      className={`
${menueOpen ? 'scale-100' : 'scale-0'}
font-[500] w-full text-center
border-b-[1px] border-gray-400
sm:border-none sm:max-w-max`}
    >
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? 'text-primary w-full h-full flex justify-center py-3'
            : ' w-full h-full flex justify-center py-3'
        }
      >
        {domContent}
      </NavLink>
    </li>
  );
}

 */
