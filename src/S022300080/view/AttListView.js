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
  onGetMemberData(member){
    AttStore.setMemberData(member);
    console.log(member);
  }
  
    render(){

        let {members, searchName, searchNumber} = this.props.AttStore;

            members = members.filter( (member) => member.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1)
            members = members.filter( (member) => member.number.toLowerCase().indexOf(searchNumber.toLowerCase()) !== -1)
            
        return(

            <Table
            members ={ members }
            onSelectedMember = {this.onSelectedMember}
            onGetMemberData = {this.onGetMemberData}
            />
  
        )
    }
};


export default AttList;

