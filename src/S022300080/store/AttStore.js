import React from 'react';
import {observable, action, makeObservable} from 'mobx';
import getUserData from '../repository/repository';


class AttStore{

   constructor(){
    makeObservable(this)
   }
   @observable
   _member = {};

   @observable
   _members=[];

   @observable
   _members_1= {};

   @observable
   _searchName = '';
  
   @observable
   _searchNumber = '';

   @observable
   _searchFlag = '';

    get member(){
        return this._member;
    }

    get members1(){
        return this._members_1;
    }
   
   get searchName(){
       return this._searchName;
   }
   
   get searchNumber(){
       return this._searchNumber;
   }
   
   get searchFlag(){
       return this._searchFlag;
   }
   

   @action
   setSearchName(searchName){
        console.log(searchName + "," + this._searchName)
        this._searchName =searchName;
        console.log("이름을 통한 검색" + searchName + "," + this._searchName )
   }

   @action
   setSearchNumber(searchNumber){
        console.log(searchNumber +","+this._searchNumber)
       this._searchNumber =searchNumber;
       console.log("전화번호을 통한 검색" + searchNumber + "," +this._searchNumber)
   }
   
   @action
   setSearchFlag(searchFlag){
        console.log(searchFlag +","+this._searchFlag)
       this._searchFlag =searchFlag;
       console.log("출석여부을 통한 검색" + searchFlag + "," +this._searchFlag)
   }
   
   @action
   selectedMember(member){
       this._member = member;
   }

    @action
    setMembersData(){
        console.log("setMembersData() start this._members :"+ (this._members instanceof Array)) ;
        this._members = getUserData() ;
    }
  
    @action
    setMembersData1(){
        console.log("setMembersData1() start this._members_1 :"+ (this._members_1  instanceof Array)) ;
        this._members_1 = getUserData() ;
        console.log("setMembersData1() this._members1 :"+ (this._members_1 instanceof Object)) ;
        console.log(Object.keys(this._members_1)) ;
    }

//    @action
//    addMember(member){
//        this._members.push(member);
//    } 

    // @action
    // removeMember(){
    //     let index = this._members.findIndex(member => member.id === this._member.id);
    //     if(index > -1){
    //         this._members.splice(index,1);
    //     }
    //     this._member ={}
    // }

    // @action
    // updateMember(){
    //     let foundMember = this._members.find( (member)=> member.memberId === this._member.memberId )
    //     foundMember.title = this._member.title;
    //     foundMember.date = this._member.date;
    //     this._todo = {};
    // }

}

export default new AttStore;