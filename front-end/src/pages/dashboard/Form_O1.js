import { Icon } from '@iconify/react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import searchFill from '@iconify/icons-eva/search-fill';
// material
import { Container, Box, Typography, Grid, Card, FormControl, FormLabel, TextField, Table, TableBody, TableRow, TableHead, TableCell, Button, RadioGroup, FormControlLabel, Radio } from '@mui/material';
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

export default function FormO1() {
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
										FORM - 'O' (contd)
									</Typography>
									<Typography sx={{ mb: 1, mx: 'auto' }}>
										(to be filled in foor every medical examination whether initial / periodical or reexamination or after cure / control of disbility.)
									</Typography>
									<MotionInView variants={varFadeInUp} sx={{textAlign:"left", mb:4 }}>
										<Typography sx={{ mb: 2, mx: 'auto', lineHeight:3}}>
											Annexxure to Certificate No<TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/> as result of medical examination on <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
										</Typography>
										<Typography sx={{ mb: 4, mx: 'auto' , lineHeight:3}}>
											Idendification Mark - <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
										</Typography>
										<Typography sx={{ mb: 2, mx: 'auto', lineHeight:2.5 }}>
											General Development -   
                                            <FormControl component="fieldset" sx={{ml:5}}>
                                                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                                    <FormControlLabel value="Good" control={<Radio />} label="Good" />
                                                    <FormControlLabel value="Fair" control={<Radio />} label="Fair" />
                                                    <FormControlLabel value="Poor" control={<Radio />} label="Poor" />
                                                </RadioGroup>
                                            </FormControl>
										</Typography>
										<Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3}}>
											Height:     <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/> cms
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3}}>
											Weight:     <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/> Kgs
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto'}}>
											4.Eyes:
										</Typography>
										<Typography sx={{ mb: 2, mx: 'auto', ml:10 }}>
											(1) Visual acuity-Distance vision (with or without glasses)
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:15, lineHeight:3 }}>
											Right eye  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:15, lineHeight:3 }}>
											Left eye  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
										<Typography sx={{ mb: 2, mx: 'auto', ml:10 }}>
											(2) Any Organic diseases of eyes
										</Typography>
										<Typography sx={{ mb: 2, mx: 'auto', ml:10}}>
											(3) Night Blindness
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10}}>
											(4) Squint (to be tested in special cases)
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto'}}>
											5.Ears:
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10, lineHeight:3 }}>
											(1) Hearing  Right Ear  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>  Left Ear  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 }}>
											(2) Any Organic diseases of ear
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto'}}>
											6.Respiratory System - Chest measurement:
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10, lineHeight:3 }}>
											(1) After full inspiration  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/> cms  
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3}}>
											(2) After full expiration  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/> cms
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto'}}>
											7.Circulatory System
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3 }}>
											(1) Blood Pressure:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>   
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3 }}>
											(2) Pulse  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/> 
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto'}}>
											8.Abdomen
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3 }}>
											(1) Tenderness:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>   
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3 }}>
											(2) Liver:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/> 
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3 }}>
											(3) Spleen:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/> 
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3 }}>
											(4) Tuner:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/> 
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto'}}>
											9.nervous System
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3}}>
											(1) History of fits or qpilepsy  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>   
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3 }}>
											(2) Paralysis  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/> 
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', ml:10 , lineHeight:3 }}>
											(2) Mental Health  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/> 
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3 }}>
											10.Locomotory System:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3 }}>
											11.Skin:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3 }}>
											12.Hernia:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3 }}>
											13.Hydrocele:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3 }}>
											14.Any other abnormally:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto', lineHeight:2.5}}>
                                            15.
                                            <FormControl component="fieldset" sx={{ml:5}}>
                                                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                                    <FormControlLabel value="Good" control={<Radio />} label="Urine" />
                                                    <FormControlLabel value="Fair" control={<Radio />} label="Reaction" />
                                                    <FormControlLabel value="Poor" control={<Radio />} label="Albumin" />
                                                    <FormControlLabel value="Sugar" control={<Radio />} label="Sugar" />
                                                </RadioGroup>
                                            </FormControl>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3 }}>
											16.Skiagram of Chest:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3 }}>
											17.Any other test considered neccessary by the examining authority:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3 }}>
											18.Any opinion of specaiolists considered necessary:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Typography sx={{ mb: 2, mx: 'auto' , lineHeight:3 }}>
											19.Blood Group:  <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:4, mr:2 }}/>
										</Typography>
                                        <Box style={{display:"flex"}}>
                                            <Typography sx={{ mb: 2, mx: 'auto', lineHeight:3 }} style={{marginRight:"auto"}}>
                                                Place: <TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
                                            </Typography>
                                            <Typography sx={{ mb: 2, mx: 'auto', lineHeight:3 }} style={{marginLeft:"auto"}}>
                                                (Signature of Examining Authority)
                                            </Typography>
                                        </Box>
									</MotionInView>
									<Button
										variant="contained"
										sx={{ float: 'left'}}
									>
										RESET
									</Button>
									<Button variant="contained" component={Link} to="/health/form_o/form_o_doc2" sx={{float:"right"}}>
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
