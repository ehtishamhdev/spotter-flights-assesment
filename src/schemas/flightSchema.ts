import * as Yup from "yup";

export const validationSchema = Yup.object({
    from: Yup.string().required("Departure location is required"),
    to: Yup.string()
      .required("Destination location is required")
      .notOneOf([Yup.ref("from")], "From and To locations cannot be the same"),
    departure: Yup.string().required("Departure date is required"),
    returnDate: Yup.string().test(
      "is-after-departure",
      "Return date must be after departure date",
      function (value) {
        return !value || new Date(value) > new Date(this.parent.departure);
      }
    ),
  });
