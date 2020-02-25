import React, { Component } from 'react'
import "../css/App.scss"
import Navigation from "./Navigation"
import ToDosContainer from './ToDosContainer'
import ToDonesContainer from './ToDonesContainer'


export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      items:[
        {text:"Wash my face", done:false},
        {text:"walk the dog", done:false},
        {text:"pay the rent", done:false},
        {text:"make a website", done:true},
        {text:"Call amy mom", done:false},
        {text:"Finish reading my book", done:true},
        {text:"Make more money", done:true}
      ]
    }
  }
  render() {

      const toDos= this.state.items.filter(el => !el.done)
      const toDones = this.state.items.filter(el=> el.done)

    return (
      <div className="app">
        <Navigation/>
        <ToDosContainer items={toDos}/> 
        <ToDonesContainer items={toDones}/>
      </div>
    )
  }
}
