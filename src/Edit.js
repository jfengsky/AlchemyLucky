/**
 * 增加或修改珠子
 */

import React, { Component } from 'react'

import alchemyList from './list'

export default class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: [],
      inputList: [],
      focusIndex: null,
      isFocus: false,
      bak: ''
    }
  }
  render() {

    let {
      inputList,
      isFocus,
      values,
      focusIndex,
      bak
    } = this.state

    return (
      <div className="modal-body">
        <div className="form-row">
          {
            [0, 1, 2].map(item => {
              return (
                <div className="col" key={item}>
                  <input type="text" defaultValue={values[item] ? values[item].name : ''} className="form-control" onFocus={this.handleFocus.bind(this, item)} onChange={this.handleChange} placeholder={`添加珠子${item + 1}`} />
                </div>
              )
            })
          }
          <div className="col">
            <input type="text" className="form-control" onChange={this.bakChange} defaultValue={bak} placeholder="添加备注" />
          </div>
        </div>
        <ul className="itemlist">
          {
            isFocus && !!inputList.length && <div>
              <dl>
                {
                  inputList.map(item => {
                    return <li key={item.id} onClick={this.handleClick.bind(this, item)}>{item.name}</li>
                  })
                }
              </dl>
            </div>
          }
        </ul>
      </div>
    )
  }

  bakChange = e => {
    console.log(e.target.value)
  }

  handleChange = e => {
    let value = e.target.value.trim()
    let tempList = []
    if (value) {

      alchemyList.map(item => {
        // 先比较拼音 再比较中文
        if (item.py.indexOf(value) >= 0 || item.name.indexOf(value) >= 0) {
          tempList.push(item)
        }
      })

    }

    this.setState({
      inputList: tempList,
      isFocus: true,
      value
    })

  }

  handleFocus = data => {
    this.setState({
      isFocus: true,
      focusIndex: data
    })
  }

  handleClick = _data => {

    let {
      valueChange
    } = this.props.handlers

    let {
      focusIndex,
      values
    } = this.state

    values[focusIndex] = {
      ..._data,
      index: focusIndex
    }

    this.setState({
      values,
      isFocus: false,
      focusIndex: null
    }, () => {
      valueChange({
        values
      })
    })
  }

}