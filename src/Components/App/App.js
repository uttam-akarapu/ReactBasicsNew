import Car from "../CSSModules/Car/Car";
import Persons from "../CSSModules/Persons/Persons";
import ReactLifecycleHooks from '../ReactLifecycleHooks/ReactLifecycleHooks';
import UserRegistration from "../Forms/UserRegistration/UserRegistration";
import FragmentDemo from "../FragmentDemo/FragmentDemo";
import ParentComp from "../PureComp/ParentComp";
import RefsDemo from "../Refs/RefsDemo";
import Hero from "../ErrorDemo/Hero";
import ErrorBoundary from "../ErrorDemo/ErrorBoundary";
import ClickCounter from "../HOCDemo/ClickCounter";
import HoverCounter from "../HOCDemo/HoverCounter";
import ClickCounter2 from "../RenderPropsDemo/ClickCounter2";
import HoverCounter2 from "../RenderPropsDemo/HoverCounter2";
import User from "../RenderPropsDemo/User";
import CounterComponent from "../RenderPropsDemo/CounterComponent";
import UserC from "../ContextDemo/UserC";
import GetList from "../HTTPDemo/GetList";
import PostFormList from "../HTTPDemo/PostFormList";
import ClassCounter from "../HooksDemo/ClassCounter";
import HookCounter from "../HooksDemo/HookCounter";
import HookCounterThree from "../HooksDemo/HookCounterThree";
import EffectCounterDemo from "../useEffectHookDemo/EffectCounterDemo";
import HookCounterFour from "../HooksDemo/HookCounterFour";
import HookMouse from "../useEffectHookDemo/HookMouse";
import UnMountDemo from "../useEffectHookDemo/UnMountDemo";
import DataFetching from "../APIFetchUseEffect/DataFetching";



import './App.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from "../ContextDemo/UserContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age:'10'
    }

  }

  

  render() {
    return (
      <div className="App">
      <h1>Hello</h1>
      <Car/>
      <Persons age={this.state.age}/>
      <ReactLifecycleHooks/>
      <UserRegistration/>
      <FragmentDemo/>
      <ParentComp/>
      <RefsDemo/>
      <ErrorBoundary>
      <Hero name="Batman" error="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary error="Spider-man">
      <Hero name="Spider-man"/>
      </ErrorBoundary>
      {/*<ErrorBoundary error="Joker">
      <Hero name="Joker"/>
    </ErrorBoundary>*/}
      <ClickCounter name="Uttam"/>
      <HoverCounter name = "Vivaansh"/>
       <User name={(isLoggedIn)=>isLoggedIn ? 'Uttam' : 'Guest'}/>
      <CounterComponent render={(count,incementClickHandler) => (<ClickCounter2 count={count} incementClickHandler ={incementClickHandler}/>)}/>
      <CounterComponent render={(count,incementClickHandler) => (<HoverCounter2 count={count} incementClickHandler ={incementClickHandler}/>)}/>

       <UserProvider value="Uttam"> 
       <UserC/> 
       </UserProvider>

       <GetList/>
       <PostFormList/>
       <ClassCounter/>
       <HookCounter/>
       <HookCounterThree/>
       <HookCounterFour/>
       <EffectCounterDemo/>
      
       <UnMountDemo/>
       <DataFetching/>
      
         </div>
    );
  }
}



export default App;
