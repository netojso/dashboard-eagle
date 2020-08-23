import styled, { css } from 'styled-components';

interface ButtonProps {
  active: boolean;
}

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

`;

export const MenuItem = styled.div<ButtonProps>`
    width: 100%;
    padding: 8px 0;

  button {
    padding: 10px 0 10px 30px;
    border: 0;
    width: 100%;
    outline: none;
    background: transparent;
    display: flex;
    align-items: center;

    span {
      font-size: 20px;
      font-weight: 300;
      color: #475766;
      margin-left: 14px;
    }

    div {
      margin-left: 30px;
      width: 20px;
      height: 20px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #E94E60;
      color: #fff;

      font-size: 12px;
    }
  }

  &:hover {
      background: #fff;
    }

  ${props => props.active && css`
        background: #fff;

    `}

`;

export const DashboardContainer = styled.div`
  flex: 1;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner {
    width: 100%;
    background: #475766;
    height: 150px;
  }
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
    margin-left: 15px;
    color: #475766;
    font-size: 26px;
    letter-spacing: 1px;
    text-shadow: 0px 2px 4px rgb(71, 87, 102, 0.3);
  }

  div {
    display: flex;
    align-items: center;
    position: relative;

    span:first-of-type {
     position: absolute;
     top: 6px;
     left: -5px;
     width: 15px;
     height: 15px;
     border-radius: 50%;
     background: #E94E60;

     display: flex;
     align-items: center;
     justify-content: center;

     color: #fff;
     font-size: 9px;

    }

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
