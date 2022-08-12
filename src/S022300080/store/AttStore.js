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
   _searchName = '';
  
   @observable
   _searchNumber = '';

   

    get member(){
    return this._member;
    }

    get members(){
    return this._members;
    }
   
   get searchName(){
       return this._searchName;
   }
   
   get searchNumber(){
       return this._searchNumber;
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
   selectedMember(member){
       this._member = member;
   }

   
//    @action
//    addMember(member){
//        this._members.push(member);
//    } 

    @action
    removeMember(){
        let index = this._members.findIndex( member => member.id === this._member.id);
        if(index > -1){
            this._members.splice(index,1);
        }
        this._member ={}
    }

    @action
    setMemberData(userData){
        this._members = userData;
        console.log(userData);
    }
}

export default new AttStore;