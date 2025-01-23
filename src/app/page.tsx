
import Grido from "@/components/Grido/page";
import Hero from "@/components/Hero/page"
import SecPart from "@/components/SecPart/page";
import ProductList from "@/app/(addtocart)/ProductList/page";
import { client } from "@/sanity/lib/client";

import SearchBar from "@/components/SearchBAr/page";








export default async function Home() {
  const products = await client.fetch(`*[_type == "product"]`)


  

  return (
    
   <div>
    
    <SearchBar/>
    
     <Hero/>
    <SecPart/>
    
    <ProductList products={products} />  {/* Render ProductList Component */}
    <Grido/>
    
  
     </div>
     
  );
}
