import { type SchemaTypeDefinition } from 'sanity'
import { product } from './Product'
import { category } from './cartegory'
import Cart from './Cart'
import Shipping from './Shipping'

import user from './Order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,user , category , Cart, Shipping],
}
