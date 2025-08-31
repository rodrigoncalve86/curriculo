import React from 'react';

const Formacao = () => {
  return (
    <section>
      <div className="container flex justify-between items-center">
        <div>
          <h1 className="font-bold text-[140px] leading-[168px] text-color">
            FOR <br />
            MA <br />
            ÇÃO
          </h1>
        </div>
        <div>
          <p className="paragraph-color text-2xl mb-9 max-w-[660px]">
            Minha formação mais recente inclui cursos especializados em{' '}
            <span className="font-bold">UX/UI Design</span> e{' '}
            <span className="font-bold">Desenvolvimento Front-End</span> pela{' '}
            <span className="font-bold">Origamid</span>, além de cursos de{' '}
            <span className="font-bold">Inglês</span> e{' '}
            <span className="font-bold">Espanhol</span>, complementada por uma
            busca contínua por atualização por meio de cursos online.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-100 paragraph-color border-l-8 border-green-800 p-5 rounded-md">
              <p className="text-[14px] mb-3">BACHAREAL</p>
              <p className="font-bold text-[18px] mb-12">
                Engenharia de Alimentos
              </p>
              <p className="text-[14px]">UFSJ</p>
            </div>

            <div className="bg-gray-100 paragraph-color border-l-8 border-green-800 p-5 rounded-md">
              <p className="text-[14px] mb-3">ESPECIALIZAÇÃO</p>
              <p className="font-bold text-[18px] mb-12">
                Desenvolvimento Front-End
              </p>
              <p className="text-[14px]">ORIGAMID</p>
            </div>

            <div className="bg-gray-100 paragraph-color border-l-8 border-green-800 p-5 rounded-md">
              <p className="text-[14px] mb-3">ESPECIALIZAÇÃO</p>
              <p className="font-bold text-[18px] mb-12">UX/UI Design</p>
              <p className="text-[14px]">ORIGAMID</p>
            </div>

            <div className="bg-gray-100 paragraph-color border-l-8 border-green-800 p-5 rounded-md">
              <p className="text-[14px] mb-3">IDIOMAS</p>
              <p className="font-bold text-[18px] mb-12">Inglês/Espanhol</p>
              <p className="text-[14px]">SKIPPERS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formacao;
