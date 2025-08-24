import React from 'react';
import Logo from '../Assets/logo.svg?react';

const Header = () => {
  return (
    <header className="h-28 shadow-md">
      <div className="container h-full flex justify-between items-center ">
        <a href="">
          <Logo />
        </a>
        <nav>
          <ul className="flex gap-10 text-xl text-gray-400">
            <li>
              <a href="" className="block p-4 hover:text-green-800">
                Experiência
              </a>
            </li>
            <li>
              <a href="" className="block p-4 hover:text-green-800">
                Formação
              </a>
            </li>
            <li>
              <a href="" className="block p-4 hover:text-green-800">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
