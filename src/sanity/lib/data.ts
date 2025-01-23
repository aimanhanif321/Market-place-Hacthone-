import { client } from "@/sanity/lib/client";

import { CartItem} from "@/app/(addtocart)/redux/types";

interface OrderDetails {
  orderId: string;
  status: string;
  customerInfo: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    province: string;
    zip: string;
    phone: string;
    email: string;
  };
  cartItems: CartItem[];
  totalAmount: number;
  subtotal: number;
  orderDate: string;
}

export const getProductById = async (id: string) => {
  try {
    const queryProduct = `
      *[_type == 'product' && _id == $id][0]{
        _id,
        description,
        title,
        discountPercentage,
        tags,
        price,
        isNew,
        "imageUrl": productImage.asset->url
      }
    `;
    const product = await client.fetch(queryProduct, { id });
    return product; // Returns null if no product is found
  } catch (error) {
    console.log('Error fetching product:', error);
    return null; // Graceful handling of errors
  }
};


       
       


type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  tags: string[];
  isNew: boolean;
  imageUrl: string;
  quantity: number;
};

export type Cart = {
  items: Product[]; // Array of products in the cart
  totalAmount: number; // Total price of all products in the cart
};



export const getCategories = async () => {
  const query = '*[_type == "category"]{_id, title, slug}';
  const categories = await client.fetch(query);
  return categories;
};

export const getProductsByCategory = async (categoryId: string | null) => {
  const query = categoryId
    ? `*[_type == "product" && category._ref == $categoryId]{_id, title, price, "imageUrl": productImage.asset->url}`
    : `*[_type == "product"]{_id, title, price, "imageUrl": productImage.asset->url}`;
  const products = await client.fetch(query, { categoryId });
  return products;
};





export const getRelatedProductsById = async (currentProductId: string) => {
  const query = `*[_type == "product" && _id != "${currentProductId}"]{
    _id,
    title,
    price,
    "imageUrl": productImage.asset->url
  }`;

  const relatedProducts = await client.fetch(query);
  return relatedProducts;
};




export const getProductsBySearchTerm = async (searchTerm: string) => {
  try {
    const query = `
      *[_type == 'product' && (title match $searchTerm || tags match $searchTerm)] {
        _id,
        title,
        price,
        tags,
        "imageUrl": productImage.asset->url
      }
    `;
    const params = {
      searchTerm: `*${searchTerm.toLowerCase()}*` // Perform case-insensitive matching
    };
    const products = await client.fetch(query, params);
    return products;
  } catch (error) {
    console.error('Error fetching products by search term:', error);
    return [];
  }
};





interface BillingDetails {
  firstName: string;
  lastName: string;
  companyName?: string;
  country?: string;
  address: string;
  city: string;
  province: string;
  zip: string;
  phone: string;
  email: string;
  additionalInfo?: string;
}

// export const saveOrderToSanity = async (
//   billingDetails: BillingDetails,
//   cartItems: CartItem[],
//   totalAmount: number
// ) => {
//   try {
//     const orderData = {
//       _type: "order",
//       customer: billingDetails,
//       items: cartItems.map((item) => ({
//         name: item.name,
//         quantity: item.quantity,
//         price: item.price,
//       })),
//       totalAmount,
//       orderDate: new Date().toISOString(),
//     };

//     const savedOrder = await client.create(orderData);
//     return savedOrder;
//   } catch (error) {
//     console.error("Error saving order to Sanity:", error);
//     throw new Error("Failed to save order.");
//   }
// };


// Save order to Sanity
const saveOrderToSanity = async (orderData: any) => {
  try {
    const result = await client.create({
      _type: "order",
      customerInfo: orderData.customerInfo,
      cartItems: orderData.cartItems,
      totalAmount: orderData.totalAmount,
      subtotal: orderData.subtotal,
      orderDate: new Date().toISOString(),
      receiptGenerated: orderData.receiptGenerated,
    });
    console.log("Order saved successfully to Sanity:", result);
  } catch (error) {
    console.error("Error saving order to Sanity:", error);
  }
};

export { saveOrderToSanity };


