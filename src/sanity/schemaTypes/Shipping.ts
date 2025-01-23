export default {
    name: "shipping",
    title: "Shipping",
    type: "document",
    fields: [
      {
        name: "orderId",
        title: "Order ID",
        type: "string",
      },
      {
        name: "shippingAddress",
        title: "Shipping Address",
        type: "object",
        fields: [
          { name: "addressLine1", title: "Address Line 1", type: "string" },
          { name: "addressLine2", title: "Address Line 2", type: "string" },
          { name: "city", title: "City", type: "string" },
          { name: "state", title: "State", type: "string" },
          { name: "postalCode", title: "Postal Code", type: "string" },
          { name: "country", title: "Country", type: "string" },
        ],
      },
      {
        name: "shippingMethod",
        title: "Shipping Method",
        type: "string", // Example: "Standard Shipping", "Express Shipping"
      },
      {
        name: "shippingCost",
        title: "Shipping Cost",
        type: "number",
      },
    ],
  };
  