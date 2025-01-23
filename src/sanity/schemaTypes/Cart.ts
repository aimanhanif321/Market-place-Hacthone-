export default {
    name: "cart",
    title: "Cart",
    type: "document",
    fields: [
      {
        name: "userId",
        title: "User ID",
        type: "string",
      },
      {
        name: "items",
        title: "Items",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "productId", title: "Product ID", type: "reference", to: [{ type: "product" }] },
              { name: "quantity", title: "Quantity", type: "number" },
            ],
          },
        ],
      },
      {
        name: "totalAmount",
        title: "Total Amount",
        type: "number",
      },
    ],
  };
  