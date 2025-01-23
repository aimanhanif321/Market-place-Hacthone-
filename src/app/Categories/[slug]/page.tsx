// pages/category/[slug].tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import { client } from '@/sanity/lib/client';
import { getCategories } from '@/sanity/lib/client';

const CategoryPage = ({ category, products }) => {
  return (
    <div>
      <h1>{category.title}</h1>
      <p>{category.description}</p>
      <div>
        <h2>Products in this Category:</h2>
        <ul>
          {products.map((product: { title: string; price: number }) => (
            <li key={product._id}>
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  // Fetch category and its products
  const queryCategory = `*[_type == 'category' && slug.current == $slug][0]{_id, title, description}`;
  const category = await client.fetch(queryCategory, { slug });

  const queryProducts = `*[_type == 'product' && category->slug.current == $slug]`;
  const products = await client.fetch(queryProducts, { slug });

  return {
    props: {
      category,
      products,
    },
  };
};

export default CategoryPage;
