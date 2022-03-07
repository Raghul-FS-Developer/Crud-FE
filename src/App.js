import './App.css';
import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import Sidebar from './component/Sidebar';
import Dashboard from './component/Dashboard';
import Allstudents from './component/Allstudents';
import Addstudents from './component/Addstudents';
import Editstudent from'./component/Editstudent';



            function App() {



              useEffect(()=>{

              })
              
              let [data,setData]=useState([])

              let data1={earnings:"30000",annual:"3,60,000",task:"20%",pending:20}
            
              return<>
              
              <Router>
              
                
              <div style={{display:"flex",flexDirection:"row"}}><Sidebar/>
                <div><Routes>
                
                <Route path='/dashboard' element={<Dashboard value={data1}/>}/>
                  <Route path='/all-students' element={<Allstudents/>}/>
                  <Route path='/add-student' element={<Addstudents/>}/>
                  <Route path='/edit-student/:id' element={<Editstudent/>}/>
                  <Route path='/' element={<Dashboard value={data1}/>}/>
                </Routes></div></div>
              
                </Router>
              </>
              
            }

            export default App;
