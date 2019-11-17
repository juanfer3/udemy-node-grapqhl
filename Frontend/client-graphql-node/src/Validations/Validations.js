import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(1, "Too Short!")
      .max(255, "Too Long!")
      .required("This field is required"),
    last_name: Yup.string()
      .min(1, "Too Short!")
      .max(255, "Too Long!")
      .required("This field is required"),
    age: Yup.number('The age must be only numbers')
      .required("This field is required"),
    /*
    email: Yup.string()
      .email("Must be an email address")
      .max(255, "Too Long!")
      .required("This field is required")
    /* */
});


export default ValidationSchema;