import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <div className="flex">
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};