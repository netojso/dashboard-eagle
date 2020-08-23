import React, { useState, useEffect } from 'react';
import Table from 'react-base-table';
import {
  Container, Painel,
} from './styles';
import columns from './utils/columns';
import api from '../../services/api';

interface IProps {
  handleSelectedPage: any;
}
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
