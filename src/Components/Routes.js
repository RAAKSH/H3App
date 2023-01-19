import React,{ Component} from 'react'
import {  Route, Routes } from "react-router-dom";
import  HomePage  from './HomePage';


export default class RoutesComponent extends Component {
  render() {
    return (
      <div>
        <Routes>  
            <Route exact path="/" element={<HomePage/>} />
            {/* <Route path="*" element={NotFound} /> */}
          </Routes>
      </div>
    )
  }
}

