import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Сторінку не знайдено</h1>
      <p style={paragraphStyles}>
        Вибачте 😔, ми не змогли знайти те, що ви шукали.
        <br />
        <br />
        <Link to="/">Повернутися на головну сторінку</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
