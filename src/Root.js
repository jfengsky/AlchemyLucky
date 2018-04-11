// https://github.com/jfengsky/javascript/blob/master/indexedDB/demo.js
// indexDB 参考 http://javascript.ruanyifeng.com/bom/indexeddb.html

import React, { Component } from 'react'

import alchemyList, { getAlchemyName } from './list'

import Edit from './Edit'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      db: null,
      isAdd: false,
      inputList: []
    }
  }

  componentDidMount() {
    let db = this.get()
    this.setState({
      db: JSON.parse(db)
    })
  }

  render() {
    let {
      db,
      isAdd,
      inputList
    } = this.state
    return (
      <div>
        <div>
          <button onClick={this.addList}>{isAdd ? '取消' : '添加'}炼金组</button>
          <button>任务1次</button>
          <button>炼金1次</button>
        </div>
        {isAdd && <div>
          <ul>
          {
            [0,1,2].map(item => <Edit key={item} valueChange={this.itemChange} data={{type: item, valueId: inputList[item]}} />)
          }
          </ul>
          <button onClick={this.addItems}>添加</button>
          
        </div>}

        {
          db && !!db.length && <div>
            {
              db.map(({l},index) => {
                return <ul key={index} className="line">
                  {
                    l.map( (item, _index) => {
                      return <li key={_index} className="fl">{getAlchemyName(item)}</li>
                    })
                  }
                </ul>
              })
            }
          </div>
        }
        
      </div>
    )
  }

  get = () => {
    return localStorage.getItem("alchemy")
  }

  save = data => {
    localStorage.setItem('alchemy', JSON.stringify(data))
  }

  addList = e => {
    this.setState({
      isAdd: !this.state.isAdd
    })
  }

  itemChange = data => {
    let {
      id,
      type
    } = data
    let {
      inputList
    } = this.state
    inputList[type] = id
    this.setState({
      inputList
    })
  }

  addItems = e => {

    let {
      db,
      inputList
    } = this.state

    if (!db) {
      db = []
    }

    // l: list 用来存珠子 d: done 是否完成
    
    db.push({
      l: inputList,
      d: 0
    })

    this.setState({
      isAdd: false,
      db,
      inputList: []
    })

    this.save(db)

  }
}