import { useCallback, useState } from 'react';
import { Icon } from '@iconify/react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Form, FormikProvider, useFormik } from 'formik';
import { Link } from 'react-router-dom';
import searchFill from '@iconify/icons-eva/search-fill';
// material
import { Container, Box, Typography, Grid, Card, TableContainer, FormLabel, TextField, Table, TableBody, TableRow, TableHead, TableCell, Button, RadioGroup, FormControlLabel, Radio, Alert } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

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
const columns1 = [
  { field: 'name', headerName: 'Parameters', width: 250, editable: false },
  { field: 'age', headerName: 'Predicted Value', width: 250, editable: true },
  { field: 'dateCreated', headerName: 'Performed Value', width: 250, editable: true },
  { field: 'lastLogin', headerName: '% of preddicted', width: 250, editable: true },
];

const rows1 = [
  {
    id: 1,
    name: 'Forced Vital Capacity (FEV)',
    age: '',
    dateCreated: '',
    lastLogin: '',
  },
	{
    id: 2,
    name: 'Forced Vital Capacity 1 (FEV 1)',
    age: '',
    dateCreated: '',
    lastLogin: '',
  },
	{
    id: 3,
    name: 'FEV1 / FVC',
    age: '',
    dateCreated: '',
    lastLogin: '',
  },
	{
    id: 4,
    name: 'Peak Exiratory Flow',
    age: '',
    dateCreated: '',
    lastLogin: '',
  },
];

const columns2 = [
  { field: 'name', headerName: 'Parameters', width: 250, editable: false },
  { field: 'age', headerName: 'Predicted Value', width: 250, editable: true },
  { field: 'dateCreated', headerName: 'Performed Value', width: 250, editable: true },
  { field: 'lastLogin', headerName: '% of preddicted', width: 250, editable: true },
];

const rows2 = [
  {
    id: 1,
    name: 'Forced Vital Capacity (FEV)',
    age: '',
    dateCreated: '',
    lastLogin: '',
  },
	{
    id: 2,
    name: 'Forced Vital Capacity 1 (FEV 1)',
    age: '',
    dateCreated: '',
    lastLogin: '',
  },
	{
    id: 3,
    name: 'FEV1 / FVC',
    age: '',
    dateCreated: '',
    lastLogin: '',
  },
	{
    id: 4,
    name: 'Peak Exiratory Flow',
    age: '',
    dateCreated: '',
    lastLogin: '',
  },
];

const columns3 = [
  { field: 'name', headerName: 'Findings', width: 250, editable: false },
  { field: 'age', headerName: 'Normal/Abnormal', width: 250, editable: true },
];

const rows3 = [
  {
    id: 1,
    name: 'Superficial Reflex',
    age: '',
  },
	{
    id: 2,
    name: 'Deep Reflex',
    age: '',
  },
	{
    id: 3,
    name: 'Peripheral circulation',
    age: '',
  },
	{
    id: 4,
    name: 'Vibrational Syndromes',
    age: '',
  },
];

const columns4 = [
  { field: 'name', headerName: 'Profusion of Pneumoconiotic opacities', width: 350, editable: true },
  { field: 'age', headerName: 'Grade', width: 200, editable: true },
  { field: 'dateCreated', headerName: 'Type', width: 200, editable: true },
];

const rows4 = [
  {
    id: 1,
    name: 'Present/Absent',
    age: '',
    dateCreated: '',
  },
];

const columns5 = [
  { field: 'name', headerName: 'Conduction Type', width: 250, editable: false },
  { field: 'age', headerName: 'Left Ear', width: 250, editable: true },
  { field: 'dateCreated', headerName: 'Right Ear', width: 250, editable: true },
];

const rows5 = [
  {
    id: 1,
    name: 'Ear Conduction',
    age: 'Normal/Abnormal',
    dateCreated: 'Normal/Abnormal',
  },
	{
    id: 2,
    name: 'Bone Conduction',
    age: 'Normal/Abnormal',
    dateCreated: 'Normal/Abnormal',
  },
];

const columns6 = [
  { field: 'name', headerName: 'S1', width: 250, editable: true },
  { field: 'age', headerName: 'Tests', width: 250, editable: true },
  { field: 'dateCreated', headerName: 'Findings', width: 250, editable: true },
];

