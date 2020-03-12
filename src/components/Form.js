import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import {Formik, Form as FormikForm, Field} from "formik"
import MyField from "./MyField";
import {formFields, validationSchema, formInitialValues} from "../formData"
import {
    Grid,
    Container,
    Button,
    Typography,
    CssBaseline,
    Avatar,

} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

    },
    avatar: {
        margin: theme.spacing(1),
        height: 80,
        width: 80,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),


    },
}));


const Form = ({onFormSubmit}) => {

    const classes = useStyles();

    const renderFields = (formFields, errors, touched) => (

        formFields.map((fieldProps) => {

                const errorProps = touched[fieldProps.name] && errors[fieldProps.name] ? {
                    error: true,
                    helperText: errors[fieldProps.name]
                } : null;

                return <Field {...fieldProps} errorProps={errorProps} key={fieldProps.name} component={MyField}/>

            }
        ));


    return (

        <Container component="main" maxWidth="md">
            <CssBaseline/>
            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <AddAPhotoIcon fontSize="large"/>
                </Avatar>

                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <Formik initialValues={formInitialValues} validationSchema={validationSchema} onSubmit={(values) => {
                    onFormSubmit(values);
                }}>
                    {({errors, touched, handleSubmit}) => (
                        <FormikForm className={classes.form} onSubmit={handleSubmit}>
                            <Grid container spacing={2}>

                                {renderFields(formFields, errors, touched)}

                            </Grid>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                        </FormikForm>
                    )}
                </Formik>
            </div>
        </Container>


    );


};

export default Form

