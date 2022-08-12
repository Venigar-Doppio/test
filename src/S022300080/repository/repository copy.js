import React from "react";
import axios from "axios";
import { observable } from "mobx";


let userData = [];

class getUserData{

    render(){
        console.log('axios activated');

        axios.get('/rest/v1/s022300080/attend-list',{
            params : {
                enterFlag: '',
                eventId : 4,
                hpNo: '',
                memberName: '',
            }
        }
        )
        .then((res) => {
            userData = res.data.data;
            console.log(userData);
        })
        .catch((err)=>{
            console.log(err + "err")
        })

}
   


};
export default getUserData;