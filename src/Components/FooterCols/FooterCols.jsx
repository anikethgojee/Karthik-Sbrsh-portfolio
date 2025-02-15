// import React from 'react'
// import './FooterCols.css'
// import {Link} from 'react-router-dom'

// export default function FooterCols({ 
//   heading = 'col heading ',
//   links = [
//     {
//       type:"Links",
//       title : 'Home',
//       path : '/',
//     },
//     {
//       type:"Links",
//       title : 'About',
//       path : '/profile',
//     }
//   ]
// })
// {
//   return (
//     <div className='fcol_container'>
//       <h1 className="f_heading">{heading}</h1>
//       <ul>
//         {links.map((item, index) => (
//           <li key={index}> 
//             {item.type === 'Link' ? (
//               <Link to={item.path}>{item.title}</Link>
//             ) : (
//               <a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import React from 'react';
import './FooterCols.css';
import { Link } from 'react-router-dom';

export default function FooterCols({ 
  heading = 'col heading ',
  links = [
    {
      type: "Links",
      title: 'Home',
      path: '/',
    }
  ]
}) {
  // Function to handle the smooth scrolling
  const handleScrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='fcol_container'>
      <h1 className="f_heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'Link' ? (
              // If the path is an internal section id, use onClick for smooth scroll
              item.path.startsWith('#') ? (
                <button 
                  className="link-button"
                  onClick={() => handleScrollToElement(item.path.substring(1))}
                >
                  {item.title}
                </button>
              ) : (
                <Link to={item.path}>{item.title}</Link>
              )
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

