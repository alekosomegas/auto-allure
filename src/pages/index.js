import React from 'react'
import { Inter } from 'next/font/google'
import CarBook from '@/components/CarBook'
import LongTermBook from '@/components/LongTermBook'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ dateRange, setDateRange, carsResults, setCarsResults, locations, setLocations, step, setDelivery}) {
  const [show, setShow] = React.useState(false)

  return (
    <main>
      <Navbar />
      <iframe  className='w-full h-[900px]' src="https://rentsyst.com/settings/iframe-constructor/?token=bJ6LkkUGpV4Pq8gzkcXsvnK020Mr7XpH&id=4239"></iframe>
      <div className='text-white main-container flex justify-stretch overflow-hidden '>  

        <div className='short grid gap-4 items-center justify-center w-3/5 hover:w-4/6 hover:scale-100 ease-in-out duration-300 max-sm:grow min-w-fit'>
          <div className=''>
            <CarBook 
            dateRange={dateRange}
            setDateRange={setDateRange}
            carsResults={carsResults}
            setCarsResults={setCarsResults}
            locations={locations}
            setLocations={setLocations}
            step={step}
            setDelivery={setDelivery}
            />
          </div>
        </div>

        <div 
          onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} 
          className='long grid items-center justify-center w-2/5 hover:w-4/5 hover:scale-100 ease-in-out duration-300 max-sm:hidden'>
          <div className=''>
            <LongTermBook
            show={show}
            setShow={setShow} />
          </div>

        </div>
        
      </div>

      <section  id="about-us" className='h-[40px]'></section>
      <div id="aboutUs" className='text-center mt-5 mx-6 lg:mx-72 text-black'>
        <h1><strong>Auto Allure</strong> <br/><small>Car Rentals Limassol</small></h1>
        <br/>
        <p>Welcome to <strong>Allure Luxury Car Rentals</strong>, the best choice for <strong>car rental in Limassol. </strong>
        We offer a wide range of vehicles, from <strong>economy</strong> to <strong>luxury</strong>, to suit your needs and budget.
        <br/><br/>
        We are based in Leoforos Amathous 32, Limassol but we also offer <strong>delivery and collectionf</strong>at other locations in Cyprus, including airports, for a small fee.
        We have no hidden charges, and we guarantee the best price for your car rental in Limassol.

        You can book your car online easily and securely through our website, or you can contact us by phone or email if you have any questions or special requests. We are available 24/7 to assist you with your car rental needs.
         <br/><br/>
        We are more than a car rental company. We are your partner in exploring the beautiful island of Cyprus.
        With your own car, you can explore the island and its attractions and discover the rich history and culture of Cyprus.
        <br/><br/>
        Book your car with <strong>Allure Luxury Car Rentals</strong> today and enjoy the comfort and convenience of driving in Cyprus.
        </p>

        <section  id="long-term" className='h-[40px]'></section>
        <br/><br/>
        <h1>Long Term Rentals</h1>
        <br/><br/>
        <p>Are you looking for a car rental in Limassol for a <strong>month or longer?</strong> If so, you should consider our long term contract option. With our long term contract, you can enjoy:
        </p>
        <ul className='text-start'>
          <li>Lower monthly rates than regular car rental</li>
          <li>Free pick up and drop off at any address in Limassol</li>
          <li>The option to swap your car for another one during the rental period</li>
          <li>The flexibility to cancel or extend your contract at any time</li>
        </ul>
        <p>
        Our long term contract is perfect for anyone who needs a car for an extended period of time. You can choose from our wide range of vehicles, from economy to luxury, and drive around the beautiful island of Cyprus with ease.
        </p>
      </div>

      <section  id="contact-us" className='h-[40px]'></section>
      <div className='p-4 bg-black h-52 text-white'>
        <h3>Contact Us</h3>
        <h7>Tel: +357-99 667777</h7>
        <br></br>
        <h7>Email: autoallure@protonmail.com</h7>
        <br></br>
        <h7>Address: Leoforos Amathous 32, Zanna Complex Block 1 Shop 8, Limassol, 4532</h7>
      </div>

    </main>
  )
}

