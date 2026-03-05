import * as yup from "yup";
const formSchema = yup.object({
  userName: yup
    .string()
    .min(3, "Minimum 3 characters required!")
    .max(30, "Max 30 characters allowed!")
    .required(),
  password: yup
    .string()
    .min(8, "Minimum 8 characters required!")
    .max(16, "Max 16 characters allowed!")
    .required(),
  email: yup.string().email().required(),
  contact: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
    .required("A phone number is required"),
});

export default formSchema;
