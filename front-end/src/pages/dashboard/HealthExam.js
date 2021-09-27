import { Icon } from '@iconify/react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
// material
import { Container, Box, Typography, Grid, Card, Stack, TableContainer, TextField, Table, TableBody, TableRow, TableHead, TableCell, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_HEALTH } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';

// ----------------------------------------------------------------------

export default function HealthExam() {
  const { themeStretch } = useSettings();
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
  return(
    <Page title="User: Account Settings | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}>
      	<FormikProvider value={formik}>
		      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
		        <Grid container spacing={3}>
		          <Grid item xs={12} md={12}>
		            <Card sx={{ p: 3 }}>
		              <Typography variant="h2" align="left" paragraph>
		                Health Examination
		              </Typography>
		              <Stack spacing={3}>
		                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
										<Button
											variant="contained"
											component={Link}
											to="/health/form_o/form_o_doc"
											sx={{mb:2}}
											startIcon={<Icon icon={plusFill} />}
										>
											Add Form O
										</Button>
		                </Box>
		              </Stack>

		              <TableContainer sx={{ minWidth: 800, mt:5 }}>
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
												<TableRow>
													<TableCell align="left">Priodic Test</TableCell>
													<TableCell align="left">xx/xx/xxxx</TableCell>
													<TableCell align="left">xx/xx/xxxx</TableCell>
													<TableCell align="left">zzzzzzzz</TableCell>
													<TableCell align="left">View Form O</TableCell>
													<TableCell align="left">View</TableCell>
												</TableRow>
												<TableRow>
													<TableCell align="left">Priodic Test</TableCell>
													<TableCell align="left">xx/xx/xxxx</TableCell>
													<TableCell align="left">xx/xx/xxxx</TableCell>
													<TableCell align="left">zzzzzzzz</TableCell>
													<TableCell align="left">View Form O</TableCell>
													<TableCell align="left">View</TableCell>
												</TableRow>
												<TableRow>
													<TableCell align="left">Priodic Test</TableCell>
													<TableCell align="left">xx/xx/xxxx</TableCell>
													<TableCell align="left">xx/xx/xxxx</TableCell>
													<TableCell align="left">zzzzzzzz</TableCell>
													<TableCell align="left">View Form O</TableCell>
													<TableCell align="left">View</TableCell>
												</TableRow>
		                  </TableBody>
		                </Table>
		              </TableContainer>
		            </Card>
		          </Grid>
		        </Grid>
		      </Form>
		    </FormikProvider>
      </Container>
    </Page>
  
  );
    
}
