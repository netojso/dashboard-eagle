import React, { useState, useCallback, } from 'react';

import {
  Container,
  Painel,
  ModalUser,
  ModalInfoUser,
  OptionsInfo,
  OptionItem,
  Row,
  UpdateButton,
} from './styles';
import Input from '../../components/Input';
import { AiFillCamera } from 'react-icons/ai';

interface IProps {
  clientId: Client;
  }

interface Client {
    id: number;
    avatar: string,
    name: string,
    apelido: string,
    contato: string,
    tipo: string,
    cpf: string,
    data: number,
    nascimento: string;
}


const EditClient: React.FC<IProps> = ({ clientId }) => {
  const [selectedOption, setSelectedOption] = useState(1);

  // Função para trocar o state entre as opções (Dados Pessoais, Endereço, etc)
  const handleOption = useCallback(item => {
    setSelectedOption(item);
  }, []);


  return (
    <Container>
      <Painel>
        <ModalUser>
          <label htmlFor="avatar">
            <AiFillCamera  />
            <input type="file" name="avatar" id="avatar"/>
          </label>

          <img src={clientId.avatar} alt="User" />

          <strong>Nome Fantasia</strong>

          <p>Domínio</p>

          <p>Empresa com nome completo e letra</p>

          <div>
            <strong>Número de chamadas</strong>
            <p>14</p>
          </div>

          <strong>Ativada</strong>

          <button type="button">Editar perfil</button>
        </ModalUser>

        <ModalInfoUser>
          <OptionsInfo>
            <OptionItem active={selectedOption === 1}>
              <button onClick={() => handleOption(1)} type="button">
                Dados Pessoais
              </button>
            </OptionItem>
            <OptionItem active={selectedOption === 2}>
              <button onClick={() => handleOption(2)} type="button">
                Endereço
              </button>
            </OptionItem>
            <OptionItem active={selectedOption === 3}>
              <button onClick={() => handleOption(3)} type="button">
                Acesso
              </button>
            </OptionItem>
            <OptionItem active={selectedOption === 4}>
              <button onClick={() => handleOption(4)} type="button">
                Contato
              </button>
            </OptionItem>
            <OptionItem active={selectedOption === 5}>
              <button onClick={() => handleOption(5)} type="button">
                Anexo
              </button>
            </OptionItem>
          </OptionsInfo>
          <Row>
            <Input
              id="nome"
              label
              name="Nome completo*"
              type="text"
              width={400}
              value={clientId.name}
            />
            <Input
              id="apelido"
              label
              name="Apelido"
              type="text"
              width={100}
              value={clientId.apelido}
            />
          </Row>
          <Row style={{ marginTop: 35 }}>
            <Input
              id="data"
              label
              name="Data de nascimento"
              type="text"
              width={200}
              value={clientId.nascimento}
            />
            <Input
              label
              id="cpf"
              name="CPF*"
              type="text"
              width={150}
              value={clientId.cpf}
              />
            <Input id="rg" label name="RG" type="text" width={100} />
          </Row>
          <Row style={
              {
                justifyContent: 'flex-start',
                paddingTop: 5,
                paddingLeft: 25,
              }}>
            <Input
              id="telefone"
              label
              name="Telefone principal"
              type="text"
              width={150}
              value={clientId.contato}
            />
          </Row>

          <UpdateButton>
            <button type="button">Atualizar</button>
          </UpdateButton>

        </ModalInfoUser>
      </Painel>
    </Container>
  );
};

export default EditClient;
