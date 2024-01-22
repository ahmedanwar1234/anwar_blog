import { Badge, Button, Label, Spinner, TextInput } from "flowbite-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";

const SignIn = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = useCallback((data) => {
    setLoading(true);
    const { email, password } = data;
    axios
      .post("/api/auth/signin", {  email, password })
      .then((data) => {
        console.log(data);
        console.log("success sign in");
        setLoading(false);
      navigate('/')
      })
      .catch((error) => {
        setError(error.response.data.message);
        setLoading(false);
      });
  });

  return (
    <div className="  min-h-screen mt-20  ">
      <div className=" gap-5 flex flex-col md:flex-row p-3 max-w-3xl mx-auto">
        {/* lef  */}
        <div className="flex-1 ">
          <div>
            <Link className="   font-bold  text-4xl  dark:text-white" to={"/"}>
              <span className="px-2 py-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Sahand's{" "}
              </span>
              Blog
            </Link>
            <p className="text-sm mt-5">
              This is a demo project. You can sign in with your email and
              password or with Google.
            </p>
          </div>
        </div>

        {/* right */}
        <div className=" flex-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col gap-4"
          >
 
            <div>
              <Label value="Your email" />
              <TextInput
                className=" mb-2"
                {...register("email", { required: true })}
                type="email"
                placeholder="name@company.com"
                id="email"
              />
              {errors.email?.type === "required" && (
                <Badge className="w-fit" color={"failure"} role="alert">
                  Email is required
                </Badge>
              )}
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                className=" mb-2"
                {...register("password", { required: true })}
                type="password"
                placeholder="*********"
                id="password"
              />
              {errors.password?.type === "required" && (
                <Badge className="w-fit" color={"failure"} role="alert">
                  Password is required
                </Badge>
              )}
            </div>
            {error && <Badge color={"failure"}>{error}</Badge>}
            <Button
              gradientDuoTone={"purpleToPink"}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                <> Sign In</>
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>dont have account?</span>
            <Link to={"/sign-up"} className="  text-blue-500">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
