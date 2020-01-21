import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;
`;

export const Content = styled.div`
  input {
    margin: 10px 0;
    width: 300px;
    height: 22px;
    text-indent: 5px;
    margin-bottom: 32px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  hr {
    margin-top: 18px;
  }

  article {
    padding: 22px 0;

    & + article {
      border-top: 1px solid #eee;
    }
  }

  p {
    padding: 5px 0;
  }

  a {
    margin-right: 35px;
  }

  svg {
    margin-top: 16px;
  }
`;

export const Form = styled.div`
  div {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 450px) {
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;
