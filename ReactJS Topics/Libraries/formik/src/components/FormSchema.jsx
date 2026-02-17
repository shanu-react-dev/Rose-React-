import * as yup from "yup";

export let validationObj = yup.object({
  username: yup
    .string()
    .min(3, "At Least 3 characters required")
    .max(30, "Max 30 characters allowed"),
  password: yup
    .string()
    .min(8, "At Least 8 characters required")
    .max(15, "Max 15 characters allowed"),
});
