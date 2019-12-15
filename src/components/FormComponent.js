/* 
Container/Component Architecture

see explanation:  http://medium.com/@dan-abramov/smart-and-dumb-components-7ca2f9a7c7d0
Dan Abramov is one of the primary develolpers of the React framework

Form Component - UI LOGIC / RENDERING LOGIC Some names:  "Presentational Component", "Dumb Components"

*Only in charge of receiving props and displaying things correctly

hold all elements but you need to pass down all properties through props

*/

import React from 'react'
import '../styles.css'


function FormComponent(props){
	return(
         <main className="App-wrapper">
              <h1 className="App-header">Travel Form App</h1>
              <form className="App-form" >
              <input  type="text" 
                      name="firstName" 
                      value={props.data.firstName} 
                      placeholder="First Name" 
                      onChange={props.handleChange}
              />
              <br />

              <input  type="text" 
                      name="lastName" 
                      value={props.data.lastName} 
                      placeholder="Last Name" 
                      onChange={props.handleChange}
              />
              <br />

              <input  type="text" 
                      name="age" 
                      value={props.data.age}
                      placeholder="Age"                        
                      onChange={props.handleChange}
              />
              <br />
              <br />

              <input  type="radio" 
                      name="gender" 
                      value="Male"
                      checked={props.data.gender === "Male"}
                      onChange={props.handleChange}
              />  Male

              <input  type="radio" 
                      name="gender" 
                      value="Female"
                      checked={props.data.gender === "Female"}
                      onChange={props.handleChange}
              />  Female             
              <br />              
              <br />

              <label>Destination:  </label> 
              <select name="destination" value={props.data.destination} onChange={props.handleChange}>
                  <option value="Long Beach">Long Beach</option>
                  <option value="San Diego">San Diego</option>
                  <option value="Bangkok">Bangkok</option>
              </select>
              <br />
              <br />

              <input  type="checkbox" 
                      name="dietaryRestriction" 
                      value={props.data.dietaryRestriction} 
                      checked={props.data.dietaryRestriction} 
                      onChange={props.handleChange}
              />Dietary Restrictions?                         
              <br />
              <br />

              <label>Entered Information:</label><br />

              <h3>Full Name:  {props.data.firstName} {props.data.lastName}</h3>
              <h3>Age:  {props.data.age}</h3>
              <h3>Gender: {props.data.gender}</h3>
              <h3>Your Destination: {props.data.destination}</h3>
              <h3>Dietary Restrictions: {props.data.dietaryRestriction ? "Yes" : "No"}</h3> 


              <button className="App-button">Submit</button>

              </form>
              <h3 className="App-footer">React JS - TaLoveous Goodwin</h3>

          </main>
		)
}

export default FormComponent
