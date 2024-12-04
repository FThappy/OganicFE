import UserDetailNavigation from '@/components/UserDetail/UserDetailNavigation';

export default function UserDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='mt-10 flex gap-6 items-start container mb-10'>
      <UserDetailNavigation />
      {children}
    </section>
  );
}
