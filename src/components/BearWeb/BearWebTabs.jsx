import React from 'react'

export default function BearWebTabs() {
  return (
    <section className='bw-tabs'>
      <div className='bw-tab active'>
        <img src='/icons/webbear-favicon.png' className='w-4 h-4' />
        <span>BearWeb</span>
      </div>

      <div className='bw-tab disabled'>
        +
      </div>
    </section>
  );
}
