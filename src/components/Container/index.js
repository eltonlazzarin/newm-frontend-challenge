import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;

  h2 {
    text-align: center;
    margin-bottom: 25px;
  }

  input {
    margin: 10px 0;
    width: 300px;
    height: 22px;
    text-indent: 5px;
    margin-bottom: 22px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  textarea {
    margin: 10px 0;
    width: 300px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    padding: 14px 26px;
    border: none;
    border-radius: 4px;
    background: #294577;
    color: #fff;
    font-weight: bold;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default Container;
