import React from 'react'
import { useParams } from 'react-router'

function User() {
  const {userid}=useParams()
  return (
    <center>
    <div className='bg-gray-400 text-white text-3xl p-4'>User{userid}</div>
    </center>
  )
}

export default User