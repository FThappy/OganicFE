import BestSeller from '@/components/Home/BestSeller';
import Blog from '@/components/Home/Blog';
import Brand from '@/components/Home/Brand';
import Categories from '@/components/Home/Categories';
import FeatureProduct from '@/components/Home/FeatureProduct';
import NumberUser from '@/components/Home/NumberUser';
import SaleTime from '@/components/Home/SaleTime';
import Subscribe from '@/components/Home/Subscribe';
import Testimonial from '@/components/Home/Testimonial';
import Welcome from '@/components/Home/Welcome';
import WhyChoseUs from '@/components/Home/WhyChoseUs';

export default function Home() {
  return (
    <main className={``}>
      <Welcome />
      <FeatureProduct />
      <Categories />
      <WhyChoseUs />
      <NumberUser />
      <SaleTime />
      <BestSeller />
      <Blog />
      <Testimonial />
      <Brand />
      <Subscribe />
    </main>
  );
}
