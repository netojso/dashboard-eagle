import React, { useState, useCallback } from 'react';
import {
  FaAddressCard,
  FaUsers,
  RiDashboardFill,
  SiCashapp,
  MdMessage,
  MdNotifications,
  IoIosArrowDown,
} from 'react-icons/all';

import {
  Container,
  Menu,
  Header,
  DashboardContainer,
  MenuItem,
} from './styles';

import logoImg from '../../assets/logo.svg';
import userImg from '../../assets/eu.jpeg';

import Clients from '../Clients';
import Collabs from '../Collabs';
import AddClient from '../AddClient';
import EditClient from '../EditClient';

interface Client {
  id: number;
  avatar: string,
  name: string,
  apelido: string,
  contato: string,
  tipo: string,
  cpf: string,
  data: number,
}

const Dashboard: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const [selectedClient, setSelectedClient] = useState({} as Client);
  const handleSelectedPage = useCallback((item) => {
    setSelectedPage(item);
    // setSelectedClient(item[1]);
  }, []);
  // const handleSelectedClient = useCallback((client) => {
  //   setSelectedClient(client);
  // }, []);

  function SwitchPage(item: string) {
    switch (item) {
      case 'Dashboard':
        return <Collabs />;
      case 'Clientes':
        return (
          <Clients
            // handleSelectedClient={(client: any) => handleSelectedClient(client)}
            handleSelectedPage={(val) => {
              setSelectedClient(val[1])
              handleSelectedPage(val[0])}
            }
          />
        );
      case 'Adicionar cliente':
        return <AddClient />;
      case 'Editar':
        return <EditClient clientId={selectedClient} />;
      case 'Colaboradores':
        return <div />;
      case 'Financeiro':
        return <div />;
      case 'Mensagens':
        return <div />;
      default:
        return <Collabs />;
    }
  }

  return (
    <Container>
      <Menu>
        <img src={logoImg} alt="logo" />
        <MenuItem active={selectedPage === 'Dashboard'}>
          <button type="button" onClick={() => handleSelectedPage('Dashboard')}>
            <RiDashboardFill size={32} color="#475766" />
            <span>Dashboard</span>
          </button>
        </MenuItem>

        <MenuItem active={selectedPage === 'Clientes'}>
          <button type="button" onClick={() => handleSelectedPage('Clientes')}>
            <FaUsers size={32} color="#475766" />
            <span>Clientes</span>
          </button>
        </MenuItem>

        <MenuItem active={selectedPage === 'Colaboradores'}>
          <button type="button" onClick={() => handleSelectedPage('Colaboradores')}>
            <FaAddressCard size={32} color="#475766" />
            <span>Colaboradores</span>
          </button>
        </MenuItem>

        <MenuItem active={selectedPage === 'Financeiro'}>
          <button type="button" onClick={() => handleSelectedPage('Financeiro')}>
            <SiCashapp size={32} color="#475766" />
            <span>Financeiro</span>
          </button>
        </MenuItem>

        <MenuItem active={selectedPage === 'Mensagens'}>
          <button type="button" onClick={() => handleSelectedPage('Mensagens')}>
            <MdMessage size={32} color="#475766" />
            <span>Mensagens</span>
            <div>3</div>
          </button>
        </MenuItem>

      </Menu>
      <DashboardContainer>
        <Header>
          <strong>{selectedPage}</strong>
          <div>
            <MdNotifications size={28} color="#475766" />
            <span>8</span>
            <img src={userImg} alt="Usuário" />
            <span>Octacilio Serafim</span>
            <IoIosArrowDown size={24} color="#475766" />
          </div>
        </Header>
        <div className="banner" />

        { SwitchPage(selectedPage) }

      </DashboardContainer>
    </Container>
  );
};

export default Dashboard;
