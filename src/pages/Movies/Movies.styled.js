import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  //   max-width: 600px;
  border-radius: 50px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  margin-left: -80px;
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50px;
  background-color: transparent;
  padding: 13px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
 
  font-size: 20px;
background-color: rgb(239, 187, 64, 0.5);
  
  border: none;
  outline: none;
  padding-left: 16px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  &::placeholder {
  font: inherit;
  font-size: 16px;
}
  }
`;

export const SectionSearch = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 0 40px;
}
  }
`;
