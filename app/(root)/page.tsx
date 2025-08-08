import HeaderBox from '@/components/HeaderBox'
import RightSiderbar from '@/components/RightSiderbar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: "John", lastName: "Doe", email: "johndoe@gmail.com"}; // Example user data
  return (
    <section className='home'>
     <div className='home-content'>
     < header className='home-header'>
    <HeaderBox 
    type="greeting"
    title="welcome"
    user={loggedIn.firstName || "Guest" }
    subtext="Access your account and manage your finances securely."
    />

    <TotalBalanceBox 
    accounts={[]}
    totalBanks={1}
    totalCurrentBalance={1250.35}
    />
     </header>

     RECENT TRANSACTIONS
     </div>

     <RightSiderbar 
     user={loggedIn}
     transactions={[]}
     banks={[{ currentBalance:1250.35}, { currentBalance:1250.35}]}
     />
    </section>
  )
}

export default Home