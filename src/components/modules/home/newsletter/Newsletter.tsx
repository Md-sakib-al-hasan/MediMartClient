import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <div className="w-full bg-gray-50 md:py-36 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-3">
          Sign Up For Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Join 60,000+ Subscribers and get a new discount coupon every Saturday.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="flex-1 min-w-[250px] rounded-full bg-white border-gray-200"
          />
          <Button className="rounded-full bg-teal-500 hover:bg-teal-600 text-white px-6 w-full sm:w-auto">
            SUBSCRIBE <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
