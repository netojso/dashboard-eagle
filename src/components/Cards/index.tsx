import React from 'react';
import { CRow, CCol, CWidgetDropdown } from '@coreui/react';
import ChartLineSimple from './ChartLine/ChartLine';

const Cards: React.FC = () => (
  <CRow style={{ marginBottom: 20 }}>
    <CCol>
      <CWidgetDropdown
        color="gradient-primary"
        header="Clientes ativos"
        style={{ height: 150, width: 260 }}
        footerSlot={
          <ChartLineSimple
            pointed
            className="c-chart-wrapper mt-3 mx-3"
            dataPoints={[65, 59, 84, 84, 51, 55, 40]}
            pointHoverBackgroundColor="rgba(255,255,255,.55)"
            label="Members"
          />
        }
      />
    </CCol>

    <CCol>
      <CWidgetDropdown
        color="gradient-info"
        header="Clientes inativos"
        style={{ height: 150, width: 260 }}
        footerSlot={
          <ChartLineSimple
            pointed
            className="c-chart-wrapper mt-3 mx-3"
            dataPoints={[65, 59, 84, 84, 51, 55, 40]}
            pointHoverBackgroundColor="rgba(255,255,255,.55)"
            label="Members"
          />
        }
      />
    </CCol>

    <CCol>
      <CWidgetDropdown
        color="gradient-warning"
        header="Chamados"
        style={{ height: 150, width: 260 }}
        footerSlot={
          <ChartLineSimple
            pointed
            className="c-chart-wrapper mt-3 mx-3"
            dataPoints={[65, 59, 84, 84, 51, 55, 40]}
            pointHoverBackgroundColor="rgba(255,255,255,.55)"
            label="Members"
          />
        }
      />
    </CCol>
  </CRow>
);

export default Cards;
