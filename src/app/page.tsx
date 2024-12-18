import About from '@/components/About-us/About';
import Banner from '../components/Banner/Banner'
import OurFinance from '@/components/OurFinance/OurFinance';
import Testimonial from '@/components/Testimonial/Testimonial';

export default function Home() {
  return (
    <div className='space-y-24 pb-20'>
      <Banner />
      <About />
      <OurFinance />
      <Testimonial />
    </div>
  );
}
