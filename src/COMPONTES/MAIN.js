import React from 'react'

function MAIN() {
  return (
    <div className="middle_bar">
      <div className="about">
        Unlimited movies,<br /> TV shows and more
      </div>
      <div className="prize">Starts at ₹149. Cancel at any time.
      </div>
      <div className="watch">Ready to watch? Enter your email to create or restart your membership.
      </div>
      <div className="bottom_bar">
        <input type="email" placeholder="Email address" class="email"></input>
        <button className="start">Get Started  </button>
      </div>

    </div>
  )
}

export default MAIN