import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Menu = styled.aside`
  background: #f1f1f1;
  width: 250px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  img {
    margin-top: 24px;
    margin-bottom: 60px;
    width: 150px;
  }

  > a {
    margin-bottom: 20px;
    width: 100%;
    padding: 10px 30px;
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      font-weight: 300;
      color: #475766;
      margin-left: 14px;
    }
  }

  a:hover {
    background: #fff;
  }
`;

export const DashboardContainer = styled.div`
  flex: 1;
  background: #475766;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  z-index: 1;
  width: 100%;
  padding: 10px 30px 10px 30px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  strong {
    color: #475766;
    font-size: 24px;
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 42px;
      height: 42px;
      border-radius: 21px;
      margin-left: 14px;
    }

    span {
      color: #475766;
      font-size: 14px;
      margin: 0 18px;
    }
  }
`;

export const Painel = styled.div`
  border-top: 45px solid #0487d1;
  margin-top: -100px;
  border-radius: 12px;
  padding: 25px;
  background: #fff;

  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  /* position: absolute;
  top: 110px; */

  button {
    margin-left: auto;
    margin-bottom: 30px;
    padding: 8px 10px;
    background: #0487d1;
    width: 180px;
    border-radius: 6px;

    outline: 0;
    border: 0;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
