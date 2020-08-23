import styled, { css } from 'styled-components';

interface LiProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Painel = styled.div`
  width: 950px;
  padding: 25px;
  position: absolute;
  top: 100px;
  left: 30px;
  display: flex;
  justify-content: space-between;
`;

export const ModalUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  border: 1px solid rgba(0, 0, 0, 0.2);

  background: #fafafa;
  border-radius: 10px;


  label {
    cursor: pointer;
    position: absolute;
    border: 0;
    width: 40px;
    height: 40px;
    background: #fafafa;
    border-radius: 50%;
    right: 60px;
    top: 120px;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      display: none;
    }
    svg {
      width: 30px;
      height: 30px;
      color: #475766;
    }
  }

  img {
    margin: 30px 70px 10px 70px;
    width: 130px;
    height: 130px;
    border-radius: 50%;

    & + strong {
      color: #475766;
      font-size: 20px;
      font-weight: 700;

      & + p {
        width: 100%;
        text-align: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        color: #d1d1d1;
        font-size: 16px;
        font-weight: 400;

        & + p {
          width: 100%;
          text-align: left;
          padding-left: 15px;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);

          color: #475766;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
  div {
    width: 100%;
    padding: 0px 15px 10px 15px;
    margin-top: -4px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      color: #475766;
      font-size: 14px;
      font-weight: 600;
      padding: 0;
    }

    p {
      margin: 0;
      color: #fecd69;
      font-weight: 500;
    }

    & + strong {
      width: 100%;
      padding: 10px 0;
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      color: #69d354;
      font-weight: 500;
      font-size: 14px;
    }
  }

  button {
    margin: 20px 0;
    border: 0;
    outline: none;
    border-radius: 4px;

    padding: 5px 30px;
    background: #0487d1;

    color: #fff;
    font-weight: 500;
  }
`;

export const ModalInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border: 1px solid rgba(0, 0, 0, 0.2);

  background: #fafafa;
  border-radius: 10px;

`;
export const OptionsInfo = styled.ul`
  width: auto;
  display: flex;
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  align-items: center;
`;

export const OptionItem = styled.li<LiProps>`
  list-style: none;
  padding: 0 30px;

  button {
    border: none;
    outline: none;

    background: transparent;
    color: #d8d8d8;

    ${props => props.active
      && css`
        color: #475766;
      `}

    font-weight: 600;
    font-size: 14px;
  }
`;

export const Row = styled.div`
  margin-top: 30px;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const UpdateButton = styled.div`
    margin-top: 105px;
    width: 100%;
    text-align: center;

    button {
        border: 0;
        outline: none;
        border-radius: 4px;

        padding: 5px 40px;
        background: #0487d1;

        color: #fff;
        font-weight: 500;
    }

`;
