import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png'
import Link from "@/scenes/navbar/Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage,
  onSelectedPage: (value: SelectedPage) => void
}
const Navbar = ({isTopOfPage, selectedPage, onSelectedPage }: Props) => {
  const [menuToggle, setMenuToggle] = useState<boolean>(false)
  const isAboveMedium = useMediaQuery("(min-width: 1060px)")
  const flexBetween = 'flex items-center justify-between';
  const navbarBg = isTopOfPage ? '' : 'bg-primary-100 drop-shadow'

  return <nav>
    <div className={`${navbarBg} ${flexBetween} fixed top-0 z-30 py-6 w-full`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>

        <div className={`${flexBetween} w-full gap-16`}>
          <img alt={'logo'} src={Logo}/>

          {
            isAboveMedium ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} text-sm gap-8`}>
                  <Link
                    page='Home'
                    selectedPage={selectedPage}
                    onSelectedPage={onSelectedPage}
                  />
                  <Link
                    page='Benefits'
                    selectedPage={selectedPage}
                    onSelectedPage={onSelectedPage}
                  />
                  <Link
                    page='Our Classes'
                    selectedPage={selectedPage}
                    onSelectedPage={onSelectedPage}
                  />
                  <Link
                    page='Contact Us'
                    selectedPage={selectedPage}
                    onSelectedPage={onSelectedPage}
                  />
                </div>

                <div className={`${flexBetween} text-sm gap-8`}>
                  <p>Sign In</p>
                  <ActionButton
                    setSelectedPage={onSelectedPage}
                  >Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className='rounded-full bg-secondary-500 p-2'
                  onClick={() => setMenuToggle(!menuToggle)}
                >
                  <Bars3Icon className='h-6 w-6 text-white'/>
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>

    { !isAboveMedium && menuToggle && (
       <div className='fixed right-0 bottom-0 z-40 w-[300px] bg-primary-100 h-full drop-shadow-2xl'>
          <div className="flex justify-end p-12">
            <button
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <XMarkIcon className="h-6 w-6 text-gray-400"/>
            </button>
          </div>

         <div className="ml-[33%] flex flex-col gap-10 text-2xl">
           <Link
             page='Home'
             selectedPage={selectedPage}
             onSelectedPage={onSelectedPage}
           />
           <Link
             page='Benefits'
             selectedPage={selectedPage}
             onSelectedPage={onSelectedPage}
           />
           <Link
             page='Our Classes'
             selectedPage={selectedPage}
             onSelectedPage={onSelectedPage}
           />
           <Link
             page='Contact Us'
             selectedPage={selectedPage}
             onSelectedPage={onSelectedPage}
           />
         </div>
       </div>
      )
    }
  </nav>
}

export default Navbar