import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import { validationSchema } from './validate';
import { Button, TextField, makeStyles, Divider } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const SignupForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: { firstName: '', lastName: '', email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        alert(JSON.stringify(values, null, 4));
        const response = await axios.post(`${process.env.REACT_APP_SIGNUP_POST_URI}`, values);
        return response;
      } catch (error) {
        console.error(`Error Experienced:\n${error}`);
      }
    },
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form className={classes.root} onSubmit={formik.handleSubmit} autoComplete='off'>
        <TextField
          id='outlined-basic'
          variant='outlined'
          name='firstName'
          label='First Name'
          placeholder='Lorem'
          type='firstName'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          id='outlined-basic'
          variant='outlined'
          name='lastName'
          label='Last Name'
          placeholder='Ipsum'
          type='lastName'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          id='outlined-basic'
          variant='outlined'
          name='email'
          label='Email'
          placeholder='loremipsum@optumrx.com'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id='outlined-basic'
          variant='outlined'
          name='password'
          label='Password'
          placeholder='foobar'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Divider />
        <Button color='primary' variant='contained' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
