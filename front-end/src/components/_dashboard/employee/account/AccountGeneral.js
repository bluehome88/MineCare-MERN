import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import { useCallback } from 'react';
import { useFormik } from 'formik';
// material
import { Typography, Grid, Card, Stack, TableContainer, TextField, Table, TableBody, TableRow, TableHead, TableCell, Button } from '@mui/material';
// hooks
import useAuth from '../../../../hooks/useAuth';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
// ----------------------------------------------------------------------

export default function AccountGeneral() {
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
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card sx={{ p: 3 }}>
              <Stack spacing={{ xs: 2, md: 3 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="Name" {...getFieldProps('displayName')} />
                  <TextField fullWidth label="Gender" {...getFieldProps('displayName')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth disabled label="Email Address" {...getFieldProps('email')} />
                  <TextField fullWidth label="Phone Number" {...getFieldProps('phoneNumber')} />
                  <TextField fullWidth label="Date of Birth" {...getFieldProps('address')} />
                </Stack>

                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                  <TextField fullWidth label="Address" {...getFieldProps('address')} />
                  <TextField fullWidth label="City" {...getFieldProps('city')} />
                  <TextField fullWidth label="State" {...getFieldProps('state')} />
                  <TextField fullWidth label="Postal" {...getFieldProps('zipCode')} />
                </Stack>

              </Stack>

            </Card>
            <Card sx={{ marginTop: 3, p:3 }}>
              <Typography variant="overline" sx={{ m: 1, mb: 3, display: 'block', color: 'text.secondary' }}>
                Parent Details
                <Button
                  variant="contained"
                  startIcon={<Icon icon={plusFill} />}
                  sx={{ float: 'right'}}
                >
                  Add New
                </Button>
              </Typography>
              
              <TableContainer sx={{ minWidth: 800 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Age</TableCell>
                      <TableCell align="left">Occupation</TableCell>
                      <TableCell align="left">Relationship</TableCell>
                      <TableCell align="left">Diabitic</TableCell>
                      <TableCell align="left">BP</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                        <TableRow
                        >
                          <TableCell align="left">"Mr. Bhaktwarti"</TableCell>
                          <TableCell align="left">"65yrs"</TableCell>
                          <TableCell align="left">"Farmer"</TableCell>
                          <TableCell align="left">"Farmer"</TableCell>
                          <TableCell align="left">"Yes"</TableCell>
                          <TableCell align="left">"Yes"</TableCell>
                        </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
            <Card sx={{ marginTop: 3, p:3 }}>
              <Typography variant="overline" sx={{ m:1, mb:3, display: 'block', color: 'text.secondary' }}>
                Work Experience
                <Button
                  variant="contained"
                  startIcon={<Icon icon={plusFill} />}
                  sx={{ float: 'right'}}
                >
                  Add New
                </Button>
              </Typography>
                <TableContainer sx={{ minWidth: 800 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Department</TableCell>
                        <TableCell align="left">Designation</TableCell>
                        <TableCell align="left">Supervisor</TableCell>
                        <TableCell align="left">Start Date</TableCell>
                        <TableCell align="left">End Date</TableCell>
                        <TableCell align="left">Reason</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                          <TableRow
                          >
                            <TableCell align="left">"Drilling"</TableCell>
                            <TableCell align="left">"xxxxx"</TableCell>
                            <TableCell align="left">"xxxxx"</TableCell>
                            <TableCell align="left">"xxxxx"</TableCell>
                            <TableCell align="left">"Current"</TableCell>
                            <TableCell align="left">"xxxxx"</TableCell>
                          </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
            </Card>
          
          </Grid>
        </Grid>
  );
}
