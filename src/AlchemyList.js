import React, { Component } from 'react'

export default class AlchemyList extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col" width="5%">#</th>
            <th scope="col">一</th>
            <th scope="col">二</th>
            <th scope="col">三</th>
            <th scope="col" width="10%">备注</th>
            <th scope="col" width="12%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <td>1</td>
            <td>攻击珠</td>
            <td>爆瓶珠</td>
            <td>麻痹珠</td>
            <td>9</td>
            <td>修改 设为跳过</td>
          </tr>
          <tr className="table-warning">
            <td>2</td>
            <td>攻击珠</td>
            <td>爆瓶珠</td>
            <td>麻痹珠</td>
            <td>9</td>
            <td>修改</td>
          </tr>
        </tbody>
      </table>
    )
  }
}