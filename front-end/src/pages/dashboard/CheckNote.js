import { useState } from 'react';
import { Icon } from '@iconify/react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
import { Link } from 'react-router-dom';
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

export default function CheckNote() {
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
	const [value, setValue] = useState('Controlled');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return(
    <Page title="User: Account Settings | Minimal-UI">
      <Container maxWidth={themeStretch ? false : 'lg'}>

      	<FormikProvider value={formik}>
		      <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
		        <Grid container spacing={3}>
		          <Grid item xs={12} md={12}>
		            <Card sx={{ p: 3 }}>
		              <Stack spacing={3}>
										<Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }}>
											<TextField
												fullWidth
												id="outlined-multiline-static"
												label="Doctor`s Note"
												multiline
												rows={7}
												defaultValue=""
											/>
										</Stack>
										<Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 3, sm: 2 }} sx={{mt:5}}>
											<TextField
												label="Revisit Date"
											/>
												<Button
													variant="contained"
													component={Link}
													to="/health/checkup/formp"
													sx={{mb:2}}
													style={{marginLeft:"auto"}}
													startIcon={<Icon icon={plusFill} />}
												>
													Add Form p
												</Button>
										</Stack>
										<hr/>
									</Stack>
									<LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={{float:"right", mt:2, ml:2}}>
										SAVE
									</LoadingButton>
									<Button
										variant="contained"
										sx={{ mt:2, float: 'right'}}
									>
										CANCEL
									</Button>
									
								</Card>
		          </Grid>
		        </Grid>
		      </Form>
		    </FormikProvider>
      </Container>
    </Page>
  
  );
    
}
