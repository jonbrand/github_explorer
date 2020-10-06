import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/60719606?s=460&u=1897c617dd0879616368a3880c8ce6902af48881&v=4"
            alt="Jonatas Brandão"
          />
          <div>
            <strong>GoStack---Desafio-05---Fundamentos-de-Node.js</strong>
            <p>
              Desafio 05 do bootcamp GoStack da Rocketseat sobre os fundamentos
              do Node.js.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/60719606?s=460&u=1897c617dd0879616368a3880c8ce6902af48881&v=4"
            alt="Jonatas Brandão"
          />
          <div>
            <strong>GoStack---Desafio-05---Fundamentos-de-Node.js</strong>
            <p>
              Desafio 05 do bootcamp GoStack da Rocketseat sobre os fundamentos
              do Node.js.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/60719606?s=460&u=1897c617dd0879616368a3880c8ce6902af48881&v=4"
            alt="Jonatas Brandão"
          />
          <div>
            <strong>GoStack---Desafio-05---Fundamentos-de-Node.js</strong>
            <p>
              Desafio 05 do bootcamp GoStack da Rocketseat sobre os fundamentos
              do Node.js.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
