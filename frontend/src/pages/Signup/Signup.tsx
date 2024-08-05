import React from 'react'
import Quote from '../../Components/Quotes'
import Auth from '../../Components/Auth'

const Signup = () => {
  return <div className="grid lg:grid-cols-2 min-h-screen w-full">

  <Quote/>
  <Auth type="signup"/>

</div>
}

export default Signup
