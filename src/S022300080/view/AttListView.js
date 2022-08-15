import React, { Component } from "react";
import Table from   "../../common/components/Table";
import {inject, observer} from 'mobx-react';
import AttStore from '../store/AttStore';
import autobind from 'autobind-decorator';


@inject('AttStore')
@autobind
@observer
class AttList extends Component{

  onSelectedMember(member){
    AttStore.selectedMember(member);
    console.log(member);
  }
  
    render(){

        let {members1, searchName, searchNumber} = this.props.AttStore;
        
            // members = members.filter( (member) => member.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1)
            // members = members.filter( (member) => member.number.toLowerCase().indexOf(searchNumber.toLowerCase()) !== -1)
            
        // return(
        //     <Table
        //     members ={ members1 }
        //     onSelectedMember = {this.onSelectedMember}
        //     />
        // )
        return(
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
            </tbody>
          </table>
        )
    }
};


export default AttList;

