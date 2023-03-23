import Navbar from "@/scenes/navbar";
import { useState } from "react";
function App() {
  const [selectedPage, onSelectedPage] = useState('home')
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        onSelectedPage={onSelectedPage}
      />
    </div>
  )
}

export default App
