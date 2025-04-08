"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Camera } from "lucide-react"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  dob: z.date({ required_error: "Date of birth is required" }),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(10, "Enter a valid mobile number"),
})

export default function ProfileForm() {
  const [emailVerified] = useState(true)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "Md sakib al hasan",
      gender: undefined,
      dob: undefined,
      email: "mdsakibalhasanprogrammer1@gmail.com",
      mobile: "",
    },
  })

  const date = watch("dob")

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form Data:", data)
    // Perform update logic here
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <Card className="shadow-md">
        <CardHeader className="border-b pb-3">
          <CardTitle>View Profile</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="h-28 w-28 rounded-full bg-gray-100 flex items-center justify-center">
                <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <Button
                variant="default"
                size="icon"
                className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-teal-600 hover:bg-teal-700"
              >
                <Camera className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-base">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input id="fullName" {...register("fullName")} className="h-10" />
              {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-base">Gender</Label>
                <Select onValueChange={(val: "male" | "female" | "other") => setValue("gender", val)} defaultValue={watch("gender")}>
                  <SelectTrigger id="gender" className="h-10 w-full">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <p className="text-sm text-red-500">{errors.gender.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob" className="text-base">Date of Birth</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("h-10 w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "MM/dd/yyyy") : "mm/dd/yyyy"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={(val) => setValue("dob", val!)} initialFocus />
                  </PopoverContent>
                </Popover>
                {errors.dob && <p className="text-sm text-red-500">{errors.dob.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email Address</Label>
                <div className="relative">
                  <Input id="email" type="email" {...register("email")} className="h-10 pr-10" />
                  {emailVerified && (
                    <div className="absolute inset-y-0 right-3 flex items-center">
                     
                    </div>
                  )}
                </div>
                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-base">Mobile No</Label>
                <Input id="mobile" placeholder="Enter mobile no" {...register("mobile")} className="h-10" />
                {errors.mobile && <p className="text-sm text-red-500">{errors.mobile.message}</p>}
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full text-white bg-[#24aeb1] hover:bg-teal-700 h-12 text-base" type="submit">
                Update Profile
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
