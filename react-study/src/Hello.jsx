import React from 'react';
import styled from 'styled-components';
// import "./Hello.css";

function Hello (){
    const StyledButton = styled.button`
        backgroundColor: 'red';
        color: 'gray';
    `;
    return <StyledButton>나만의 버튼</StyledButton>;
}
export default Hello;