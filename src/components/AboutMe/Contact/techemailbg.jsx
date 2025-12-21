import React from 'react'


export default function TechEmailBg() {
  return (
    <main className='
    absolute inset-0  pointer-events-none
    bg-cover bg-center bg-no-repeat
    bg-[crisp-edges]
    '
    style={{ backgroundImage: "url('/contact1.png')" }}
    >
      
      <div className='
      absolute inset-0 bg-linear-to-br
    from-black/10 via-transparent to-black/20
    ' 
    />

      <section className='absolute inset-0
      bg-[radial-gradient(circle,rgba(52,152,219,0.25) _1px,transparent_1px)]
      bg-size-[22px_22px] opacity-10
      ' 
      />

      <svg
      className='absolute w-[500px] h-[500px] -top-20 -right-40 text-blue-500/5 blur-sm'
      fill='currentColor'
      viewBox='0 0 20 20'
      >
        <path d='M2.94 6.34L10 11.28l7.06-4.94A2 2 0 0015.5 5h-11a2 2 0 00-1.56.66z"' />
        <path d="M18 8.18l-7.4 5.18a1 1 0 01-1.2 0L2 8.18V14a2 2 0 002 2h12a2 2 0 002-2V8.18z" />
      </svg>
    </main>
  )
}
