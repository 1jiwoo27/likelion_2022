import React from 'react';
import styled from 'styled-components';
// import "./Hello.css";

// const practicStyle= { 
//     backgroundColor: 'aquamarine', 
//     color: 'gray',
//     fontSize: '40px',
//     padding: '10px',
//     marginTop: '10px'
// }

function Hello (){
    const StyledButton = styled.button`
        backgroundColor: 'red';
        color: 'gray';
    `;
    return <StyledButton>나만의 버튼</StyledButton>;
}
export default Hello;

 {/* <div style ={practicStyle}>
        Hello World!
        </div>
        <div className="pink">
        Hello World!
        </div> */}