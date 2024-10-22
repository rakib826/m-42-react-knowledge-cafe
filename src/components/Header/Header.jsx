import React from 'react';
import profile from '../../assets/profile.png'
const Header = () => {
  return (
    <header className='flex justify-between items-center py-4 mx-auto max-w-5xl border-b-2 border-blue-100'>
      <h1 className='text-4xl font-extrabold'>Knowledge Cafe</h1>
      <img className='w-12 h-12 rounded-full' src={profile} alt="" />
    </header>
  );
};

export default Header;