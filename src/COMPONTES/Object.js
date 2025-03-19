import React from 'react'

function Object() {
  const user = [
    { name: 'adhil', age: 22, place: 'tvm' },
    { name: 'zoro', age: 23, place: 'northblue' },
    { name: 'luffy', age: 18, place: 'southblue' },
    { name: 'johnsnow', age: 25, place: 'kingsland' },

  ]


  return (

    <div>
      {
        user.map((user) => {
          return (
            <div>
              <h2>id</h2>
              <h4>user:{user.name}</h4>
              <h4>age: {user.age}</h4>
              <h4>place:{user.place}</h4></div>

          )
        })
      }

    </div>
  )
}

export default Object