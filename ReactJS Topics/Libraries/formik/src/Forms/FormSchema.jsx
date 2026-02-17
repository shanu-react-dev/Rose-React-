import * as mySchema from "yup";

export let FormSchema = mySchema.object({
  username: mySchema
    .string()
    .min(3, "At least 3 characters required")
    .max(20, "Max 20 characters allowed")
    .required(),
  password: mySchema
    .string()
    .min(8, "Atleast 8 characters required")
    .max(15, "Max 15 characters allowed")
    .required(),
});
