import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import { useCallback } from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import { LoadingButton } from '@mui/lab';
// material
import { Typography, Grid, Card, Stack, TableContainer, TextField, Table, TableBody, TableRow, TableHead, TableCell, Button } from '@mui/material';
// hooks
import useAuth from '../../../../hooks/useAuth';
import useIsMountedRef from '../../../../hooks/useIsMountedRef';
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../../animate';
// ----------------------------------------------------------------------

export default function AccountExam() {
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
        enqueueSnackbar('Generate PDF success', { variant: 'success' });
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
  );
}
