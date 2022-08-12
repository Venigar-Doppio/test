import React ,{Component} from 'react';
import AttSearch from '../view/AttSearch';
import AttList from '../view/AttListView';
import styled from 'styled-components';


const Container = styled.div`

`

class AttendContainer extends Component{
    render(){
        return(

            <Container>

                <div className="titleWrap">
                <p className="mainTitle">행사명 : ~~</p>
                </div>
                <AttSearch/>
                <AttList/>

                

            
            </Container>

        )
    }
}
export default AttendContainer;