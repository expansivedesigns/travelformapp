/* 
Container/Component Architecture

Form Container - BUSINESS LOGIC.  Other names: "Container Components", "Smart Component"  
Mandates how the business logic changes.  
*It's job is to maintain and update state.  Delegrates all the UI logic to another component
Holds class, this.state, methods, render(),
imports component files and export

Remember to use an equal sign not a colon to assign the event. target to the const { type, name, value, checked }
in handleChange
*/

import React, {Component} from 'react'
import FormComponent from './FormComponent'

class FormContainer extends Component {
    constructor(){
        super()
        this.state = {
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          destination: "",
          dietaryRestriction: false
        }

    this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const { type, name, value, checked } = event.target
        type === "checkbox" ? this.setState({  [name]: checked  }) : this.setState({  [name]: value  })     
      }

    handleSubmit(){

    }

    render() {
        return(
            <FormComponent  handleChange={this.handleChange} 
                            data={this.state}/>
      )
    }
}

export default FormContainer