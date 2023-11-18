import { combineReducers } from '@reduxjs/toolkit';
import counterSlicer from '../slices/counterSlicer';


const rootReducers = combineReducers({
   countState:counterSlicer
});

export default rootReducers;