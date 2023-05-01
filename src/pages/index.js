import Image from 'next/image'
import { Inter } from 'next/font/google'
import CarBook from '@/components/CarBook'
import LongTermBook from '@/components/LongTermBook'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [inFocus, setInFocus] = React.useEffect()


  return (
    <main>
      <div className='main-container flex justify-stretch overflow-hidden'>  

        <div className='short grid items-center justify-center w-3/5 hover:w-4/6 hover:scale-110 ease-in-out duration-300'>
          <form className=''>
            <CarBook />
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



{/* 
hover:scale-125 hover:w-1/2
<main>
<div className='flex flex-row justify-around h-screen place-items-center '>  
  <div className='bg-red-100 hover:scale-125'>
    <form>
      <CarBook />
    </form>
  </div>

  <div className='bg-green-100 w-1/3 hover:w-2/3'>
    <div className='flex justify-center'>
      <LongTermBook />
    </div>
  </div>
  
</div>
</main> */}