import './globals.css'

export const metadata = {
  title: 'UI Spotify',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-black to-green-900 text-zinc-50">{children}</body>
    </html>
  )
}
