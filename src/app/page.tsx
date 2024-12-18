import About from '@/components/About-us/About';
import Banner from '../components/Banner/Banner'
import OurFinance from '@/components/OurFinance/OurFinance';

export default function Home() {
  return (
    <div className='space-y-24'>
      <Banner />
      <About />
      <OurFinance />
    </div>
  );
}
