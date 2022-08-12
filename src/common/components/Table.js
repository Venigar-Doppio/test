import React, { Component } from "react";
import styled from 'styled-components';
import {observer} from 'mobx-react';
import axios from "axios";
import AttStore from "../../S022300080/store/AttStore";


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
@observer
class Table extends Component{
    render(){

        const {members, onSelectedMember} =this.props;

        return (
            
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
                        Array.isArray(members) && members.length ? 
                        members.map((member) => (
                        <tr key={member.id} onClick={()=>onSelectedMember(member)}>
                            <td className="tableData">
                                <input type='checkbox'></input>
                            </td>
                            <td className="tableData">{member.eventNm}</td>
                            <td className="tableData">{member.memberName}</td>
                            <td className="tableData">{member.hpNo}</td>
                            <td className="tableData">
                                {member.enterDate}
                            </td>
                            <td className="tableData">{member.enterFlag}</td>
                        </tr>
                        ))
                        :
                        <tr>
                            <td className="empty" colSpan={6}>항목이 없습니다.</td>
                        </tr>
                        }
                        
                    </tbody>
                        
                    
                </table>

            </Container>
        )
    }
};

export default Table;