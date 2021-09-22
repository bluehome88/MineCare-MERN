import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { LoadingButton } from '@mui/lab';
import { Box, Card, Grid, Stack, TextField } from '@mui/material';
// utils
import fakeRequest from '../../../utils/fakeRequest';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';

// ----------------------------------------------------------------------

UserNewForm.propTypes = {
  isEdit: PropTypes.bool,
  currentEmployee: PropTypes.object
};

export default function UserNewForm({ isEdit, currentEmployee }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const NewUserSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email(),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    state: Yup.string().required('State is required'),
    birthday: Yup.string().required('Date of Birth is required'),
    city: Yup.string().required('City is required'),
    role: Yup.string().required('Role Number is required'),
    postal: Yup.string().required('Postal is required'),
    gender: Yup.string().required('Gender is required'),
    department: Yup.string().required('Department is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: currentEmployee?.name || '',
      email: currentEmployee?.email || '',
      phoneNumber: currentEmployee?.phoneNumber || '',
      address: currentEmployee?.address || '',
      state: currentEmployee?.state || '',
      city: currentEmployee?.city || '',
      postal: currentEmployee?.postal || '',
      gender: currentEmployee?.gender || '',
      role: currentEmployee?.role || '',
      department: currentEmployee?.department || '',
      birthday: currentEmployee?.birthday || ''
    },
    validationSchema: NewUserSchema,
    onSubmit: async (values, { setSubmitting, resetForm, setErrors }) => {
      try {
        await fakeRequest(500);
        resetForm();
        setSubmitting(false);
        enqueueSnackbar(!isEdit ? 'Create success' : 'Update success', { variant: 'success' });
        navigate(PATH_DASHBOARD.employee.list);
      } catch (error) {
        console.error(error);
        setSubmitting(false);
        setErrors(error);
      }
    }
  });

  const { errors, values, touched, handleSubmit, isSubmitting, setFieldValue, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    {...getFieldProps('name')}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                  <TextField
                    fullWidth
                    label="Phone Number"
                    {...getFieldProps('phoneNumber')}
                    error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                  />
                </Stack>
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Date of Birth"
                    {...getFieldProps('birthday')}
                    error={Boolean(touched.birthday && errors.birthday)}
                    helperText={touched.birthday && errors.birthday}
                  />
                  <TextField
                    fullWidth
                    label="Gender"
                    {...getFieldProps('gender')}
                    error={Boolean(touched.gender && errors.gender)}
                    helperText={touched.gender && errors.gender}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Address"
                    {...getFieldProps('address')}
                    error={Boolean(touched.address && errors.address)}
                    helperText={touched.address && errors.address}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="City"
                    {...getFieldProps('city')}
                    error={Boolean(touched.city && errors.city)}
                    helperText={touched.city && errors.city}
                  />
                  <TextField
                    fullWidth
                    label="State"
                    {...getFieldProps('state')}
                    error={Boolean(touched.state && errors.state)}
                    helperText={touched.state && errors.state}
                  />
                  <TextField
                    fullWidth
                    label="Postal"
                    {...getFieldProps('postal')}
                    error={Boolean(touched.postal && errors.postal)}
                    helperText={touched.postal && errors.postal}
                  />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Department"
                    {...getFieldProps('department')}
                    error={Boolean(touched.department && errors.department)}
                    helperText={touched.department && errors.department}
                  />
                  <TextField
                    fullWidth
                    label="Supervisor"
                    {...getFieldProps('supervisor')}
                    error={Boolean(touched.supervisor && errors.supervisor)}
                    helperText={touched.supervisor && errors.supervisor}
                  />
                </Stack>

                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                    {!isEdit ? 'Create User' : 'Save Changes'}
                  </LoadingButton>
                </Box>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}
