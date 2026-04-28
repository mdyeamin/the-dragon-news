"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Checkbox, Form, Input, Label } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleRegister = async (data) => {
    const { name, photoURL, email, password } = data;
    console.log(name, photoURL, email, password);

    const { data: response, error } = await authClient.signUp.email({
      name, // required
      email, // required
      password, // required
      image: photoURL,
      callbackURL: "/",
    });
    console.log("data", response, "error", error);
    if (response?.user) {
      alert("signUp successful");
    }
    if (error) {
      alert(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F3F3F3] p-4">
      <div className="w-full max-w-[600px] bg-white px-10 py-12 md:px-16 md:py-16 rounded-none shadow-sm border border-[#E7E7E7]/30">
        <h2 className="text-[32px] font-bold text-center text-[#403F3F] mb-8 leading-tight">
          Register your account
        </h2>

        <div className="w-full h-[1px] bg-[#E7E7E7] mb-8"></div>

        <Form
          className="flex flex-col gap-5"
          validationBehavior="native"
          onSubmit={handleSubmit(handleRegister)}
        >
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[18px] font-semibold text-[#403F3F]">
              Your Name
            </label>
            <Input
              isRequired
              {...register("name", { required: "Please Enter your name" })}
              name="name"
              placeholder="Enter your name"
              variant="flat"
              radius="none"
              classNames={{
                input: "text-[15px] text-[#403F3F] placeholder:text-[#9F9F9F]",
                inputWrapper:
                  "h-[55px] bg-[#F3F3F3] rounded-none border-none px-4",
              }}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>

          {/* Photo URL Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[18px] font-semibold text-[#403F3F]">
              Photo URL
            </label>
            <Input
              name="photoURL"
              {...register("photoURL", {
                required: "Please give your photo URL",
              })}
              placeholder="Enter your photo URL"
              variant="flat"
              radius="none"
              classNames={{
                input: "text-[15px] text-[#403F3F] placeholder:text-[#9F9F9F]",
                inputWrapper:
                  "h-[55px] bg-[#F3F3F3] rounded-none border-none px-4",
              }}
            />
            {errors.photoURL && (
              <p className="text-red-500 text-xs">{errors.photoURL.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[18px] font-semibold text-[#403F3F]">
              Email
            </label>
            <Input
              isRequired
              {...register("email", { required: "Please Enter a valid email" })}
              name="email"
              type="email"
              placeholder="Enter your email address"
              variant="flat"
              radius="none"
              classNames={{
                input: "text-[15px] text-[#403F3F] placeholder:text-[#9F9F9F]",
                inputWrapper:
                  "h-[55px] bg-[#F3F3F3] rounded-none border-none px-4",
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
  <div className="relative w-full">
    <Input
      isRequired
      {...register("password", { required: "password must required" })}
      placeholder="Enter your password"
      type={isVisible ? "text" : "password"}
      variant="flat"
      radius="none"
      classNames={{
        input: "text-[15px] text-[#403F3F] placeholder:text-[#9F9F9F]",
        inputWrapper:
          "h-[55px] bg-[#F3F3F3] rounded-none border-none px-4 transition-all",
        base: "w-full",
      }}
    />
    <button
      type="button"
      onClick={() => setIsVisible(!isVisible)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9F9F9F] hover:text-[#403F3F] transition-colors z-10"
    >
      {isVisible ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
    </button>
  </div>
  {errors.password && (
    <p className="text-red-500 text-xs">{errors.password.message}</p>
  )}
</div>
          {/* Terms Checkbox Section - Verified Figma Style */}
          {/* Terms Checkbox Section - 100% Figma Match */}
          <div className="flex items-center gap-2 py-2">
            <Checkbox id="basic-terms">
              <Checkbox.Control>
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label
                  htmlFor="basic-terms"
                  className="text-[16px] font-medium text-[#706F6F] cursor-pointer"
                >
                  Accept terms and conditions
                </Label>
              </Checkbox.Content>
            </Checkbox>
          </div>
          <Button
            type="submit"
            radius="none"
            className="w-full h-[55px] bg-[#403F3F] text-white font-semibold text-[18px] mt-2 rounded-none hover:bg-black transition-all active:scale-[0.99]"
          >
            Register
          </Button>
        </Form>

        <p className="text-center mt-6 text-[15px] font-semibold text-[#706F6F]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#F75B5F] hover:underline transition-colors font-bold ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
