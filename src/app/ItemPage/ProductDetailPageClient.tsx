// import { useRouter } from 'next/router';  // Import useRouter for routing
// import { client } from '@/sanity/lib/client';  // Import the Sanity client
// import { useEffect, useState } from 'react';

// const ProductDetailPageClient = () => {
//   const router = useRouter();
//   const { slug } = router.query;  // Get the product ID (slug) from the URL

//   const [product, setProduct] = useState<any>(null);

//   useEffect(() => {
//     const fetchProductDetail = async () => {
//       if (slug) {
//         const query = await client.fetch(
//             `*[_type == "product"]{
//                 _id,
//                 title,
//                 description
//                 "imageUrl": productImage.asset->url,
//                 price,
//                 tags,
//                 discountPercentage,
//                 isNew
//               }`,
//           { slug } // Pass the slug as a query parameter
//         );
//         setProduct(query); // Storing the product details in state
//       }
//     };

//     fetchProductDetail(); // Call to fetch the product details
//   }, [slug]); // Re-run the effect when slug changes

//   if (!product) return <p>Loading...</p>;

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-3xl font-bold">{product.name}</h1>
//       <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mt-4" />
//       <p className="text-gray-600 mt-4">{product.description}</p>
//       <p className="text-lg font-semibold mt-2">${product.price}</p>
//     </div>
//   );
// };

// export default ProductDetailPageClient;
