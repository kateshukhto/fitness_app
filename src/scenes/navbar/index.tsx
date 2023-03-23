import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png'
import Link from "@/scenes/navbar/Link";

type Props = {
  selectedPage: string,
  onSelectedPage: (value: string) => void
}
const Navbar = ({ selectedPage, onSelectedPage }: Props) => {
  const flexBetween = 'flex items-center justify-between'
  return <nav>
    <div className={`${flexBetween} fixed top-0 z-30 py-6 w-full`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>

        <div className={`${flexBetween} w-full gap-16`}>
          <img alt={'logo'} src={Logo}/>

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
              <button>Become a Member</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar