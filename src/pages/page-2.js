import React from "react"
import { LanguageContext } from '../../plugins/gatsby-plugin-language-chooser'
import { Link } from "gatsby"

const IndexPage = () => {
  const languageContext = React.useContext(LanguageContext)

  return (
    <div>
      <p>Page 2 and our language still is: <strong>{languageContext.language}</strong></p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default IndexPage

