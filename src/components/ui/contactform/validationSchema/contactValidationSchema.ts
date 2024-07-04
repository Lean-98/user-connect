import * as yup from 'yup';

export const contactValidationSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, 'El nombre no puede tener más de 50 caracteres')
    .required('¡El nombre es obligatorio!'),
  email: yup
    .string()
    .email('¡Debe ser un correo electrónico válido!')
    .required('¡Debe ser un correo electrónico válido!'),
  message: yup
    .string()
    .min(20, 'El mensaje debe tener al menos 20 caracteres')
    .required('¡El mensaje es obligatorio!'),
});
