/* 
Container/Component Architecture

returns FormContainer - table of contents that delegrates the actual rendering to the Components themselves


This app creates an interactive application that collects users data stored in and updated on the fly.
Form data can be submitted to an API
*/

import React from 'react'
import FormContainer from './components/FormContainer'


function App(){
    return(
        <FormContainer />
      )  
}


export default App