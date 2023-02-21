// import logo from './logo.svg';
import './App.css';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import User from './User';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import ClickHoverUserRender from './components/ClickHoverUserRender';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
// import ForwardRefParent from './components/ForwardRefParent';
// import HCClickCounter from './components/HCClickCounter';
// import HCClickHoverParent from './components/HCClickHoverParent';
// import HCHoverCounter from './components/HCHoverCounter';
// import Greet  from './components/GreetFunc';
// import Welcome from './components/GreetClass';
// import JavaScript from './components/ClassWithJSX';
// import WithoutJSX from './components/ClassWithoutJSX';
// import PropsPassing from './components/propsInFunctionalComponent';
// import PropsInClassComponent from './components/propsInClassComponent';
// import StateComponent from './components/State';
// import SetState from './components/SetState';
// import CallBackFunction from './components/CallBackFunction';
// import DestructingPropsInFunc from './components/DestructuringPropsInFunc';
// import DestructuringPropsStateInClassComponent from './components/DestructuringPropsStateInClassComponent';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventHandlingClass from './components/EventHandlingClass';
// import MthdAsPropsParent from './components/MthdAsPropsParent';
// import ConditionalOperator from './components/ConditionalOperator';
// import NameList from './components/NameList';
// import ToDoList from './components/IndexAsKeyAntiPattern';
// import Stylesheets from './components/Stylesheets';
// import InlineStyling from './components/InlineStyling';
// import CSSModules from './components/CSSModules';
// import FormHandling from './Basics of Form Handling';
// import LifeCycleMount from './components/LifeCycleMount';
// import LifeCycleUpdateParent from './components/LifeCycleUpdateParent';
// import FragmentDemo from './components/FragmentDemo';
// import FragmentTable from './components/FragmentTable';
// import FragmentArray from './components/FragmentArray';
// import PureComp from './components/PureComp';
// import ParentForPureReg from './components/ParentForPureRegMemo';
// import PortalDemo from './components/PortalDemo';
// import RefsClassComponentChild from './components/RefsClassComponentChild';
// import RefsClassComponentParent from './components/RefsClassComponentParent';
// import RefsDemo from './components/RefsDemo';
// import ErrorBoundaryCLass from './ErrorBoundaryCLass';
// import ErrorBoundaryParent from './ErrorBoundaryParent';


function App() {
  return (
   <div className="Greet">
   
    {/* <Greet />
    <Welcome />
    <JavaScript />
    <WithoutJSX />
    <PropsPassing name="Bruce" heroName="Batman" >
      <span>This is children props, </span>
      <span>This is second children props </span>
    </PropsPassing>
    <PropsPassing name="Clark" heroName="Superman" >
       <button>Action</button> 
    </PropsPassing>
    <PropsPassing name="Diana" heroName="WonderWoman" />
    <PropsInClassComponent name="Keerthi" >
      <span>Hi , this is child component!</span>
    </PropsInClassComponent> */}
    
    {/* <StateComponent /> */}
    {/* <SetState /> */}
    {/* <CallBackFunction value="1" > </CallBackFunction > */}
    {/* <DestructingPropsInFunc name="Anand" fullName="Anand Krishnan" > 
      Thank you!
    </DestructingPropsInFunc> */}
    {/* <DestructuringPropsStateInClassComponent name="Jasper" age="5" >
      Im a children props.
    </DestructuringPropsStateInClassComponent> */}
    {/* <FunctionClick /> */}
    {/* <ClassClick /> */}
    {/* <EventHandlingClass /> */}
    {/* <MthdAsPropsParent /> */}
    {/* <ConditionalOperator /> */}
    {/* <NameList /> */}
    {/* <ToDoList /> */}
    {/* <Stylesheets primary={false} /> */}
    {/* <InlineStyling /> */}
    {/* <CSSModules /> */}
    {/* <FormHandling /> */}
    {/* <LifeCycleMount /> */}
    {/* <LifeCycleUpdateParent /> */}
    {/* <FragmentDemo /> */}
    {/* <FragmentTable /> */}
    {/* <FragmentArray /> */}
    {/* <PureComp /> */}
    {/* <ParentForPureReg /> */}
    {/* <RefsDemo /> */}
    {/* <RefsClassComponentChild /> */}
    {/* <RefsClassComponentParent /> */}
    {/* <ForwardRefParent /> */}
    {/* <PortalDemo /> */}
    {/* <ErrorBoundaryParent /> */}
    {/* <HCClickCounter needOfSpreadOperator='*' /> 
    <HCHoverCounter needOfSpreadOperator='*' />     */}
    {/* <HCClickHoverParent /> */}
    {/* <ClickCounterTwo />
    <HoverCounterTwo />
    <User render={(isLoggedIn)=> isLoggedIn ? 'User' : 'Guest'} /> Here the prop value is a func */}
    {/* Any 1 mthd can be used */}
    {/* Rendering props by passing function to attribute ==== REFER NOTES ====*/}
    {/* Rendering props by passing children ==== REFER NOTES ====*/}
    <UserProvider value="Rajam">
      <ComponentC />
    </UserProvider>    
  </div>
  ); 
  
}

export default App;

