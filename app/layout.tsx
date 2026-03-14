export const dynamic = "force-dynamic";

export const metadata = {
  title: "AURA",
  description: "A Blaq House Entertainment Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
