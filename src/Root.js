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
              <td><button type="button" className="btn btn-outline-success">Success</button></td>
              <td><button type="button" className="btn btn-outline-danger">Danger</button></td>
              <td><button type="button" className="btn btn-light">操作</button></td>
            </tr>
            <tr>
              <th scope="row"><input className="form-check-input" type="checkbox" value="" /></th>
              <td>Jacob</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td><button type="button" className="btn btn-light">操作</button></td>
            </tr>
            <tr>
              <th scope="row"><input className="form-check-input" type="checkbox" value="" /></th>
              <td>Larry</td>
              <td>Larry</td>
              <td>the Bird</td>
              <td><button type="button" className="btn btn-light">操作</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}