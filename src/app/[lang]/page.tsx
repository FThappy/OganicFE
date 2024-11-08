'use client';

import Categories from '@/components/Home/Categories';
import FeatureProduct from '@/components/Home/FeatureProduct';
import NumberUser from '@/components/Home/NumberUser';
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
    </main>
  );
}
