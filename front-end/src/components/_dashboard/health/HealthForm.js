import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import searchFill from '@iconify/icons-eva/search-fill';
import { Icon } from '@iconify/react';
import { useCallback } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
// material
import { Box, Typography, Grid, Card, Stack, TableContainer, TextField, Table, TableBody, TableRow, TableHead, TableCell, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// ----------------------------------------------------------------------

export default function HealthForm() {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const { user, updateProfile } = useAuth();

  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      displayName: user.displayName || '',
      email: user.email,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      country: user.country,
      address: user.address,
      state: user.state,
      city: user.city,
      zipCode: user.zipCode,
      about: user.about,
      isPublic: user.isPublic
    },

    validationSchema: UpdateUserSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await updateProfile({ ...values });
        enqueueSnackbar('Update success', { variant: 'success' });
        if (isMountedRef.current) {
          setSubmitting(false);
        }
      } catch (error) {
        if (isMountedRef.current) {
          setErrors({ afterSubmit: error.code });
          setSubmitting(false);
        }
      }
    }
  });

  const { values, errors, touched, isSubmitting, handleSubmit, getFieldProps, setFieldValue } = formik;

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setFieldValue('photoURL', {
          ...file,
          preview: URL.createObjectURL(file)
        });
      }
    },
    [setFieldValue]
  );

  return (
    <FormikProvider value={formik}>
      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h2" align="center" paragraph>
                Search Employee
              </Typography>
              <Stack spacing={3}>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
                  <TextField
                    fullWidth
                    label="Enter employee name or employee id"
                  />
                </Stack>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                  <LoadingButton startIcon={<Icon icon={searchFill} />} type="submit" variant="contained" loading={isSubmitting}>
                    Search
                  </LoadingButton>
                </Box>
              </Stack>

              <TableContainer sx={{ minWidth: 800, mt:5 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Employee Id</TableCell>
                      <TableCell align="left">Department</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                        <TableRow>
                          <TableCell align="left">"Navnit Bhaktwarti"</TableCell>
                          <TableCell align="left">"121212121"</TableCell>
                          <TableCell align="left">"Drilling"</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">"Navnit Bhaktwarti"</TableCell>
                          <TableCell align="left">"89898989"</TableCell>
                          <TableCell align="left">"Drilling"</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">"Navnit Bhaktwarti"</TableCell>
                          <TableCell align="left">"454545454"</TableCell>
                          <TableCell align="left">"Drilling"</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell align="left">"Navnit Bhaktwarti"</TableCell>
                          <TableCell align="left">"54465465465"</TableCell>
                          <TableCell align="left">"Drilling"</TableCell>
                        </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>

    
  );
}
