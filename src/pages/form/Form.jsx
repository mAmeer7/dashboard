
import { Box, Button, Container, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

export default function Form() {
  const handleForm = (values) => {
    console.log(values);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address: "",
  };

  const phonecheck =
    /^((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //Schema for validation
  const userSchema = yup.object().shape({
    firstName: yup.string().required("It is required"),
    lastName: yup.string().required("It is required"),
    contact: yup
      .string()
      .matches(phonecheck, "invalid number")
      .required("It is required"),
    email: yup
      .string()
      .matches(emailRegex, "invalid email")
      .required("It is required"),
  });

  return (
    <Container>
      <Header title="CREATE USER" subtitle="Create New User Profile" />
      <Box>
        <Formik
          onSubmit={handleForm}
          initialValues={initialValues}
          validationSchema={userSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap={"30px"}
                gridTemplateColumns={"repeat(4, minmax(0,1fr))"}
              >
                <TextField
                  fullWidth
                  name="firstName"
                  variant="filled"
                  type="text"
                  label="First Name"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  sx={{
                    "& .css-16yk8a3-MuiInputBase-root-MuiFilledInput-root.Mui-focused":
                      {
                        backgroundColor: "#fff",
                        borderRadius: "4px",
                        color: "black",
                        borderBottom: "1px solid #fff",
                      },
                    gridColumn: "span 2",
                  }}
                />

                <TextField
                  fullWidth
                  name="lastName"
                  variant="filled"
                  type="text"
                  label="Last Name"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  sx={{
                    "& .css-16yk8a3-MuiInputBase-root-MuiFilledInput-root.Mui-focused":
                      {
                        backgroundColor: "#fff",
                        borderRadius: "3px",
                        color: "black",
                        borderBottom: "1px solid #fff",
                      },
                    gridColumn: "span 2",
                  }}
                />

                <TextField
                  fullWidth
                  name="email"
                  variant="filled"
                  type="text"
                  label="Email"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{
                    "& .css-16yk8a3-MuiInputBase-root-MuiFilledInput-root.Mui-focused":
                      {
                        backgroundColor: "#fff",
                        borderRadius: "3px",
                        color: "black",
                        borderBottom: "1px solid #fff",
                      },
                    gridColumn: "span 4",
                  }}
                />

                <TextField
                  fullWidth
                  name="contact"
                  variant="filled"
                  type="tel"
                  label="Contact"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contact}
                  error={!!touched.contact && !!errors.contact}
                  helperText={touched.contact && errors.contact}
                  sx={{
                    "& .css-16yk8a3-MuiInputBase-root-MuiFilledInput-root.Mui-focused":
                      {
                        backgroundColor: "#fff",
                        borderRadius: "3px",
                        color: "black",
                        borderBottom: "1px solid #fff",
                      },
                    gridColumn: "span 4",
                  }}
                />

                <TextField
                  fullWidth
                  name="address"
                  variant="filled"
                  type="string"
                  label="Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  
                  sx={{
                    "& .css-16yk8a3-MuiInputBase-root-MuiFilledInput-root.Mui-focused":
                      {
                        backgroundColor: "#fff",
                        borderRadius: "3px",
                        color: "black",
                        borderBottom: "1px solid #fff",
                      },
                    gridColumn: "span 4",
                  }}
                />
              </Box>
              <Box display={'flex'} mt={'20px'} justifyContent={'end'}>
                <Button type="submit" variant="contained"  sx={{
                    color:"white",
                    fontWeight:"bold",
                    backgroundColor:" #3B7A57",
                    '&:hover': {
                        backgroundColor: '#0069d9',},
                        '&:active': {
                            boxShadow: 'none',
                            backgroundColor: '#0062cc',
                            borderColor: '#005cbf',
                          },
                }}>Submit</Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}
