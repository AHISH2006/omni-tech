import "../styles/home.css"
import OmnitrixNav from "../components/omnitrixNav"

export default function HomePage() {
    return (
        <div className="home-page">
            {/* Optional static background */}
            <div className="home-bg"></div>

            {/* Content */}
            <div className="home-content">
                <h1 className="home-title">
                    <span>OMNI</span>
                    <span>VERSE</span>
                    <OmnitrixNav />
                </h1>
                <p className="home-tagline">Welcome to the Omniverse</p>
            </div>
        </div>
    )
}
