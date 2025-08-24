export const metadata = {
  title: 'ModZinc Studio',
  description: 'Content management for ModZinc portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


