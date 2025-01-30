import Grido from "@/components/Grido/page";
import Hero from "@/components/Hero/page";
import SecPart from "@/components/SecPart/page";
import ProductList from "@/app/ProductList/page"; // Import the updated ProductList component
import SearchBar from "@/components/SearchBAr/page";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default async function Home() {
  return (
    <div>
      <ToastContainer/>
      <SearchBar />
      <Hero />
      <SecPart />
      
      {/* Render ProductList Component */}
      <ProductList />  {/* No need to pass products as a prop anymore, it's handled inside the ProductList component */}

      <Grido />
    </div>
  );
}



// import Grido from "@/components/Grido/page";
// import Hero from "@/components/Hero/page";
// import SecPart from "@/components/SecPart/page";
// import SearchBar from "@/components/SearchBAr/page";
// import ProductList from "@/app/ProductList/page"; // Import the ProductList component
// import { client } from "@/sanity/lib/client";
// import { Product } from "@/app/ProductList/page"; // Import the Product type

// export default async function Home() {
//   // Fetch the products on the server
//   const query = `*[_type == "product"]{
//     _id,
//     title,
//     "imageUrl": productImage.asset->url,
//     price,
//     tags,
//     discountPercentage,
//     isNew
//   }`; // Your Sanity query
//   const products: Product[] = await client.fetch(query);

//   return (
//     <div>
//       <SearchBar />
//       <Hero />
//       <SecPart />

//       {/* Pass the fetched products to the ProductList component */}
//       <ProductList products={products} />

//       <Grido />
//     </div>
//   );
// }
