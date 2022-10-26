import '@styles/globals.css'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
