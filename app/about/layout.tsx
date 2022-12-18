export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>About Layout</h1>
      {children}
    </section>
  );
}
