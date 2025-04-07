"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const checkoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "ZIP code is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  notes: z.string().optional(),
})

type CheckoutForm = z.infer<typeof checkoutSchema>

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer")
  const [showCouponField, setShowCouponField] = useState(false)
  const [couponCode, setCouponCode] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  })

  const onSubmit = (data: CheckoutForm) => {
    console.log("Submitted", data)
    alert("Order placed successfully!")
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

      {/* Coupon Section */}
      <div className="mb-6">
        <p className="text-sm">
          Have a coupon?{" "}
          <button
            onClick={() => setShowCouponField(!showCouponField)}
            className="text-[#24aeb1] uppercase text-xs font-medium bg-transparent border-none p-0 cursor-pointer"
          >
            Click here to enter your code
          </button>
        </p>

        {showCouponField && (
          <div className="mt-4 p-6 bg-gray-50 rounded">
            <p className="text-sm text-gray-600 mb-4">If you have a coupon code, please apply it below.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="flex-grow border border-gray-300 p-2 rounded"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button
                className="bg-pink-500 text-white py-2 px-4 rounded font-medium hover:bg-pink-600 transition-colors uppercase"
                onClick={() => {
                  alert(`Applying coupon: ${couponCode}`)
                }}
              >
                Apply Coupon
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Billing Details */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Billing details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-1">
                  First name <span className="text-red-500">*</span>
                </label>
                <input {...register("firstName")} id="firstName" className="w-full border border-gray-300 p-2 rounded" />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm mb-1">
                  Last name <span className="text-red-500">*</span>
                </label>
                <input {...register("lastName")} id="lastName" className="w-full border border-gray-300 p-2 rounded" />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="company" className="block text-sm mb-1">Company name (optional)</label>
              <input {...register("company")} id="company" className="w-full border border-gray-300 p-2 rounded" />
            </div>

            <div className="mt-4">
              <label htmlFor="country" className="block text-sm mb-1">
                Country / Region <span className="text-red-500">*</span>
              </label>
              <select {...register("country")} id="country" className="w-full border border-gray-300 p-2 rounded bg-white">
                <option value="">Select</option>
                <option value="American Samoa">American Samoa</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
              {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="street" className="block text-sm mb-1">Street address <span className="text-red-500">*</span></label>
              <input {...register("street")} id="street" placeholder="House number and street name" className="w-full border border-gray-300 p-2 rounded mb-2" />
              {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street.message}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="city" className="block text-sm mb-1">Town / City <span className="text-red-500">*</span></label>
              <input {...register("city")} id="city" className="w-full border border-gray-300 p-2 rounded" />
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="state" className="block text-sm mb-1">State / Country <span className="text-red-500">*</span></label>
              <input {...register("state")} id="state" className="w-full border border-gray-300 p-2 rounded" />
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="zip" className="block text-sm mb-1">Postcode / ZIP <span className="text-red-500">*</span></label>
              <input {...register("zip")} id="zip" className="w-full border border-gray-300 p-2 rounded" />
              {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip.message}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="phone" className="block text-sm mb-1">Phone <span className="text-red-500">*</span></label>
              <input {...register("phone")} id="phone" type="tel" className="w-full border border-gray-300 p-2 rounded" />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>

            <div className="mt-4">
              <label htmlFor="email" className="block text-sm mb-1">Email address <span className="text-red-500">*</span></label>
              <input {...register("email")} id="email" type="email" className="w-full border border-gray-300 p-2 rounded" />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Additional Info */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Additional information</h2>
            <div>
              <label htmlFor="notes" className="block text-sm mb-1">Order notes (optional)</label>
              <textarea {...register("notes")} id="notes" rows={4} placeholder="Notes about your order" className="w-full border border-gray-300 p-2 rounded" />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your order</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="font-medium">Gather Real Calm Multivitamin</span> × 2
                </div>
                <div className="text-sm">$246.80</div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm">
                  <span className="font-medium">Nordic Naturals Vitamin D3</span> × 1
                </div>
                <div className="text-sm">$134.49</div>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <div className="text-sm font-medium">Subtotal</div>
                <div className="text-sm">$381.29</div>
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                <div className="text-base font-bold">Total</div>
                <div className="text-base font-bold">$381.29</div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-2">
                <input
                  type="radio"
                  id="bank-transfer"
                  name="payment"
                  value="bank-transfer"
                  checked={paymentMethod === "bank-transfer"}
                  onChange={() => setPaymentMethod("bank-transfer")}
                  className="mt-1"
                />
                <div>
                  <label htmlFor="bank-transfer" className="font-medium text-sm">Direct bank transfer</label>
                  {paymentMethod === "bank-transfer" && (
                    <p className="text-xs text-gray-600 mt-2">
                      Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="radio"
                  id="check-payment"
                  name="payment"
                  value="check-payment"
                  checked={paymentMethod === "check-payment"}
                  onChange={() => setPaymentMethod("check-payment")}
                  className="mt-1"
                />
                <label htmlFor="check-payment" className="font-medium text-sm">Check payments</label>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <p className="text-xs text-gray-600">
                Your personal data will be used to process your order and support your experience throughout this website,
                and for other purposes described in our{" "}
                <Link href="#" className="text-blue-500">Privacy policy</Link>.
              </p>
            </div>

            <button type="submit" className="w-full bg-pink-500 text-white py-3 px-4 rounded font-medium hover:bg-pink-600 transition-colors">
              PLACE ORDER
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
