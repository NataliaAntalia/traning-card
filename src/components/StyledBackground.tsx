import styled from "styled-components";


export type StyledBackgroundPropsType = {
    color?: string;
}

export const StyledBackground = styled.div<StyledBackgroundPropsType>`
    background-size: 300px 350px;
    background-color: ${props => props.color || "white"};
    height: 350px;
    width: 300px;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px #0000001A;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`