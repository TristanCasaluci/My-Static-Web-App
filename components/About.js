import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <h1>About</h1>
            <p>
                Welcome to CampusNews, your go-to Web-App for staying up-to-date with the latest news and happenings at
                the ICT-Campus! Whether it’s exciting updates, upcoming events, or insights into what’s buzzing around
                the campus, we’ve got you covered. Our mission is simple: to keep the ICT-Campus community informed,
                connected, and engaged with everything that matters.
                <br/><br/>
                CampusNews was brought to life by our dedicated developer, Tristan, who works at the ICT-Campus Bern as
                part of Die Schweizerische Post. With a passion for technology and a deep understanding of the campus
                ecosystem, Tristan has crafted this platform to ensure you never miss a beat. From breaking news to
                real-time updates, CampusNews is designed to be your reliable source for all things ICT-Campus.
                <br/><br/>
                We’re proud to serve this vibrant community and are committed to making your experience as seamless and
                informative as possible. Have feedback or ideas? Feel free to reach out — CampusNews is built for you,
                and we’re always eager to hear what you think!
                <br/><br/>
                Stay curious, stay connected, and let’s keep the ICT-Campus thriving together!
            </p>
        </div>
    )
}
export default About;