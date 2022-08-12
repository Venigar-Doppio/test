import { render } from "@testing-library/react";
import React, { Component } from "react";
import styled from 'styled-components';
import Input from '../../common/components/Input';
import ImgSecondaryBtn from '../../common/components/ImgSecondaryBtn';
import AttStore from "../store/AttStore";
import {setSearchName} from "../store/AttStore";
import {inject,observer} from 'mobx-react';
import autobind from 'autobind-decorator';
import AttList from "./AttListView";
import SelectBox from "../../common/components/SelectBox";


const Container = styled.div`

.inputWrap{
    display:flex;
    
}
    
.btnWrap{
    display:flex;

}

.deleteBtn{
    background-color:red;
    width:30px;
    height:30px;
    border-radius:50px;

}
    
`;



function onChangeSearchName(searchName){

    AttStore.setSearchName(searchName);
    console.log(searchName + "onChangeSearchName")
}

function onChangeSearchNumber(searchNumber){

    AttStore.setSearchNumber(searchNumber);
    console.log(searchNumber + "onChangeSearchNumber")
}


function onClickSearchEvent(){

    console.log("before onClickEvent activated")

    AttList.filtering()

    console.log("onClickEvent activated")
}

function onRemoveMember(){
    AttStore.removeMember();
    console.log('deleteBtn activated')
}

@inject('AttStore')
@autobind
@observer
class AttSearch extends Component{
    
    render(){
        return(

        <Container>

            <div className="inputWrap">

                <Input
                placeholder="대표자"
                onChange={(event)=>onChangeSearchName(event.target.value)}/> 

                <Input
                placeholder="H.P"
                onChange={(event)=>onChangeSearchNumber(event.target.value)}/> 
                
                <SelectBox/>
            </div>

            <div className="btnWrap">
                <div onClick = {onClickSearchEvent}>
                    <ImgSecondaryBtn/>
                </div>

                <div className='deleteBtn'onClick = {onRemoveMember}>
                </div>
            </div>
        </Container>

        )
    }
}


export default AttSearch;