import React from 'react';
import {observable, action, makeObservable, toJS} from 'mobx';
import getUserData from '../repository/repository';
import { data } from 'browserslist';


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

    @observable
    _searchFlag = '';

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
    async setMembersData(members) {
        const data = await getUserData();

        this._members = data;
    
        console.log(toJS(this._members));

    }
    
}

export default new AttStore;