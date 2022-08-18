import React, { Component } from "react";
import {inject, observer} from 'mobx-react';
import {toJS} from 'mobx';
import AttStore from '../store/AttStore';
import autobind from 'autobind-decorator';
import styled from 'styled-components';
import Checkbox from "material-ui/Checkbox";

const Container = styled.div`
    
    table {
        margin-top: 30px;
        border: 2px solid #333;
        border-left: none;
        border-right: none;
        width: 100%;
        height: 40%;
        text-align: center;
        border-collapse: collapse;
    }

    .tableHead {
        font-weight: 500;
        font-size: 16pt;
        padding: 10px 0;
        border-bottom: 1.5px solid #333;
    }
    .tableData {
        font-size: 16px;
        padding: 15px 0;

    }


    tr:hover:not(thead>tr){
        
        background-color: #dcdcdc;
    }

    .empty{
        text-align:center;
    }
`;

@inject('AttStore')
@autobind
@observer
class AttList extends Component{

  onSelectedMember(member){
    AttStore.selectedMember(member);
    console.log(member);
  }

 
    render(){
        
            // members = members.filter( (member) => member.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1)
            // members = members.filter( (member) => member.number.toLowerCase().indexOf(searchNumber.toLowerCase()) !== -1)
            
        // return(
        //     <Table
        //     members ={ members1 }
        //     onSelectedMember = {this.onSelectedMember}
        //     />
        // )
        console.log(toJS(AttStore.members))
        return(

        <Container>
          <table>

            <thead>

                <tr>
                    <th className="tableHead">선택</th>
                    <th className="tableHead">No</th>
                    <th className="tableHead">이름</th>
                    <th className="tableHead">핸드폰 번호</th>
                    <th className="tableHead">참석일시</th>
                    <th className="tableHead">참석여부</th>
                </tr>

            </thead>

            
            
            <tbody>

                {
                Array.isArray(AttStore.members) && AttStore.members.length ? 
                AttStore.members.map((member) => (
                
                <tr key={member}>
                    <td>
                        <input type='checkbox'/>
                    </td>
                    <td>{member.memberId}</td>
                    <td>{member.memberName}</td>
                    <td>{member.hpNo}</td>
                    <td>{member.eventStartDate}</td>
                    <td>{member.enterFlag}</td>
                </tr>
                ))
                :
                <tr>
                <td colSpan={6}>Empty</td>
                </tr>
                }
{/* 
                <tr >
                    <td className="tableData">
                        <input type='checkbox'></input>
                    </td>
                    <td className="tableData"></td>
                    <td className="tableData"></td>
                    <td className="tableData"></td>
                    <td className="tableData"></td>
                    <td className="tableData"></td>
                </tr> */}
            </tbody>
                
                    
          </table>
        </Container>
        )
    }
};


export default AttList;

