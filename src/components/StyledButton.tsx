import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: #4d70fc;
    color: white;
    font-size: 10px;
    font-weight: 700;
    width: 86px;
    height: 30px;
    border-radius: 5px;
    border: none;
    margin-left: 10px;

`

export const SuperButton = styled(StyledButton)`

    background-color: transparent;
    color: #4D70FCFF;
    border: 2px solid #4D70FCFF;
    line-height: 20px;
    margin-left: 12px;
`