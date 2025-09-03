import React from 'react';
import Email from '../Assets/email.svg?react';
import Phone from '../Assets/phone.svg?react';

const Footer = () => {
  return (
    <footer
      id="contato"
      className="bg-green-800 pt-[120px] pb-[60px] scroll-mt-28"
    >
      <div className="container flex gap-10">
        <div className="text-gray-400">
          <p className="text-2xl mb-[60px] max-w-[550px]">
            Estou disponível para novos projetos no momento. Entre em contato
            comigo e marcamos uma conversa 👋
          </p>
          <p className="text-lg">
            Rodrigo Gonçalves. Alguns direitos reservados
          </p>
        </div>

        <ul className="text-white text-2xl">
          <li className="flex gap-2 items-center mb-5">
            {' '}
            <Email /> rodrigoncalves.net@outlook.com
          </li>
          <li className="flex gap-2 items-center">
            {' '}
            <Phone /> 31 99999-9999
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
