export default function ShopLayout({
  children,
  modalProduct
}: {
  children: React.ReactNode;
  modalProduct: React.ReactNode;
}) {
  return (
    <section>
      {children}
      {modalProduct}
    </section>
  );
}
