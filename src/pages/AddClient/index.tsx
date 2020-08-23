/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useCallback, useMemo } from 'react';
import BaseTable from 'react-base-table';
import {
  Container,
  RadioGroup,
  Painel,
  Content,
  Title,
  Detail,
  Row,
  InfoAdicionais,
  InfoItem,
  AddAddressButton,
} from './styles';
import Input from '../../components/Input';
import columns from './utils/columns';
import Table from '../../components/Table';

const AddClient: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('cpf');
  const [selectedInfo, setSelectedInfo] = useState('endereço');

  const data = useMemo(() => {
    return (
      [{
        cep: '29105-060',
        rua: 'Rua Afrânio Peixoto',
        bairro: 'Cristóvão Colombo',
        cidade: 'Vila Velha'
      }]
    )
  }, [])
  const handleSelectedInfo = useCallback(item => {
    setSelectedInfo(item);
  }, []);

  return (
    <Container>
      <Painel>
        <RadioGroup>
          <label
            htmlFor="pessoaFisica"
            className="control control-radio"
          >
            Pessoa física
            <input
              type="radio"
              name="pessoaFisica"
              checked={selectedOption === 'cpf'}
            />
            <button
              type="button"
              className="control_indicator"
              onClick={() => setSelectedOption('cpf')}
            >
              1

            </button>
          </label>
          <label htmlFor="pessoaJuridica" className="control control-radio">
            Pessoa jurídica
            <input
              type="radio"
              name="pessoaJuridica"
              checked={selectedOption === 'cnpj'}
            />
            <button
              type="button"
              className="control_indicator"
              onClick={() => setSelectedOption('cnpj')}
            >
              2

            </button>
          </label>
        </RadioGroup>
        {selectedOption === 'cpf'
          ? (
            <Content>
              <Title>Dados pessoais</Title>
              <Detail>Os campo com * são obrigatórios</Detail>
              <Row>
                <Input
                  label
                  width={450}
                  name="Nome completo"
                  id="nome"
                  type="text"
                />
                <Input
                  label
                  width={150}
                  name="Apelido"
                  id="apelido"
                  type="text"
                />
                <Input
                  label
                  width={150}
                  name="Domínio"
                  id="dominio"
                  type="text"
                />
              </Row>
              <Row style={{ marginTop: 30 }}>
                <Input
                  label
                  width={217}
                  name="Data de nascimento"
                  id="data"
                  type="text"
                />
                <Input label width={217} name="CPF*" id="cpf" type="text" />
                <Input label width={150} name="RG" id="rg" type="text" />
                <Input
                  label
                  width={150}
                  name="Telefone principal"
                  id="telefone"
                  type="text"
                />
              </Row>

              <Title>Dados de acesso</Title>
              <Detail>Os campo com * são obrigatórios</Detail>
              <Row>
                <Input
                  label
                  width={450}
                  name="Usuário administrador"
                  id="usuário"
                  type="text"
                />
                <Input label width={150} name="Senha" id="senha" type="text" />
                <Input
                  label
                  width={150}
                  name="Confirmar senha"
                  id="novaSenha"
                  type="text"
                />
              </Row>

              <Title>Informações adicionais</Title>
              <Detail>Os campo com * são obrigatórios</Detail>
              <InfoAdicionais>
                <InfoItem active={selectedInfo === 'endereço'}>
                  <button
                    onClick={() => handleSelectedInfo('endereço')}
                    type="button"
                  >
                    ENDEREÇO
                  </button>
                </InfoItem>
                <InfoItem active={selectedInfo === 'contato'}>
                  <button
                    onClick={() => handleSelectedInfo('contato')}
                    type="button"
                  >
                    CONTATO
                  </button>
                </InfoItem>
                <InfoItem active={selectedInfo === 'anexo'}>
                  <button
                    onClick={() => handleSelectedInfo('anexo')}
                    type="button"
                  >
                    ANEXO
                  </button>
                </InfoItem>
              </InfoAdicionais>
              <Row>
                <Input
                  width={180}
                  name="CEP"
                  id="cep"
                  type="text"
                  placeholder="CEP*"
                />
                <Input
                  width={180}
                  name="Bairro"
                  id="bairro"
                  type="text"
                  placeholder="Bairro"
                />
                <Input
                  width={180}
                  name="Rua"
                  id="rua"
                  type="text"
                  placeholder="Rua"
                />
                <Input
                  width={180}
                  name="Cidade"
                  id="cidade"
                  type="text"
                  placeholder="Cidade"
                />
              </Row>
              <Row style={{ marginTop: 15, width: 395 }}>
                <Input
                  width={180}
                  name="Numero"
                  id="numero"
                  type="text"
                  placeholder="Número"
                />
                <Input
                  width={180}
                  name="UF"
                  id="uf"
                  type="text"
                  placeholder="UF"
                />
              </Row>
              <AddAddressButton>ADICIONAR ENDEREÇO</AddAddressButton>

              <BaseTable
                data={data}
                width={780}
                columns={columns}
                maxHeight={300}
                headerHeight={40}
                rowHeight={40}
              />

            </Content>
          )
          : (
            <Content>
              <Title>Dados pessoais</Title>
              <Detail>Os campo com * são obrigatórios</Detail>
              <Row>
                <Input
                  label
                  width={450}
                  name="Razão social*"
                  id="social"
                  type="text"
                />
                <Input
                  label
                  width={150}
                  name="Nome Fantasia"
                  id="fantasia"
                  type="text"
                />
                <Input
                  label
                  width={150}
                  name="Domínio*"
                  id="dominio"
                  type="text"
                />
              </Row>
              <Row style={{ marginTop: 30 }}>
                <Input
                  label
                  width={217}
                  name="Data de abertura"
                  id="data"
                  type="text"
                />
                <Input label width={217} name="CNPJ*" id="cnpj" type="text" />
                <Input label width={150} name="IE" id="ie" type="text" />
                <Input
                  label
                  width={150}
                  name="Telefone principal"
                  id="telefone"
                  type="text"
                />
              </Row>

              <Title>Dados de acesso</Title>
              <Detail>Os campo com * são obrigatórios</Detail>
              <Row>
                <Input
                  label
                  width={450}
                  name="Usuário administrador"
                  id="usuário"
                  type="text"
                />
                <Input label width={150} name="Senha" id="senha" type="text" />
                <Input
                  label
                  width={150}
                  name="Confirmar senha"
                  id="novaSenha"
                  type="text"
                />
              </Row>

              <Title>Informações adicionais</Title>
              <Detail>Os campo com * são obrigatórios</Detail>
              <InfoAdicionais>
                <InfoItem active={selectedInfo === 'endereço'}>
                  <button
                    onClick={() => handleSelectedInfo('endereço')}
                    type="button"
                  >
                    ENDEREÇO
                  </button>
                </InfoItem>
                <InfoItem active={selectedInfo === 'contato'}>
                  <button
                    onClick={() => handleSelectedInfo('contato')}
                    type="button"
                  >
                    CONTATO
                  </button>
                </InfoItem>
                <InfoItem active={selectedInfo === 'anexo'}>
                  <button
                    onClick={() => handleSelectedInfo('anexo')}
                    type="button"
                  >
                    ANEXO
                  </button>
                </InfoItem>
              </InfoAdicionais>
              <Row>
                <Input
                  width={180}
                  name="CEP"
                  id="cep"
                  type="text"
                  placeholder="CEP*"
                />
                <Input
                  width={180}
                  name="Bairro"
                  id="bairro"
                  type="text"
                  placeholder="Bairro"
                />
                <Input
                  width={180}
                  name="Rua"
                  id="rua"
                  type="text"
                  placeholder="Rua"
                />
                <Input
                  width={180}
                  name="Cidade"
                  id="cidade"
                  type="text"
                  placeholder="Cidade"
                />
              </Row>
              <Row style={{ marginTop: 15, width: 395 }}>
                <Input
                  width={180}
                  name="Numero"
                  id="numero"
                  type="text"
                  placeholder="Número"
                />
                <Input
                  width={180}
                  name="UF"
                  id="uf"
                  type="text"
                  placeholder="UF"
                />
              </Row>
              <AddAddressButton>ADICIONAR ENDEREÇO</AddAddressButton>

              <Table
                data={data}
                width={780}
                columns={columns}
                maxHeight={300}
                headerHeight={40}
                rowHeight={40}
              />
            </Content>
          )}
      </Painel>
    </Container>
  );
};

export default AddClient;
