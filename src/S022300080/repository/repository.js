import React from "react";
import axios from "axios";


const getUserData = async ()=>{
    const res = await axios.get('/rest/v1/s022300080/attend-list', { params : {
        enterFlag: '',
        eventId : 4,
        hpNo: '',
        memberName: '',
    }})
    
    return res.data.data;
};

export default getUserData;
