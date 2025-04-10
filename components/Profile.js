import {useState} from "react";
import styles from './Profile.module.css'

const defaultUser = {
    email: "",
    name: ""
}

const Profile = ({user}) => {

    return (
        <>
            <div className={styles.box}>
                <div className={styles.label}>
                    <h2>Email: </h2>
                    <h2>{user.email}</h2>
                </div>
                <div className={styles.label}>
                    <h2>Name: </h2>
                    <h2>{user.name}</h2>
                </div>
            </div>
        </>
    )
}
export default Profile;