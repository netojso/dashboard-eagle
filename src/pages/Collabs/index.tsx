import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import columns from './utils/columns';
import { Painel } from './styles';
import api from '../../services/api';
import Table from '../../components/Table';

const Collabs: React.FC = () => {
  const [collabs, setCollabs] = useState([]);

  // Faz a request no momento que a página é renderizada e seta os dados em 'collabs'
  useEffect(() => {
    async function loadCollabs() {
   const response = await api.get('collabs');

   setCollabs(response.data)
    }

    loadCollabs()
  }, [])

  return (

  <Painel>
    <Cards />
    <Table
      key="collabs"
      data={collabs}
      width={900}
      columns={columns}
      maxHeight={300}
      headerHeight={40}
      rowHeight={50}
    />
  </Painel>
)};

export default Collabs;
