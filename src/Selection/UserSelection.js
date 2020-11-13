import { Component } from 'react'
import Dropdown from '../Common/Dropdown';
import * as MenuItems from '../Common/util';
import Modal from '../Common/Modal'
class UserSelection extends Component {
    state = {
        displayHalts: false,
        displayPersons:false,
        displayStudent:false,
        days:'',
        halts:'',
        persons:'',
        Suggestion: '',
        displayModal:false

    }
    render(){
        const { displayHalts, displayPersons, displayStudent, Suggestion, displayModal} = this.state;
        return(
            
            <div>
                <Dropdown timeOptions={MenuItems.TimeMenu} label="Expected Days of Trip" type="numberofdays" selection= {this.selectedDays}/>
                { displayHalts && <Dropdown timeOptions={MenuItems.HaltsMenu} label="Number of Halts" type="numberofHalts" selection= {this.selectedDays}/> }
                {displayPersons && <Dropdown timeOptions={MenuItems.PeopleMenu} label="Expected Number of Persons" type="numberofPersons" selection= {this.selectedDays}/> }
                {displayStudent && <Dropdown timeOptions={MenuItems.studentMenu} label="Are you Student?" type="student" selection= {this.selectedDays}/> }
               {  displayModal && <Modal Suggestion={Suggestion} closeModal={this.closeModal}/>} 
            </div>
        );
    }
    //Function to close Modal Popup
    closeModal = () => {
        this.setState({displayModal:false});
    }
    // Function to display message based on user Selection
    selectedDays = (event, type) => {
        switch (type) {
            case ('numberofdays'):
                this.setState({days:event});
                if(event === "1 Day"){
                     this.setState({displayHalts:true});
                     this.setState({displayStudent:false});
                }
                else {
                    this.setState({displayHalts:false});
                    this.setState({displayPersons:false});
                    this.setState({displayStudent:true});
                    
                }
                break;
            case ('numberofHalts'):
                this.setState({halts:event});
                if(event === ">4 Halts"){
                   
                    this.setState({Suggestion: MenuItems.temp + 'Day Ticket'});
                    this.setState({displayPersons:true});
               }
               else {
                   this.setState({displayPersons:false});
                   this.setState({Suggestion: MenuItems.temp + 'Short Trip Ticcket or 4 Halts Ticket'});
                   this.setState({displayModal:true});
               }
               
               break;
            case ('numberofPersons'):
                this.setState({persons:event});
                if(this.state.days === "1 Day" && this.state.halts === ">4 Halts")
                {
                    if(event === "1 Person"){
                        this.setState({Suggestion: MenuItems.temp + 'Taggeskart For 1 Person'});
                        this.setState({displayModal:true});
                    }
                    else{
                        this.setState({Suggestion: MenuItems.temp + 'Taggeskart For Group'});
                        this.setState({displayModal:true});
                    }
                }
                    break;
            case ('student'):
                if(event === "Yes"){
                    if(this.state.days === "7 Days"){
                        this.setState({Suggestion: MenuItems.temp + '7 Days Ticket for student'});
                        this.setState({displayModal:true});
                    }
                    else{
                        this.setState({Suggestion: MenuItems.temp + 'Student Month Ticket '});
                        this.setState({displayModal:true}); 
                    }
                        
                    
                }  
                else {
                    if(this.state.days === "7 Days"){
                        this.setState({Suggestion: MenuItems.temp + '7 Day Ticket'});
                        this.setState({displayModal:true});
                    }
                    else{
                        this.setState({Suggestion: MenuItems.temp + ' Month Ticket '}); 
                        this.setState({displayModal:true});
                    }
                    
                }
                        break;
        }
    }

}
export default UserSelection;