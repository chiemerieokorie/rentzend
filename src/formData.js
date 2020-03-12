import * as Yup from "yup";
const phoneNumberRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

 export const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .max(225, "First name must be less than 225 characters")
        .required("Please enter your first name"),

    lastName: Yup.string()
        .max(225, "Last name must be less than 225 characters")
        .required("Please enter your last name"),

    email: Yup.string()
        .email("Please enter a valid email")
        .max(225, "Last name must be less than 225 characters")
        .required("Please enter your email"),

    zipCode: Yup.number()
        .required()
        .positive()
        .integer()
        .required("Please enter your Zip code"),

    suite: Yup.string()
        .required("Please enter your suite"),
    streetAddress: Yup.string()
        .required("Please enter your street address"),
    city: Yup.string()
        .required("Please enter your city"),
    state: Yup.string()
        .required("Please enter your state"),
    phoneNumber: Yup.string()
        .matches(phoneNumberRegExp, "Please enter a valid phone number")
        .required("Please enter your phone number"),
});

export const formFields = [

   {
      name: "firstName",
      label: "First Name",
      placeholder: "Jane",
      type: "text",
      sm: 6
   },
   {
      name: "lastName",
      label: "Last Name",
      placeholder: "Doe",
      type: "text",
      sm: 6
   },
   {
      name: "email",
      label: "Email",
      placeholder: "janedoe@mail.com",
      type: "email",
      sm: 12
   },
   {
      name: "zipCode",
      label: "Zip Code",
      placeholder: "90001",
      type: "text",
      sm: 6
   },
   {
      name: "suite",
      label: "Suite Number",
      placeholder: "Apartment 5",
      type: "text",
      sm: 6
   },
   {
      name: "streetAddress",
      label: "Street Address",
      placeholder: "12345 Main Street",
      type: "text",
      sm: 12
   },
   {
      name: "city",
      label: "City",
      placeholder: "Los Angeles",
      type: "text",
      sm: 6
   },
   {
      name: "state",
      label: "State",
      placeholder: "California",
      type: "text",
      sm: 6
   },
   {
      name: "phoneNumber",
      label: "Phone Number",
      placeholder: "(123) 456-7899",
      type: "text",
      sm: 12
   }

];

export const formInitialValues = {
   firstName: "",
   lastName: "",
   email: "",
   zipCode: "",
   suite: "",
   streetAddress: "",
   city: "",
   state: "",
   phoneNumber: "",
};

