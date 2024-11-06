import React from 'react'
import AnimatedCounter from './AnimatedCounter';
import DonutChart from './DonutChart';

const TotalBalanceBox = ({accounts=[], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
         <DonutChart accounts={accounts} />
      </div>
      <div className='flex flex-col gap-6'>
         <h2 className='header-2'>
            {totalBanks === 1 ? '1 Bank Account' : `${totalBanks} Bank Accounts`}
         </h2>
         <div className='flex flex-col gap-2'>
            <p className='total-balance-label'>Total Current Balance</p>
            <p className='total-balance-amount flex-center gap-2'>
               <span className='w-full'>
                  <AnimatedCounter amount={totalCurrentBalance} />
               </span>
            </p>
         </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox