import React from "react";
import { Card, Button, Form, FormGroup, Input } from "reactstrap";
import useForm from "../../useForm";
import validate from "../../validateLogin";
import { useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";

const Login = () => {
   const responseGoogle = (response) => {
      console.log(response);
   };
   const { handleChange, handleSubmit, values, errors } = useForm(
      submit,
      validate
   );
   const history = useHistory();
   function submit() {
      history.push("/all-quotes");
   }

   return (
      <div>
         <Card
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
         >
            <div className="row">
               <div className="col">
                  <h1>Sign In</h1>
               </div>
               <div className="ml-auto mr-4">
                  <GoogleLogin
                     clientId="474045149746-54n1rjhf16n2mriq28f7l6qbjo03e66a.apps.googleusercontent.com"
                     buttonText="Login"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                     cookiePolicy={"single_host_origin"}
                  />
               </div>
            </div>

            <Form onSubmit={handleSubmit}>
               <FormGroup>
                  <div>
                     <Input
                        name="email"
                        type="email"
                        placeholder="Email address"
                        value={values.email}
                        className="mb-2"
                        onChange={handleChange}
                        // required
                     ></Input>
                     {errors.email && (
                        <p className="text-danger">{errors.email}</p>
                     )}
                  </div>
                  <div>
                     <Input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={values.password}
                        className="mb-2"
                        onChange={handleChange}
                        // required
                     ></Input>
                     {errors.password && (
                        <p className="text-danger">{errors.password}</p>
                     )}
                  </div>
               </FormGroup>
               <Button type="submit" block>
                  Submit
               </Button>
            </Form>
         </Card>
      </div>
   );
};

export default Login;