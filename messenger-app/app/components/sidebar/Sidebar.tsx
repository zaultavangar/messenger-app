import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from './MobileFooter'
import getCurrentUser from "@/app/actions/getCurrentUser";


async function Sidebar({children}: {
  children: React.ReactNode;
}) {

  const currentUser = await getCurrentUser()

  // exclamation point means possible for user to be null
  return (
    <div className='h-full'>
      <DesktopSidebar currentUser={currentUser!}/> 
      <MobileFooter/>
      <main className='lg:pl-20 h-full'>
        {children}
      </main>
    </div>
  )
}

export default Sidebar