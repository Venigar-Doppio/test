import React from "react";
import axios from "axios";


const getUserData = async ()=>{

    console.log("Repository start => ")
   try{
    const res = await axios.get('/rest/v1/s022300080/attend-list',{
        params : {
            enterFlag: '',
            eventId : 4,
            hpNo: '',
            memberName: '',
        }

    });
    console.log("sssss  :"+ (res.data.data instanceof Array) );
    return res.data.data
   }
   catch(e) {
    console.log(e)
}
};

export default getUserData;



// axios.get('/rest/v1/s022300080/attend-list',{
    //     params : {
    //         enterFlag: '',
    //         eventId : 4,
    //         hpNo: '',
    //         memberName: '',
    //     }
    // }
    // )
    // .then((res) => {

    //     let userData = res.data.data;
    //     console.log(userData);

    // });
