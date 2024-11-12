// App.tsx or another main component file
import React from 'react';
import { SidebarProvider } from './SidebarContext';
import Navbar from './Navbar'; // assuming Navbar uses the sidebar toggle
import Sidebar from './Sidebar'; // example sidebar component
// import MainContent from './MainContent';
import CategoryPage from './CategoryPage';

const App: React.FC = () => {
  return (
    <SidebarProvider>
      <Navbar />
      <Sidebar />
      <CategoryPage />
    </SidebarProvider>
  );
};

export default App;
