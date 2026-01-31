import React from 'react';

const Main = ({ children }) => {
  return (
    <main className="w-full min-h-screen relative bg-black text-white">
      <div className="relative z-10 flex flex-col w-full h-full">
        {children}
      </div>
    </main>
  );
};

export default Main;
