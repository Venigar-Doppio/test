import React from "react";
import styled from 'styled-components';


const SelectBoxContainer = styled.div`
    position:relative;
    
    select{
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: #333 1.5px solid;
        outline: none;
        width: 200px;
        height: 26.5px;
        font-size: 15px;
        text-align: center;
        margin-right:10px;
        color: #ababab;
        margin-bottom:0;
    }

    label {

        position:absolute;
        top:-35px;
    }

`;


const SelectBox = ({ label, options = [], ...props }) => {

    return (
        <SelectBoxContainer>
            <label>{label}</label>
            <select {...props}>
                <option>Y</option>
                <option>N</option>
            </select>
        </SelectBoxContainer>
    )
};

export default SelectBox;