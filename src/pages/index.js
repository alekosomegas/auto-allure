import Image from 'next/image'
import { Inter } from 'next/font/google'
import CarBook from '@/components/CarBook'
import LongTermBook from '@/components/LongTermBook'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ dateRange, setDateRange, carsResults, setCarsResults }) {
  // const [inFocus, setInFocus] = React.useEffect()


  return (
    <main>
      <div className='main-container flex justify-stretch overflow-hidden'>  

        <div className='short grid items-center justify-center w-3/5 hover:w-4/6 hover:scale-110 ease-in-out duration-300'>
          <form className=''>
            <CarBook 
            dateRange={dateRange}
            setDateRange={setDateRange}
            carsResults={carsResults}
            setCarsResults={setCarsResults}/>
          </form>
        </div>

        <div className='long grid items-center justify-center w-2/5 hover:w-4/5 hover:scale-110 ease-in-out duration-300'>
          <div className=''>
            <LongTermBook />
          </div>

        </div>
        
      </div>
    </main>
  )
}

