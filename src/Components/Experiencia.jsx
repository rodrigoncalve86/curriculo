import React from 'react';

const Experiencia = () => {
  return (
    <section className="my-[120px]">
      <div className="container flex justify-between items-center">
        <div>
          <h1 className="font-bold text-[140px] leading-[168px] text-color">
            EXPE
            <br /> RIÊN
            <br />
            CIA
          </h1>
        </div>

        <div>
          <p className="paragraph-color text-2xl mb-9 max-w-[660px]">
            Desenvolvo projetos de <span className="font-bold">front-end</span>{' '}
            com <span className="font-bold">React</span>,{' '}
            <span className="font-bold">Tailwind</span> e{' '}
            <span className="font-bold">Next.js</span>, além de trazer minha
            experiência em <span className="font-bold">UX/UI</span> designer
            para criar interfaces <span className="font-bold"> intuitivas</span>{' '}
            e <span className="font-bold">visualmente impactantes.</span>
          </p>

          <div className="bg-gray-100 p-4 mb-5">
            <span className="inline-block text-[14px] paragraph-color">
              2025
            </span>
            <div className="flex gap-12 items-start">
              <div>
                <h3 className="font-bold text-[20px]  mb-2.5">Nexarion Tech</h3>
                <p className="text-[14px] paragraph-color max-w-[334px]">
                  Trabalhei na criação de componentes interativos com React e
                  otimizei layouts responsivos usando Tailwind CSS
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[20px] mb-2.5">
                  Desenvolvedor Júnior
                </h3>
                <div className="flex gap-2">
                  <span className="inline-block text-[14px] bg-gray-200 p-2.5 rounded-sm">
                    React
                  </span>
                  <span className="inline-block text-[14px] bg-gray-200 p-2.5 rounded-sm">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4">
            <span className="inline-block text-[14px] paragraph-color">
              2023
            </span>
            <div className="flex gap-12 items-start">
              <div>
                <h3 className="font-bold text-[20px]  mb-2.5">
                  Vynix Solutions
                </h3>
                <p className="text-[14px] paragraph-color max-w-[334px]">
                  Atuei desenvolvendo interfaces dinâmicas no Figma e auxiliando
                  na integração de designs com Tailwind CSS para projetos
                  inovadores de tecnologia
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[20px] mb-2.5">Estagiário</h3>
                <div className="flex gap-2">
                  <span className="inline-block text-[14px] bg-gray-200 p-2.5 rounded-sm">
                    UX Design
                  </span>
                  <span className="inline-block text-[14px] bg-gray-200 p-2.5 rounded-sm">
                    UI Design
                  </span>
                  <span className="inline-block text-[14px] bg-gray-200 p-2.5 rounded-sm">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiencia;
