import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export const AppLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
