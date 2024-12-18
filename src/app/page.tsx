import About from '@/components/About-us/About';
import Banner from '../components/Banner/Banner'
import OurFinance from '@/components/OurFinance/OurFinance';
import Testimonial from '@/components/Testimonial/Testimonial';
import InvestorAndBusinesses from '@/components/InvestorAndBussines/InvestorAndBusinesses';
import Information from '@/components/Information/Information';

export default function Home() {
  return (
    <div className='space-y-24'>
      <Banner />
      <About />
      <OurFinance />
      <Testimonial />
      <InvestorAndBusinesses />
      <Information />
    </div>
  );
}
