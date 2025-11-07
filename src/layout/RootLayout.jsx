import ThemeController from '@/components/ThemeContoller'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div className='min-h-screen bg-base-100'>
        <header className='shadow-xl py-6 px-8 md:px-20 flex justify-between items-center'>
            <h2 className='font-bold text-md md:text-2xl'>Where in the world?</h2>
            <ThemeController/>
        </header>
        <Outlet/>
    </div>
  )
}
