import Header from '../components/Header';
import WelcomeSection from '../components/WelcomeSection';
import CardsGrid from '../components/CardsGrid';
import EarningsCard from '../components/EarningsCard';
import TeamSnapshot from '../components/TeamSnapshot';
import InviteEarn from '../components/InviteEarn';
import HowItWorks from '../components/HowItWorks';
// import SectionDivider from '../components/SectionDivider';
import WhatsNext from '../components/WhatsNext';
import InsightsToGrowFaster from '../components/InsightsToGrowFaster';
import BottomNavigation from '../components/BottomNavigation';

export default function Home() {
  return (
    <div className="home-container">
      <Header />

      <main className="main-content-home">
        <WelcomeSection />
        <CardsGrid />
        <EarningsCard />
        <TeamSnapshot />
        <InviteEarn />
        <HowItWorks />
        {/* <SectionDivider /> */}
        <WhatsNext />
        <InsightsToGrowFaster />
      </main>

      <BottomNavigation />
    </div>
  );
}
