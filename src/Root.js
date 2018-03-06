import React, { Component } from 'react'

export default class Root extends Component {
  render() {
    return (
      <div className="container-fluid">
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

            <tr>
              <th scope="row"></th>
              <td>
                <button type="button" className="btn btn-dark">添加珠子</button>
              </td>
              <td>
                <button type="button" className="btn btn-dark">添加珠子</button>
              </td>
              <td>
                <button type="button" className="btn btn-dark">添加珠子</button>
              </td>
              <td>

              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}