import { client } from "@/sanity/lib/client";
import { Order } from '../../app/(addtocart)/redux/Features/OrderSlice'; // Ensure you're importing the Order typenpm 
import { CartItem} from "@/app/(addtocart)/redux/types";
// description function

export function truncateDescription(description: string, maxLength: number = 100): string {
  if (description.length > maxLength) {
    return description.slice(0, maxLength) + '...';
  }
  return description;
}

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




export const saveOrderToSanity = async (orderData: Order): Promise<Order & { _id: string }> => {
  try {
    // Construct the document with the correct type and data
    const document = {
      _type: "order", // Match this with the Sanity schema
      ...orderData,
    };

    // Save the document to Sanity and get the response
    const savedOrder = await client.create(document);

    // Map the response to the expected Order type, including _id
    const order: Order & { _id: string } = {
      _id: savedOrder._id, // Assign the returned _id
      billingDetails: savedOrder.billingDetails,
      CartItems: savedOrder.CartItems,
      orderDetails: savedOrder.orderDetails,
      orderPlaced: savedOrder.orderPlaced,
    };

    return order;
  } catch (error) {
    console.error("Error saving order to Sanity:", error);
    throw error; // Rethrow the error to handle it in the caller
  }
};