const rows6 = [
  {
    id: 1,
    name: '',
    age: 'Blood - Tc, Dc, Hb, ESR, Platelets',
    dateCreated: 'WNL/Abnormal',
  },
	{
    id: 2,
    name: '',
    age: 'Blood Sugar, Fasting & PP',
    dateCreated: 'WNL/Abnormal',
  },
	{
    id: 3,
    name: '',
    age: 'Lipid profile',
    dateCreated: 'WNL/Abnormal',
  },
	{
    id: 4,
    name: '',
    age: 'Blood Urea, Creatinine',
    dateCreated: 'WNL/Abnormal',
  },
	{
    id: 5,
    name: '',
    age: 'Urine Routine',
    dateCreated: 'WNL/Abnormal',
  },
	{
    id: 6,
    name: '',
    age: 'Stool Rutine',
    dateCreated: 'WNL/Abnormal',
  },
];
export default function FormO2() {
  const { themeStretch } = useSettings();
	const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();
  const { user, updateProfile } = useAuth();
	const [editRowsModel, setEditRowsModel] = useState({});

  const handleEditRowsModelChange = useCallback((model) => {
    setEditRowsModel(model);
  }, []);
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
                                        REPORT OF MEDICAL EXAMINATION UNDER RULE 29 (B)
									</Typography>
									<Typography sx={{ mb: 1, mx: 'auto' }}>
										(to be used in continuation with FORM-O)
									</Typography>
									<MotionInView variants={varFadeInUp} sx={{textAlign:"left", mb:4 }}>
										<Typography sx={{ mt: 3, mb:2 }} style={{fontWeight:"bold"}}>
											1.Lung Function Test
										</Typography>
										<div style={{ width: '100%' }}>
												<div style={{ height: 320, width: '100%' }}>
														<DataGrid
														rows={rows1}
														columns={columns1}
														editRowsModel={editRowsModel}
														onEditRowsModelChange={handleEditRowsModelChange}
														hideFooterPagination
														/>
												</div>
										</div>
										<Typography sx={{ mt: 3, mb:2 }} style={{fontWeight:"bold"}}>
											2.Cardio logical assessment
										</Typography>
										<TableContainer sx={{ minWidth: 800, mt:5 }}>
											<Table>
												<TableBody>
													<TableRow>
														<TableCell align="left">Auscultation</TableCell>
														<TableCell align="left"> </TableCell>
														<TableCell align="left"> </TableCell>
														<TableCell align="left">Electronicardiograph </TableCell>
													</TableRow>
													<TableRow>
														<TableCell align="left">S1</TableCell>
														<TableCell align="left">S2</TableCell>
														<TableCell align="left">Additional Sound</TableCell>
														<TableCell align="left">(12 lead) findings</TableCell>
													</TableRow>
													<TableRow>
														<TableCell align="left"> </TableCell>
														<TableCell align="left"> </TableCell>
														<TableCell align="left"> </TableCell>
														<TableCell align="left">Normal/Abnormal</TableCell>
													</TableRow>
												</TableBody>
											</Table>
										</TableContainer>
										<Typography sx={{ mt: 3, mb:2 }} style={{fontWeight:"bold"}}>
											3.Neurological assessment
										</Typography>
										<div style={{ width: '100%' }}>
												<div style={{ height: 320, width: '100%' }}>
														<DataGrid
														rows={rows3}
														columns={columns3}
														editRowsModel={editRowsModel}
														onEditRowsModelChange={handleEditRowsModelChange}
														hideFooterPagination
														/>
												</div>
										</div>
										<Typography sx={{ mt: 3, mb:2 }} style={{fontWeight:"bold"}}>
											4.ILO classification of Chest Radiograph-
										</Typography>
										<div style={{ width: '100%' }}>
												<div style={{ height: 200, width: '100%' }}>
														<DataGrid
														rows={rows4}
														columns={columns4}
														editRowsModel={editRowsModel}
														onEditRowsModelChange={handleEditRowsModelChange}
														hideFooterPagination
														/>
												</div>
										</div>
										<Typography sx={{ mt: 3, mb:2 }} style={{fontWeight:"bold"}}>
											5.Audiometric Findings-
										</Typography>
										<div style={{ width: '100%' }}>
												<div style={{ height: 220, width: '100%' }}>
														<DataGrid
														rows={rows5}
														columns={columns5}
														editRowsModel={editRowsModel}
														onEditRowsModelChange={handleEditRowsModelChange}
														hideFooterPagination
														/>
												</div>
										</div>
										<Typography sx={{ mt: 3, mb:2 }} style={{fontWeight:"bold"}}>
											6.Pathological/Microbiological investigation
										</Typography>
										<div style={{ width: '100%' }}>
												<div style={{ height: 400, width: '100%' }}>
														<DataGrid
														rows={rows6}
														columns={columns6}
														editRowsModel={editRowsModel}
														onEditRowsModelChange={handleEditRowsModelChange}
														hideFooterPagination
														/>
												</div>
										</div>
										<Typography sx={{ mt: 3, mb:2 }} style={{fontWeight:"bold"}}>
											7.Any other tests
										</Typography>
										<Box>
											<Typography sx={{ mt: 3, mb:2 }} style={{marginLeft:"auto"}}>
												<TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
											</Typography>
											<Typography sx={{ mt: 3, mb:2 }} style={{fontWeight:"bold", marginLeft:"auto"}}>
												(Signature of Examining Authority))
											</Typography>
											<Typography sx={{ mt: 3, mb:2 }} style={{marginLeft:"auto"}}>
												Name and Designation in Block Letters										
											</Typography>
											<Typography sx={{ mt: 3, mb:2 }} style={{marginLeft:"auto"}}>
												<TextField id="standard-basic" label="" variant="standard" color="warning" sx={{ ml:1 }}/>
											</Typography>
										</Box>
									</MotionInView>
									<Button
										variant="contained"
										sx={{ float: 'left'}}
									>
										RESET
									</Button>
									<LoadingButton type="submit" variant="contained" loading={isSubmitting} sx={{float:"right"}}>
										SAVE
									</LoadingButton>
								</Card>
							</Grid>
						</Grid>
					</Form>
				</FormikProvider>
      </Container>
    </Page>
  
  );
    
}
