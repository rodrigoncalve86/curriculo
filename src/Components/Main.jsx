import React from 'react';
import foto from '../Assets/foto.jpg';

const Main = () => {
  return (
    <main className="bg-gradient-to-b pt-[120px]">
      <div className="container flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-7xl text-white font-bold mb-8">
            Desenvolvedor <br />
            Front End & <br />
            UX/UI Designer
          </h2>
          <p className="text-2xl text-gray-400">
            Localizado em Sete Lagoas, Minas Gerais 🤙
          </p>
        </div>

        <div>
          <img className="foto" src={foto} alt="Perfil" />
        </div>
      </div>
    </main>
  );
};

export default Main;
