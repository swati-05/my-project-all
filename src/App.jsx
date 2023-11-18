import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Pages/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { counterFun, success, counterStart } from './Redux/slices/counterSlicer'

function App() {

  const dispatch = useDispatch();
  const { count, loading } = useSelector(state => state.countState)

useEffect(() => {
  const xyz= setInterval(() => {
      dispatch(counterStart(count+1))
      
    }, 1000)

  return () => {
   clearInterval(xyz)
  }
}, [count])

  
  return (
    <>
      <div className='text-center'>
        <button onClick={
          () => {
            dispatch(counterFun(count + 1));
            setTimeout(() => {
              dispatch(success())
            }, 1000);
          }
        }>increase</button>
        <div>{
          loading ? <p>Loading...</p> : count
        }</div>
        <button onClick={
          () => {
            dispatch(counterFun(count - 1))
            setTimeout(() => {
              dispatch(success())
            }, 1000);
          }
        }
        >decrease</button>
      </div>
    </>
  )
}

export default App
