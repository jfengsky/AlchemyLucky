import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    const {
      showLayer
    } = this.props.handlers
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)">任务一次</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)">炼金一次</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-light" type="submit" onClick={showLayer}>添加炼金组</button>
      </nav>
    )
  }
}