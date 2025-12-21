import React from 'react'

export default function HobbyCard({ title, children }) {
  return (
    <li className='bg-white/5 p-4 rounded-xl shadow-lg'>
        <h4 className='mb-2 font-semibold'>{title}</h4>
      {children}
    </li>
  )
}
