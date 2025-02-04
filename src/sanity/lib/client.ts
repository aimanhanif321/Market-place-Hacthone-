// src/sanity/lib/client.ts
import { createClient } from 'next-sanity';
import dotenv from 'dotenv';
import { projectId, dataset, apiVersion } from '../env';
// Load environment variables
dotenv.config();

// Export the Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  // Make sure the env variable is set
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,  // Ensure this is correct
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,  // Set a default API version if not in env
  useCdn:false,  // Set to false if you're using server-side rendering (SSR)
  token:process.env.SANITY_API_TOKEN,  // Ensure you have a valid API token if required
});




export const getCategories = async () => {
  const query = '*[_type == "category"]{_id, title, slug}';
  const categories = await client.fetch(query);
  return categories;
};




