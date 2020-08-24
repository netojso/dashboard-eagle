import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
import {
  Container, Painel,
} from './styles';
import columns from './utils/columns';
import api from '../../services/api';

interface IProps {
  handleSelectedPage: any;
}

// Recebe essa função que vem de Dashboard para buscar a página selecionada
// junto com os dados

const Clients: React.FC<IProps> = ({ handleSelectedPage }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('clients');

    setClients(response.data)
    }

    loadClients();

   }, [])


  return (
    <Container>
      <Painel>
        <button type="button" onClick={() => handleSelectedPage(['Adicionar cliente', {}])}>
          <span>Adicionar Cliente</span>
        </button>
        <Table
          key="clientes"
          data={clients}
          width={900}
          columns={columns(handleSelectedPage)}
          maxHeight={300}
          headerHeight={40}
          rowHeight={50}
        />
      </Painel>
    </Container>
  );
};

export default Clients;
