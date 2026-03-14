export const metadata = {
  title: "AURA Studio",
  description: "AURA — A Blaq House Entertainment Company"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{margin:0}}>
        {children}
      </body>
    </html>
  )
}
