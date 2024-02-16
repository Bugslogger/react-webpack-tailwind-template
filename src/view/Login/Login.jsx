import React, { memo, useState } from "react";
// login css only
import "./login.css";
// icons
import email from "../../assets/icons/email.svg";
import eye from "../../assets/icons/eye.svg";
import logo from "../../assets/images/PinDrop.svg";
import AuthApi from "../../services/apis/config/AuthApi";
import Input from "../../component/Inputs/Input";
import Button from "../../component/Buttons/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [error, seterror] = useState("");

  const Submit = async (values) => {
    console.log("values: ", values);
    const response = await AuthApi.Login({
      url: "/pd_superadmin_Login",
      data: { username: values.email, password: values.password },
    });
    if (response?.response?.access_token) {
      const cookies = new Cookies();
      cookies.set("access_token", response?.response?.access_token, {
        path: "/",
      });
      navigate("/");
    }
    console.log("Response: ", response);
  };

  const LoginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required("Email can not be empty."),
      password: Yup.string().required("Password can not be empty."),
    }),
    onSubmit: Submit,
  });

  return (
    <div className="w-full h-screen flex bg-image justify-center items-center">
      <div className="w-[400px] bg-transparent border-2 rounded-[15px] overflow-hidden">
        <div className="w-full px-5">
          <div className="mt-7 mb-8 mx-auto w-[224px]">
            <img src={logo} width={"100%"} />
          </div>
          <div className="text-2xl font-body font-semibold text-white leading-normal">
            Sign in
          </div>
          <div className="font-body text-sm">
            <div className={"h-[46px] mt-3 mb-5"}>
              <Input
                placeholder={"Email Address"}
                className={`${
                  LoginForm.touched.email && LoginForm.errors.email
                    ? "border-red-600"
                    : "border-white/30"
                }  rounded-[10px] bg-white/30 shadow-sm backdrop-blur-md overflow-hidden border h-full`}
                startIcon={email}
                InputId="email"
                error={{
                  class: "ps-4",
                  message: LoginForm.touched.email && LoginForm.errors.email,
                }}
                name="email"
                InputClass={
                  "bg-transparent text-white placeholder:text-white text-xs"
                }
                InputChange={LoginForm.handleChange}
                InputBlur={LoginForm.handleBlur}
                iconName={"email"}
                IconClass={{
                  startMain:
                    "bg-transparent h-5 border-e flex justify-center items-center",
                  child: "w-6",
                }}
              />
            </div>
            <div className={"h-[46px] my-3"}>
              <Input
                placeholder={"Password"}
                className={`${
                  LoginForm.touched.password && LoginForm.errors.password
                    ? "border-red-600"
                    : "border-white/30"
                }  rounded-[10px] bg-white/30 shadow-sm backdrop-blur-md overflow-hidden border h-full`}
                endIcon={eye}
                InputClass={
                  "bg-transparent text-white placeholder:text-white text-xs"
                }
                name="password"
                type="password"
                iconName={"eye"}
                startIcon={email}
                IconClass={{
                  startMain:
                    "bg-transparent h-5 border-e flex justify-center items-center",
                  endMain:
                    "bg-transparent h-5 flex justify-center items-center",
                  child: "w-6",
                }}
                InputChange={LoginForm.handleChange}
                InputBlur={LoginForm.handleBlur}
                error={{
                  class: "ps-4",
                  message:
                    LoginForm.touched.password && LoginForm.errors.password,
                }}
              />
            </div>

            <div className="text-xs font-body flex justify-end text-white items-center mt-[10px]">
              Forgot Password ?
            </div>
            <div>
              <div className="text-red-500 text-xs italic text-center mt-6">
                {error}
              </div>
              <Button
                ButtonClick={LoginForm.handleSubmit}
                text={"Sign in"}
                className={{
                  isReplace: false,
                  Class:
                    "bg-white shadow-sm rounded-[10px] text-xs !text-black mb-8 mt-2 w-full h-[50px] font-body",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
