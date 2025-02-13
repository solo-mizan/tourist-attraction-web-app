import { LoginFormCard } from "@/components/login-form-card"

const SignupPage = () => {

    return (
        <div className="bg-gray-100 p-10">
            <h1 className="bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 font-semibold text-transparent uppercase tracking-tight text-3xl text-pretty text-center p-10">Welcome Back To Our Tourist Attraction Spot App!</h1>
            <div className=" flex items-center justify-center  p-4">
                <LoginFormCard />
            </div>
        </div>
    )
}

export default SignupPage;