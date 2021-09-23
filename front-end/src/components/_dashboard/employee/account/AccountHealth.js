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

export default function AccountHealth() {
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
            <Card sx={{ marginTop: 3, p:3 }}>
              <Typography variant="overline" sx={{ m: 1, mb: 3, display: 'block', color: 'text.secondary' }}>
                Health History
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
                      <TableCell align="left">Disease</TableCell>
                      <TableCell align="left">Detected</TableCell>
                      <TableCell align="left">Still Suffering</TableCell>
                      <TableCell align="left">Medication</TableCell>
                      <TableCell align="left">Doctor</TableCell>
                      <TableCell align="left">Prescription</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                        <TableRow
                        >
                          <TableCell align="left">"Hearing Issue"</TableCell>
                          <TableCell align="left">"3 year ago"</TableCell>
                          <TableCell align="left">"Yes"</TableCell>
                          <TableCell align="left">"Yes"</TableCell>
                          <TableCell align="left">"ZZZZ"</TableCell>
                          <TableCell align="left">"View"</TableCell>
                        </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
            <Card sx={{ marginTop: 3, p:3 }}>
              <Typography variant="overline" sx={{ m:1, mb:3, display: 'block', color: 'text.secondary' }}>
                Health Examination
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
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Revisit Date</TableCell>
                        <TableCell align="left">Doctor</TableCell>
                        <TableCell align="left">Result</TableCell>
                        <TableCell align="left">Notes</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                          <TableRow
                          >
                            <TableCell align="left">"Priodic Test"</TableCell>
                            <TableCell align="left">"xx/xx/xxx"</TableCell>
                            <TableCell align="left">"xx/xx/xxx"</TableCell>
                            <TableCell align="left">"zzzzzzz"</TableCell>
                            <TableCell align="left">"View Form O"</TableCell>
                            <TableCell align="left">"View"</TableCell>
                          </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
            </Card>
          
          </Grid>
        </Grid>
  );
}
