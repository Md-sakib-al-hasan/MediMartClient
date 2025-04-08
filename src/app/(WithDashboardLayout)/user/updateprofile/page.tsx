
import ProfileForm from "@/components/modules/drashboard/user/profile/updateProfile/updatProfile";
import Loading from "@/components/shared/loading/loading";



export default function UpdateProfile() {
  return (
    <div className="container mx-auto px-4 py-6 relative">
       <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 hidden">
         <Loading/>
       </div>
      <ProfileForm />
    </div>
  )
}
