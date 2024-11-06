import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
  const loggedIn = { firstName: 'Joseph' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcome'
            user={loggedIn?.firstName || 'Guest'}
            subtext='Simplify your financial journey, one transaction at a time.'
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={4}
            totalCurrentBalance={1400.92}
          />
        </header>
      </div>
    </section>
  )
}

export default Home