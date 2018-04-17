/**
 * 增加或修改珠子
 */

import React, { Component } from 'react'

import alchemyList from './list'

export default class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      inputList: [],
      isFocus: false
    }
  }
  render() {

    let {
      inputList,
      isFocus,
      value
    } = this.state

    return (
      <div className="modal-body">
        <div className="form-row">
          {
            [1, 2, 3].map(item => {
              return (
                <div className="col" key={item}>
                  <input type="text" className="form-control" placeholder={`添加珠子${item}`} />
                </div>
              )
            })
          }
          <div className="col">
            <input type="text" className="form-control" placeholder="添加备注" />
          </div>
        </div>
        <ul className="itemlist">
          <li>攻击珠</li>
          <li>毒瓶珠</li>
          <li>攻击珠</li>
          <li>毒瓶珠</li>
          <li>攻击珠</li>
          <li>毒瓶珠</li>
          <li>攻击珠</li>
          <li>毒瓶珠</li>
        </ul>
      </div>
    )
    /*
    return (<li style={{ float: 'left' }}>
      <input type="text" ref="item1" className="ivu-input" value={value} onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} />
      {
        isFocus && !!inputList.length && <div>
          <dl>
            {
              inputList.map(item => {
                return <dd key={item.id} onClick={this.handleClick.bind(this, item)}>{item.name}</dd>
              })
            }
          </dl>
        </div>
      }
    </li>)
    */
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

  handleBlur = e => {
    // this.setState({
    //   isFocus: false
    // })
  }

  handleFocus = e => {
    this.setState({
      isFocus: true
    })
  }

  handleClick = _data => {

    let {
      data,
      valueChange
    } = this.props

    this.setState({
      value: _data.name,
      isFocus: false
    }, () => {
      this.props.valueChange({
        ..._data,
        type: data.type
      })
    })
  }

}