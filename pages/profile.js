import {useGlobalContext} from "@/store";

const profilePage = () => {
    const { session } = useGlobalContext()

    return (
        <div>
            <h1>Your Profile</h1>
            <pre>{JSON.stringify(session, null, 4)}</pre>
        </div>
    )
}
export default profilePage