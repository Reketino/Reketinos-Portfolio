import React from 'react'

export default function TechEmailBg() {
  return (
    <main className='absolute inset-0 overflow-hidden pointer-events-none'>
      
      <div className='absolute inset-0 bg-linear-to-br from-blue-900/30 via-blue-800/10 to-black/20' />

      <section className='absolute inset-0
      bg-[radial-gradient(circle,rgba(52,152,219,0.25) _1px,transparent_1px)]
      bg-size-[22px_22px] opacity-20' />

      <svg
      className='absolute w-[500px] h-[500px] -top-40 -right-40 text-blue-500/10 blur-3xl'
      fill='currentColor'
      viewBox='0 0 20 20'
      >
        <path d='M2.94 6.34L10 11.28l7.06-4.94A2 2 0 0015.5 5h-11a2 2 0 00-1.56.66z"' />
        <path d="M18 8.18l-7.4 5.18a1 1 0 01-1.2 0L2 8.18V14a2 2 0 002 2h12a2 2 0 002-2V8.18z" />
      </svg>


    </main>
  )
}
