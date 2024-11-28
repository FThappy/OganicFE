import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';
import SubTotal from '@/components/Checkout/SubTotal';
import Subcribe from '@/components/Subcribe/Subcribe';

export default function CheckOutLayout({ children }: { children: React.ReactNode; modalProduct: React.ReactNode }) {
  return (
    <section className='container flex flex-col items-cente pt-8'>
      <section className='flex gap-[22px] items-start'>
        <section className='flex flex-col w-[872px] gap-6'>{children}</section>
        <section className='flex flex-col w-[424px]'>
          <SubTotal />
        </section>
      </section>
    </section>
  );
}
