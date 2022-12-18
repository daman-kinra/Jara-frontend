export default function TodoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>TODO Layout</h1>
      {children}
    </section>
  );
}
