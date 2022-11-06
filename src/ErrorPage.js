import React from "react"
import {useNavigate} from "react-router-dom"
import { Helmet } from "react-helmet-async"
function ErrorPage() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/CountHook")
  }
  return (
    <div className="error">
      <Helmet>
    <title>Error page</title>
    <meta name="description" content="404 page to show pages that do not exist "/>
    <link rel='canonical' href='/ErrorPage' />
  </Helmet>
     <div className="error-content"> <h1>404 Page not found....</h1> 
     <h2>PAGE NOT FOUND</h2> 
     <button type="button" onClick={handleClick}> back to home</button>
    </div>
    </div> 
  )
}export default ErrorPage