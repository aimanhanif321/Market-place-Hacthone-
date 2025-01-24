// components/Categories.tsx
// import React, { useEffect, useState } from 'react';
// import { getCategories } from '@/sanity/lib/data';

// const Categories = () => {
//   const [categories, setCategories] = useState([]);
  
//   useEffect(() => {
//     const fetchCategories = async () => {
//       const data = await getCategories();
//       setCategories(data);
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div>
//       <h1>Categories</h1>
//       <ul>
//         {categories.map((category: { title: string; slug: { current: string } }) => (
//           <li key={category._id}>
//             <a href={`/category/${category.slug.current}`}>{category.title}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Categories;




// src/app/Categories/page.tsx
"use client"; // This marks the component as a client-side component, so useEffect works

import React, { useEffect, useState } from 'react';
import { getCategories } from '@/sanity/lib/data'; // Data fetching method

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category: { _id: string; title: string; slug: { current: string } }) => (
          <li key={category._id}>
            <a href={`/Categories/${category.slug.current}`}>{category.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

