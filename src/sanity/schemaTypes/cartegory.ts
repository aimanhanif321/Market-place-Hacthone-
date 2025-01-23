import { defineType } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
      validation: (rule) => rule.required(), // Category ka naam zaruri hai
    },
    {
      name: "description",
      title: "Description",
      type: "text", // Category ki chhoti si detail
    },
  ],
});
