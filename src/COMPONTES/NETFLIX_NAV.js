import React from 'react'

function NETFLIX_NAV({ name, age }) {

  return (
    <div className="navbar">
      <div className="heading">{name}{age}
      </div>
      <div className="top_bar" >
        <div className="">
          <select className="languages">
            <option value="">English</option>
            <option value="">Hindi</option>
            <option value="">German</option>
            <option value="">Arabic</option>
          </select></div>
        <button className="sign_in">
          sign in
        </button>
      </div>
    </div>
  )
}

export default NETFLIX_NAV