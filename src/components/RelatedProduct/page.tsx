// 'use client';

// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { getRelatedProducts } from '@/sanity/lib/data';

// interface RelatedProductsProps {
//   tags: string[];
//   currentProductId: string;
// }

// const RelatedProducts: React.FC<RelatedProductsProps> = ({ tags, currentProductId }) => {
//   const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchRelatedProducts = async () => {
//       try {
//         const related = await getRelatedProducts(tags, currentProductId);
//         setRelatedProducts(related);
//       } catch (error) {
//         console.error('Error fetching related products:', error);
//       }
//     };

//     fetchRelatedProducts();
//   }, [tags, currentProductId]);

//   return (
//     <div className="mt-16 px-4 lg:px-24">
//       <h2 className="text-2xl font-semibold mb-4">Related Items</h2>
//       {relatedProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {relatedProducts.map((product) => (
//             <div key={product._id} className="border p-4 rounded-md shadow-md">
//               <Image
//                 src={product.imageUrl}
//                 alt={product.title}
//                 width={250}
//                 height={300}
//                 className="w-full h-40 object-cover rounded-md"
//               />
//               <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
//               <p className="text-gray-500">${product.price}</p>
//               <Link href={`/ItemPage/${product._id}`}>
//                 <button className="mt-4 bg-blue-500 text-white p-2 rounded">View Details</button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No related items found.</p>
//       )}
//     </div>
//   );
// };

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getRelatedProductsById } from '@/sanity/lib/data'; // Correct path to your data.js or data.ts


interface RelatedProductsProps {
  currentProductId: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  currentProductId,
}) => {
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      console.log('Fetching related products for current product ID:', currentProductId);

      try {
        // Assuming `getRelatedProductsById` fetches products based on `_id`
        const related = await getRelatedProductsById(currentProductId);
        console.log('Related Products:', related);
        // Limit to 8 related products
        setRelatedProducts(related.slice(0, 8));
      } catch (error) {
        console.error('Error fetching related products:', error);
      }
    };

    fetchRelatedProducts();
  }, [currentProductId]);

  return (
    <div className="mt-16 px-4 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Related Items</h2>
      {relatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product._id} className="border p-4 rounded-md shadow-md">
              <Image
                src={product.imageUrl || '/placeholder.png'}
                alt={product.title || 'Product Image'}
                width={250}
                height={300}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
              <p className="text-gray-500">${product.price}</p>
              <Link href={`/ItemPage/${product._id}`}>
                <button className="mt-4 bg-[#B88E2F] text-white p-2 rounded">
                  View Details
                </button>
              </Link>
              <button
            
              className=" ml-8 mt-4  bg-[#B88E2F] mb-4 text-white p-2 rounded"
            >
              Add To Cart
            </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No related items found.</p>
      )}

    </div>
  );
};

export default RelatedProducts;
