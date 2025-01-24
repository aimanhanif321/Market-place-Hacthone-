
// "use client"
// import React from 'react';
// import { GetServerSideProps } from 'next';
// import { client } from '@/sanity/lib/client';
// import { getCategories } from '@/sanity/lib/client';

// const CategoryPage = ({ category, products }) => {
//   return (
//     <div>
//       <h1>{category.title}</h1>
//       <p>{category.description}</p>
//       <div>
//         <h2>Products in this Category:</h2>
//         <ul>
//           {products.map((product: { title: string; price: number }) => (
//             <li key={product._id}>
//               <h3>{product.title}</h3>
//               <p>{product.price}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { slug } = params;

//   // Fetch category and its products
//   const queryCategory = `*[_type == 'category' && slug.current == $slug][0]{_id, title, description}`;
//   const category = await client.fetch(queryCategory, { slug });

//   const queryProducts = `*[_type == 'product' && category->slug.current == $slug]`;
//   const products = await client.fetch(queryProducts, { slug });

//   return {
//     props: {
//       category,
//       products,
//     },
//   };
// };

// export default CategoryPage;





// src/app/Categories/[slug]/page.tsx
// "use client"; // This marks the component as a client-side component, so useEffect works

// import React, { useEffect, useState } from 'react';
// import { client } from '@/sanity/lib/client'; // Sanity client
// import { getCategories, getProductsByCategory } from '@/sanity/lib/data'; // Data fetching methods

// const CategoryPage = ({ params }: { params: { slug: string } }) => {
//   const [category, setCategory] = useState(null);
//   const [products, setProducts] = useState([]);
  
//   useEffect(() => {
//     const fetchCategoryAndProducts = async () => {
//       const categoryData = await client.fetch(
//         `*[_type == 'category' && slug.current == $slug][0]`,
//         { slug: params.slug }
//       );
//       const productsData = await client.fetch(
//         `*[_type == 'product' && category->slug.current == $slug]`,
//         { slug: params.slug }
//       );
      
//       setCategory(categoryData);
//       setProducts(productsData);
//     };

//     fetchCategoryAndProducts();
//   }, [params.slug]);

//   if (!category) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{category.title}</h1>
//       {/* <p>{category.description}</p> */}
//       <div>
//         <h2>Products in this Category:</h2>
//         <ul>
//           {products.map((product: { _id: string; title: string; price: number }) => (
//             <li key={product._id}>
//               <h3>{product.title}</h3>
//               <p>{product.price}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default CategoryPage;

// src/app/Categories/page.tsx
"use client"; // This is a client-side component

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
