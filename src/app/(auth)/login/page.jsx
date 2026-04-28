"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Form, Input } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  //   const [submitted, setSubmitted] = React.useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    const { email, password } = data;
    const { data: response, error } = await authClient.signIn.email({
      email, // required
      password, // required
      rememberMe: true,
        callbackURL: "/",
    });
    console.log(response, error);
    if (response) {
      alert("login successful");
    }
    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F3F3F3] p-4">
      {/* Container: Width optimized for a professional compact look */}
      <div className="w-full max-w-[500px] bg-white px-10 py-12 md:px-16 md:py-16 rounded-none shadow-sm border border-[#E7E7E7]/30">
        {/* Title: Size and Margin adjusted */}
        <h2 className="text-[32px] font-bold text-center text-[#403F3F] mb-8 leading-tight">
          Login your account
        </h2>

        {/* Divider Line: Subtle and clean */}
        <div className="w-full h-[1px] bg-[#E7E7E7] mb-8"></div>

        <Form
          className="flex flex-col gap-5"
          validationBehavior="native"
          onSubmit={handleSubmit(handleLogin)}
        >
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[18px] font-semibold text-[#403F3F]">
              Email address
            </label>
            <Input
              isRequired
              {...register("email", { required: "Please Enter a valid email" })}
              placeholder="Enter your email address"
              type="email"
              variant="flat"
              radius="none"
              classNames={{
                input: "text-[15px] text-[#403F3F] placeholder:text-[#9F9F9F]",
                inputWrapper:
                  "h-[55px] bg-[#F3F3F3] rounded-none border-none px-4 transition-all",
              }}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[18px] font-semibold text-[#403F3F]">
              Password
            </label>
            <Input
              isRequired
              {...register("password", { required: "password must required " })}
              placeholder="Enter your password"
              type="password"
              variant="flat"
              radius="none"
              classNames={{
                input: "text-[15px] text-[#403F3F] placeholder:text-[#9F9F9F]",
                inputWrapper:
                  "h-[55px] bg-[#F3F3F3] rounded-none border-none px-4 transition-all",
              }}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button: Height and Font size reduced for professional look */}
          <Button
            type="submit"
            radius="none"
            className="w-full h-[55px] bg-[#403F3F] text-white font-semibold text-[18px] mt-2 rounded-none hover:bg-black transition-all active:scale-[0.99]"
          >
            Login
          </Button>
        </Form>

        {/* Footer Text */}
        <p className="text-center mt-6 text-[15px] font-semibold text-[#706F6F]">
          Dont’t Have An Account ?{" "}
          <Link
            href="/register"
            className="text-[#F75B5F] hover:underline transition-colors font-bold ml-1"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
