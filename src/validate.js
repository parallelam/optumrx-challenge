import * as yup from 'yup';

export const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .min(3, 'Is your first name really less than 3 characters long?')
    .required('First Name is required'),
  lastName: yup
    .string('Enter your last name')
    .min(3, 'Is your last name really less than 3 characters long?')
    .required('Last Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .min(5, 'I do not believe your email is less than 5 characters')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
