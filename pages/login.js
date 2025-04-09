import {useGlobalContext} from "@/store";
import {useState} from "react";
import {useRouter} from "next/router";
import AuthenticationAPI from "@/lib/api/Users";

const defaultLogin = {
    email: "",
    password: ""
}

const loginPage = () => {

    const [user, setUser] = useState(defaultLogin)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(false)

    const router = useRouter()

    const { session, login, logout } = useGlobalContext()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        user[name] = value
        setUser(user)
    }

    const validateUser = () => {
        let errors = defaultLogin
        let isValid = true

        if (user.email.trim().length === 0){
            errors.mail = "Email is required"
            isValid = false
        }
        if (user.password.trim().length === 0){
            errors.password = "Email is required"
            isValid = false
        }
        return { isValid, errors }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultLogin)

        const validationResult = validateUser()
        if (!validationResult.isValid){
            setErrors(validationResult.errors)
            setIsLoading(false)
            return
        }
        try {
            const data = await AuthenticationAPI.login(user)
            login(data)
            console.log("Es kommt zum Try")
            await router.push('/')
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div>
                    <input onChange={handleChange} type="email"
                           name="email" placeholder="Email" />
                </div>

                <div>
                    <input onChange={handleChange} type="password"
                           name="password"  placeholder="Password" />
                </div>
                <button className={"button"} disabled={isLoading}>
                    {isLoading ? "...Loading" : "Login"}
                </button>
            </form>
        </div>

    )
}
export default loginPage