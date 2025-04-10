import {useGlobalContext} from "@/store";
import Profile from "@/components/Profile";


const profilePage = () => {
    const { session } = useGlobalContext()
    console.log(session)

    return (
        <div>
            <h1>Your Profile</h1>
            {session && <Profile user={session.user}></Profile>}
        </div>
    )
}
export default profilePage

