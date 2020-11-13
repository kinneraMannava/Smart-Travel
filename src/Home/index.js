import React, { Component } from 'react';
import UserSelection from '../Selection/UserSelection';
import './home.css';
class Home extends Component {
    state = {
        selectionComponent : true,
        name: '',
        errorMsg: false
    }
    render(){
        
        const { selectionComponent, errorMsg} = this.state;
            return(
                selectionComponent  ?( <div className="container">
                    <input placeholder="Please enter your name to proceed" value={this.state.name} onChange={this.handleChange}></input>
                    <button className="contnue" onClick={this.toggleComponent}>Continue</button>
                    <br></br>
                    {errorMsg && <span className="errorText">Please Enter your Name</span> }
                    <div className="description">
                        <h3>Planning to Trvel in Berlin!!</h3>
                        <p>
                            Facing difficulty to find the proper tickets to buy while using the public transportation in your trip?
                            You are at the right place. We are here to Help you in finding appropriate Ticket based on time and distance you travel, and suggest the best ticket to buy.
                        </p>
                    </div>
                </div> )
            :
    
                <div>
                    <UserSelection />
                </div>
            );
    }
    toggleComponent = () => {
        if(this.state.name){
            this.setState({selectionComponent:false});
            this.setState({errorMsg:false});
        }
        else{
            this.setState({errorMsg:true});
        }
        
    }
    handleChange = (event) => {
        this.setState({name: event.target.value});
    }

}
export default Home;