import React from "react"
import { LanguageContext } from '../../plugins/gatsby-plugin-language-chooser'
import { Link } from "gatsby"

const IndexPage = () => {
  const languageContext = React.useContext(LanguageContext)

  const onChangeLanguage = (e) => {
    languageContext.changeLanguage(e.target.value)
  }

 return (
   <div>
    <p>Our current language is: <strong>{languageContext.language}</strong></p>

    <select onChange={onChangeLanguage}>
      <option value="english">English</option>
      <option value="spanish">Spanish</option>
      <option value="french">French</option>
      <option value="german">German</option>
    </select>

    <Link to="/page-2">Go to page 2</Link>
   </div>
 )
}

export default IndexPage
