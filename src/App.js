import React from 'react';
// import React, { useReducer } from 'react';
import './App.css';
import Butons from './useimperatvehook/Butons';
// import FormCustomHook from './components/FormCustomHook';
// import CounterCustomHooksOne from './components/CounterCustomHooksOne';
// import CounterCustomHooksTwo from './components/CounterCustomHooksTwo';
// import DocTitleOne from './components/DocTitleOne';
// import DocTitleTwo from './components/DocTitleTwo';
// import UseRefExampleTwo from './components/UseRefExampleTwo';
// import RefinClassComponentTwo from './components/RefinClassComponentTwo';
// import UseRefExampleOne from './components/UseRefExampleOne';
// import CallBackParent from './components/CallBackParent';
// import UseMemoEx from './components/UseMemoEx';
// import DataFetching from './components/DataFetching';
// import DataFetchingTwo from './components/DataFetchingTwo';
// import ReducerContextA from './components/ReducerContextA';
// import ReducerContextB from './components/ReducerContextB';
// import ReducerContextD from './components/ReducerContextD';
// import CounterReducer2 from './components/CounterReducer2';
// import CounterReducer3 from './components/CounterReducer3';
// import ComponentAFunc from './components/ComponentAFunc';
// import CounterReducer from './components/CounterReducer';
// import ComponentA from './components/ComponentA';
// import { ContextUser, UserProvider } from './ContextUser';
// import FetchingData from './components/FetchingData';
// import ClassCompEdIncorrect from './components/ClassCompEdIncorrect';
// import CleanUpContainer from './components/CleanUpContainer';
// import InCorrectDependency from './components/InCorrectDependency';
// import LimituseEffectFunc from './components/LimituseEffectFunc';
// import LimitUseEffectClass from './components/LimitUseEffectClass';
// import ClassComponent from './components/ClassComponent';
// import UseEffect from './components/UseEffect';
// import HookCounter4 from './components/HookCounter4';
// import HookCounter from './components/HookCounter';
// import HookCounter2 from './components/HookCounter2';
// import HookCounter3 from './components/HookCounter3';

//  export const UserContext = React.createContext();
//  export const ChannelContext = React.createContext();

/* useReducer with useContext */

// export const CountContext = React.createContext();

function App() {
//   const initialState = {
//     firstCounter: 0
//   }
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case 'increment':
//         return { ...state, firstCounter: state.firstCounter + action.value }
//       case 'decrement':
//         return { ...state, firstCounter: state.firstCounter - action.value }
//       case 'reset':
//         return initialState
//       default:
//         return state
//     }
//   }
//   const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='App'>
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}
      {/* <ClassComponent /> */}
      {/* <UseEffect /> */}
      {/* <LimitUseEffectClass /> */}
      {/* <LimituseEffectFunc /> */}
      {/* <CleanUpContainer /> */}
      {/* <InCorrectDependency /> */}
      {/* <ClassCompEdIncorrect /> */}
      {/* <FetchingData /> */}
      {/* <UserProvider value='Keerthi'>
        <ComponentA />
      </UserProvider> */}
      {/* <ContextUser.Provider value='Checking'>
        <ComponentA />
      </ContextUser.Provider> */}
      {/* <ComponentAFunc /> */}
      {/* <CounterReducer /> */}
      {/* <CounterReducer2 /> */}
      {/* <CounterReducer3 /> */}
      {/* count - {count.firstCounter}
      <CountContext.Provider value={{contextDispatch:dispatch,contextCount:count}} >
        <ReducerContextA />
        <ReducerContextB />
        <ReducerContextD />
      </CountContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <DataFetchingTwo /> */}
      {/* <CallBackParent /> */}
      {/* <UseMemoEx /> */}
      {/* <UseRefExampleOne /> */}
      {/* <RefinClassComponentTwo /> */}
      {/* <UseRefExampleTwo /> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo /> */}
      {/* <CounterCustomHooksOne />
      <CounterCustomHooksTwo /> */}
      {/* <FormCustomHook /> */}
      <Butons />
    </div>
  );
}

export default App;
