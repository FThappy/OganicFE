import BreadCrumb from '@/components/BreadCrumb/BreadCrumb';

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <BreadCrumb />
      {children}
    </section>
  );
}
