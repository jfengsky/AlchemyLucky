import React, { Component } from 'react'

import Edit from './Edit'

export default class Navbar extends Component {
  render() {
    const {
      closeLayer
    } = this.props.handlers
    return (
      <div className="modal bd-example-modal-lg" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">添加炼金组</h5>
              <button type="button" className="close" onClick={closeLayer}>
                <span>&times;</span>
              </button>
            </div>
            <Edit handlers={{valueChange: this.valueChange}} />
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.save}>保存</button>
              <button type="button" className="btn btn-secondary" onClick={closeLayer}>关闭</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  save = e => {
    this.props.handlers.closeLayer()
  }

  valueChange = data => {
    debugger
  }
}