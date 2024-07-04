'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './contactform.module.css';
import { contactValidationSchema } from './validationSchema/contactValidationSchema';

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactValidationSchema) });

  const onSubmit = async (data: any): Promise<void> => {
    console.log({ data });
    toast.success(
      `🎉 ¡Gracias, ${data.name}! Tu mensaje ha sido enviado satisfactoriamente. Nos pondremos en contacto contigo pronto.`,
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      },
    );
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        role="form"
      >
        <input
          className={`${styles.input} ${errors.name ? styles.error : ''}`}
          type="text"
          placeholder="Nombre"
          {...register('name')}
        />
        {errors.name && (
          <span className={styles.errorText}>{errors.name.message}</span>
        )}

        <input
          className={`${styles.input}  ${errors.email ? styles.error : ''}`}
          type="email"
          placeholder="correo@hosting.com"
          {...register('email')}
        />
        {errors.email && (
          <span className={styles.errorText}>{errors.email.message}</span>
        )}

        <textarea
          className={`${styles.textarea} ${errors.message ? styles.error : ''}`}
          rows={7}
          placeholder="Mensaje"
          {...register('message')}
        ></textarea>
        {errors.message && (
          <span className={styles.errorText}>{errors.message.message}</span>
        )}

        <button className={styles.button}>
          <div className={styles.svgWrapper1}>
            <div className={styles.svgWrapper}>
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <span>Enviar</span>
        </button>
      </form>
      <ToastContainer />
    </>
  );
};
