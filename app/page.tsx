// // import Image from "next/image";
// // import styles from "./page.module.css";
// import Navbar from "./Navbar";

// export default function Home() {
//   return (
//     <>
//     <div>
// <Navbar/>

//     </div>
//     </>
  
  
//   );
// }


import React from 'react'
// import SignInForm from './components/SignInForm'

// Uncomment these imports when needed:
// import { SidebarProvider } from './SidebarContext'
// import Navbar from './Navbar'
// import Sidebar from './Sidebar'
// import MainContent from './MainContent'
// import CategoryPage from './CategoryPage'
// import ProductPage from './components/Products/ProductPage'
// import MarketplaceLayout from './components/Products/MarketplaceLayout'
import Navbar from './Navbar'
// import MarketplaceLayout from './MarketplaceLayout'
// import Sidebar from './Sidebar'
import CategoryPage from './CategoryPage'
// import ProductCarousel from './ProductCarousel'

const Page = () => {
  return (
    <div>
      {/* <SidebarProvider> */}
        <Navbar />
        {/* <MarketplaceLayout /> */}

        {/* <Sidebar />  */}
        {/* <SidebarContext /> */}
        <CategoryPage />
        {/* <ProductCarousel/> */}
      {/* </SidebarProvider>
      */}
    </div>
  )
}

export default Page