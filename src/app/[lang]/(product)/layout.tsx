import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import Subcribe from '@/components/Subcribe/Subcribe';

export default function ProductLayout({
  children,
  modalProduct
}: {
  children: React.ReactNode;
  modalProduct: React.ReactNode;
}) {
  return (
    <section>
      <BreadCrumb />
      {children}
      <Subcribe />
    </section>
  );
}
