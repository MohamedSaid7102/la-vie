import { NavLink } from 'react-router-dom';

import React from 'react';
import { ListType } from 'types/types';

interface NavbarProps {
  list: ListType;
}

export const Navbar: React.FC<NavbarProps> = ({ list }) => {
  return <>{console.log(list)}</>;
};

// const navbar = () => {
//   return (
//     <>
//       <nav className="text-white bg-black">
//         <ul>
//           {/* Logo */}
//           <li>
//             <img src="/src/assets/images/logo.png" alt="logo" />
//           </li>
//           {/* Home Link */}
//           <li>
//             <NavLink to="/home">
//               <span>Home</span>
//             </NavLink>
//           </li>
//           {/* Shop Link */}
//           <li>
//             <NavLink to="/shop">Shop</NavLink>
//           </li>
//           {/* Blog Link */}
//           <li>
//             <NavLink to="/blog">Blog</NavLink>
//           </li>
//           {/* About Link */}
//           <li>
//             <NavLink to="/about">About</NavLink>
//           </li>
//           {/* Community Link */}
//           <li>
//             <NavLink to="/community">Community</NavLink>
//           </li>
//           {/* Signup button */}
//           <li>
//             <button className="bg-primary">Sign Up</button>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };
