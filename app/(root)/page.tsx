import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
  const loggedIn = await getLoggedInUser()
  
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcome,'
            user={loggedIn?.name || 'Guest'}
            subtext='Simplify your financial journey, one transaction at a time'
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={658.12}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 150}, {currentBalance: 508.12}]}
      />
    </section>
  )
}

export default Home