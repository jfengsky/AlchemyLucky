// https://github.com/jfengsky/javascript/blob/master/indexedDB/demo.js
// indexDB 参考 http://javascript.ruanyifeng.com/bom/indexeddb.html

import React, { Component } from 'react'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      db: null,
      isAdd: false,
    }
  }

  componentDidMount() {
    let db = this.get()
    this.setState({
      db
    })
  }

  render() {
    let {
      db,
      isAdd
    } = this.state
    return (
      <div>
        <div>
          <button onClick={this.addList}>{isAdd ? '取消': '添加'}炼金组</button>
          <button>任务1次</button>
          <button>炼金1次</button>
        </div>
        {isAdd && <div>
          <input type="text" ref="item1" />
          <input type="text" ref="item2" />
          <input type="text" ref="item3" />
          <button onClick={this.addItems}>添加</button>
        </div>}

        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }

  get = () => {
    return localStorage.getItem("alchemy")
  }

  save = () => {

  }

  addList = e => {
    this.setState({
      isAdd: !this.state.isAdd
    })
  }

  addItems = e => {

    let {
      db
    } = this.state

    const {
      item1,
      item2,
      item3
    } = this.refs

    if(!db){
      db = []
    }

    db.push({
      
    })

  }
}