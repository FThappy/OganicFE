import { default as DefaultNotFound } from '@/app/not-found';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Subcribe from '@/components/Subcribe/Subcribe';

export default async function NotFound() {
  return (
    <section>
      <BreadCrumb />
      <DefaultNotFound />;
      <Subcribe />
    </section>
  );
}
