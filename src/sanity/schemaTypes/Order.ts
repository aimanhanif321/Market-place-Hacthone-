export default {
    name: "order",
    type: "document",
    title: "Order",
    fields: [
      {
        name: "customer",
        type: "object",
        title: "Customer Details",
        fields: [
          { name: "firstName", type: "string", title: "First Name" },
          { name: "lastName", type: "string", title: "Last Name" },
          { name: "email", type: "string", title: "Email" },
          { name: "phone", type: "string", title: "Phone" },
          { name: "address", type: "string", title: "Address" },
          { name: "city", type: "string", title: "City" },
          { name: "province", type: "string", title: "Province/State" },
          { name: "zip", type: "string", title: "Zip Code" },
         
        ],
      },
      {
        name: "items",
        type: "array",
        of: [
          {
            type: "object",
            fields: [
              { name: "name", type: "string", title: "Product Name" },
              { name: "price", type: "number", title: "Price" },
              { name: "quantity", type: "number", title: "Quantity" },
              { name: "image", type: "image", title: "Product Image" },
            ],
          },
        ],
        title: "Cart Items",
      },
      {
        name: "totalAmount",
        type: "number",
        title: "Total Amount",
      },
      {
        name: "orderDate",
        type: "datetime",
        title: "Order Date",
      },
    ],
  };
  