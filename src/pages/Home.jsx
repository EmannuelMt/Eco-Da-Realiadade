import HeroBanner from '../components/Hero/HeroBanner'
import FeaturesSection from '../components/Home/FeaturesSection'
import HowItWorks from '../components/Home/HowItWorks'
import EnigmasSection from '../components/Home/EnigmasSection'
import MysteryOfTheWeek from '../components/Home/MysteryOfTheWeek'
import Testimonials from '../components/Home/Testimonials'
import FeaturedCampaigns from '../components/Home/FeaturedCampaigns'
import HallOfFame from '../components/Home/HallOfFame'
import NewsUpdates from '../components/Home/NewsUpdates'
import BlogPreview from '../components/Home/BlogPreview'
import Newsletter from '../components/Home/Newsletter'
import Partners from '../components/Home/Partners'
import FAQ from '../components/Home/FAQ'
import FinalCTA from '../components/Home/FinalCTA'

export default function Home() {
  return (
    <div className="home-page">
      <HeroBanner />
      
      <div className="sections-container">
        <FeaturesSection />
        <HowItWorks />
        <EnigmasSection />
        <MysteryOfTheWeek />
        <Testimonials />
        <FeaturedCampaigns />
        <HallOfFame />
        <NewsUpdates />
        <BlogPreview />
        <Newsletter />
        <Partners />
        <FAQ />
        <FinalCTA />
      </div>
    </div>
  )
}