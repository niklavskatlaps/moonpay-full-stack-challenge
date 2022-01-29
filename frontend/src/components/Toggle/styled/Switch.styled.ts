import styled from 'styled-components';

export default styled.div`
  flex-shrink: 0;
  position: relative;
  width: 60px;
  height: 28px;
  background: lightgray;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;
