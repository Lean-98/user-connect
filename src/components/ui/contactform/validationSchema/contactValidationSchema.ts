import * as yup from 'yup';

export const contactValidationSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, 'The name cannot be more than 50 characters')
    .required('Name is required!'),
  email: yup.string().email().required('E-mail is required!'),
  message: yup
    .string()
    .min(20, 'The Message must be at least 20 characters')
    .required('Message is required!'),
});
