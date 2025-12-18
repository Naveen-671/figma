import "~/styles/landing.css";
import LandingNav from "~/components/landing/LandingNav";
import LandingHero from "~/components/landing/LandingHero";
import LandingFeatures from "~/components/landing/LandingFeatures";
import LandingFooter from "~/components/landing/LandingFooter";
import LandingFAQ from "~/components/landing/LandingFAQ";

export default function HomePage() {
    return (
        <div className="landing-page">
            <LandingNav />
            <main>
                <LandingHero />
                <LandingFeatures />
                <LandingFAQ />
            </main>
            <LandingFooter />
        </div>
    );
}
