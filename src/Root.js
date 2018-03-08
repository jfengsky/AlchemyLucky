// https://github.com/jfengsky/javascript/blob/master/indexedDB/demo.js

import React, { Component } from 'react'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dblist: []
    }
  }

  componentDidMount() {
    let storage = window.localStorage
    let json = storage.getItem("alchemy")
    if (json) {
      this.setState({
        dblist: JSON.parse(json)
      })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light" style={{ background: '#e3f2fd' }}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>

            <button className="btn btn-primary my-2 my-sm-0" onClick={this.createLayer}>添加珠子</button>

          </div>
        </nav>

        <table className="table">
          <tbody>
            <tr>
              <th scope="row"><input className="form-check-input" type="checkbox" value="" /></th>
              <td>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn btn-outline-success">
                    <input type="radio" />R8
                  </label>
                  <label className="btn btn btn-outline-success">
                    <input type="radio" />流水珠
                  </label>
                </div>
              </td>
              <td>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn btn-outline-success">
                    <input type="radio" />R8
                  </label>
                  <label className="btn btn btn-outline-success">
                    <input type="radio" />毒瓶珠
                  </label>
                </div>
              </td>
              <td>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn btn-outline-danger">
                    <input type="radio" />R8
                  </label>
                  <label className="btn btn btn-outline-danger">
                    <input type="radio" />攻击珠
                  </label>
                </div>
              </td>
              <td>
                <div className="dropdown show">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">操作</a>

                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#">设置为连续跳过节点</a>
                    <a className="dropdown-item" href="#">编辑珠子</a>
                    <a className="dropdown-item" href="#">设置为未跳过</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="button" className="btn btn-primary" id="addDB">添加</button>
          <button type="button" className="btn btn-secondary">修改</button>
          <button type="button" className="btn btn-success">查询</button>
          <button type="button" className="btn btn-danger">删除</button>
        </div>
      </div>
    )
  }

  createLayer = e => {
    let container = document.createElement('div')
  }

}