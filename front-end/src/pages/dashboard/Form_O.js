import { Icon } from '@iconify/react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import searchFill from '@iconify/icons-eva/search-fill';
// material
import { Container, Box, Typography, Grid, Card, Stack, TableContainer, TextField, Table, TableBody, TableRow, TableHead, TableCell, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_HEALTH } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
import { fData } from '../../utils/formatNumber';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import useAuth from '../../hooks/useAuth';
import useIsMountedRef from '../../hooks/useIsMountedRef';
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../components/animate';
import { UploadAvatar } from '../../components/upload';

// ----------------------------------------------------------------------

export default function FormO() {
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
        setFieldValue('avatarUrl', {
          ...file,
          preview: URL.createObjectURL(file)
        });
      }
    },
    [setFieldValue]
  );
  return(
    <Page title="Form O | MineCare">
      <Container maxWidth={themeStretch ? false : 'lg'}>

				<FormikProvider value={formik}>
					<Form noValidate autoComplete="off" onSubmit={handleSubmit}>
						<Grid container spacing={3}>
							<Grid item xs={12} md={12}>
								<Card sx={{ p: 3, textAlign:'center'}}>
									<Typography variant="h2" sx={{ mb: 2, textAlign:'center' }}>
										Medical Examination Format
									</Typography>
									<Typography variant="h4" sx={{ mb: 1, textAlign:'center' }}>
										(FORM - O)
									</Typography>
									<Typography sx={{ mb: 1, mx: 'auto' }}>
										(See rule 29F (2) and 29L)
									</Typography>
									<Typography sx={{ mb: 10, mx: 'auto' }}>
										Report of medical examination under rule 29B in accordance with Form P1 of the Mines Rules 1955
									</Typography>
									<MotionInView variants={varFadeInUp} sx={{textAlign:"left", mb:4 }}>
										<Typography sx={{ mb: 2, mx: 'auto', lineHeight:3}}>
											Certificate No<TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
										</Typography>
										<Typography sx={{ mb: 1, mx: 'auto' , lineHeight:3}}>
											Certified that Shri/Shrimati*<TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>to be employed as trade apprentice in <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/> has been examined for an initial medical examination in accordance with Form P1 of the Mines Rules 1955. He/she* appears to be <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/> years of age. The findings of the examining authority are given in the attached sheet. It is considered that Shri/Shrimati*<TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
										</Typography>
										<Typography sx={{ mb: 2, mx: 'auto' }}>
											(a)* is medically fit for any employment/ graduate/technician apprentice training in mines.
										</Typography>
										<Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3}}>
											(b)* is suffering from <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>  and is medically unfit for
										</Typography>
										<Typography sx={{ mb: 2, mx: 'auto', ml:10 }}>
											(1) any employment in mine; or
										</Typography>
										<Typography sx={{ mb: 2, mx: 'auto', ml:10 }}>
											(2) any employment below ground; or
										</Typography>
										<Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3}}>
											(3) any employment or work <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
										</Typography>
                    <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3}}>
											(c)* is suffering from <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>  is should get this disability* cured controlled and should be again examined within a period of <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/> months. He/She will appear for re-examination with the result of test and the opinion of <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/> specialist from <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>. He/She may be permitted/not* permitted to carry on his duties during this period.
										</Typography>
                    <Box sx={{ mb: 5 }} style={{display:"flex"}}>
                      <Box>
                        <UploadAvatar
                          accept="image/*"
                          file={values.avatarUrl}
                          maxSize={3145728}
                          onDrop={handleDrop}
                          error={Boolean(touched.avatarUrl && errors.avatarUrl)}
                          caption={
                            <Typography
                              variant="caption"
                              sx={{
                                mt: 2,
                                mx: 'auto',
                                display: 'block',
                                textAlign: 'center',
                                color: 'text.secondary'
                              }}
                            >
                              Allowed *.jpeg, *.jpg, *.png, *.gif
                              <br /> max size of {fData(3145728)}
                            </Typography>
                          }
                        />
                      </Box>
                      <Box style={{marginLeft:"auto"}}>
                        <Typography sx={{ mb: 2, mx: 'auto' }}>
                          <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
                        </Typography>
                        <Typography sx={{ mb: 2, mx: 'auto' }}>
                          (Signature of Examining Authority)
                        </Typography>
                        <Typography sx={{ mb: 2, mx: 'auto' }}>
                          Name and Designation in Block letters
                        </Typography>
                        <Typography sx={{ mb: 2, mx: 'auto' }}>
                          <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
                        </Typography>
                        <Typography sx={{ mb: 2, mx: 'auto' }}>
                          <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
                        </Typography>
                        
                      </Box>
                    </Box>
                    <Typography sx={{ mb: 2, mx: 'auto' }}>
											Place: <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
										</Typography>
                    <Typography sx={{ mb: 2, mx: 'auto' }}>
											Date: <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
										</Typography>
									</MotionInView>
									<Button
										variant="contained"
										sx={{ float: 'left'}}
									>
										RESET
									</Button>
									<Button variant="contained" component={Link} to="/health/form_o/form_o_doc1" sx={{float:"right"}}>
										NEXT
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
