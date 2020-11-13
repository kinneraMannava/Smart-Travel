import { Component } from 'react';
import './common.css';

class Dropdown extends Component { 
  handleChange = (e) => {  
      const {type, selection} = this.props;
      selection(e.target.value, type); 
  }

  render(){
    const {timeOptions, label} = this.props;
    return(
      <div>
        <span className="label">{label}</span>
        <br></br>
        <select onChange={this.handleChange} className="selection">
        <option hidden disabled selected value > -- select an option -- </option>
        {timeOptions.map(value => <option value={value} key={value}>{value}</option>)} 
            
        </select>
      </div>        
    )
  }
}

export default Dropdown;