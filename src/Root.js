// https://github.com/jfengsky/javascript/blob/master/indexedDB/demo.js
// indexDB 参考 http://javascript.ruanyifeng.com/bom/indexeddb.html

import React, { Component } from 'react'

import alchemyList, { getAlchemyName } from './list'

import Navbar from './Navbar'

import Modal from './Modal'

import Edit from './Edit'

import AlchemyList from './AlchemyList'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      db: {
        list: null
      },
      isAdd: false
    }
  }

  componentDidMount() {
    let db = this.get() || "{}"
    this.setState({
      db: JSON.parse(db)
    })
  }

  render() {
    let {
      db,
      isAdd
    } = this.state
    return (
      <div className="container-fluid">
        <Navbar handlers={{showLayer: this.showLayer}} />

        <AlchemyList db={db} />
        
        { isAdd && <Modal handlers={{ closeLayer: this.closeLayer}} /> }
      </div>
    )
  }

  get = () => {
    return localStorage.getItem("alchemy")
  }

  save = data => {
    localStorage.setItem('alchemy', JSON.stringify(data))
  }

  /*
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

    if (!db.list) {
      db.list = []
    }

    // l: list 用来存珠子 d: done 是否完成
    
    db.list.push({
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
  */
  showLayer = e => {
    this.setState({
      isAdd: true
    })
  }

  closeLayer = e => {
    this.setState({
      isAdd: false
    })
  }
}