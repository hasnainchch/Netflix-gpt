import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between'>
        <div className='w-44'>
            <img src='https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940' alt='logo' />
        </div>
      <div className='flex p-2'>
        <img  className='w-12 h-12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ryX3GGvrrcJLPRYedJeu3btsXjFvlxG_Bh59Ysd1jg&s' alt='icon'/>
        <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
      </div>
    </div>
  )
}

export default Header