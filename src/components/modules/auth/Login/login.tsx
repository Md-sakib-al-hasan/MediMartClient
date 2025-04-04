"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { IoMdCloseCircle } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Define validation schema
const authSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

type AuthFormData = z.infer<typeof authSchema>

export default function Login({handleClose,handleRegister}:{handleClose: () => void,handleRegister:() => void}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  })

  const onSubmit = (data: AuthFormData) => {
    console.log("Signing in with:", data)
    // TODO: Add sign-in logic here
  }


  

  return (
    <div className="flex min-h-screen items-center justify-center bg-black/20 p-4">
      <div className="relative flex w-full max-w-4xl  rounded-lg shadow-xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-[-10px] top-[-20px]  text-gray-500 hover:text-gray-800 transition-colors text-2xl"
        >
          <IoMdCloseCircle className="bg-red-500 text-white rounded-full" />
        </button>

        {/* Sign Up Section - Left Side */}
        <div className="flex w-full flex-col items-center justify-center bg-[#39c4d8] p-8 text-center text-white md:w-2/5">
          <div className="max-w-xs">
            <h2 className="mb-6 text-3xl font-bold">Sign Up Choice-1</h2>
            <p className="mb-8">{`If you don't have a personal account please sign up`}</p>
            <Button
              onClick={handleRegister}
              variant="outline"
              className="w-full border-white bg-transparent text-white hover:bg-white/10"
            >
              Sign Up
            </Button>
          </div>
        </div>

        {/* Sign In Section - Right Side */}
        <div className="w-full bg-white p-8 md:w-3/5">
          <div className="mx-auto max-w-md">
            <h1 className="mb-2 text-center text-2xl font-bold text-[#0f3c69] md:text-3xl">Sign In To Your Account</h1>
            <p className="mb-8 text-center text-gray-500">Use your email for login</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-[#eef2f7] px-4 py-3"
                  {...register("email")}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  className="bg-[#eef2f7] px-4 py-3"
                  {...register("password")}
                />
                {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
              </div>
              <Button type="submit" className="w-full bg-[#39c4d8] py-6 text-white hover:bg-[#2db5c9]">
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
