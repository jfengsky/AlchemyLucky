// https://github.com/jfengsky/javascript/blob/master/indexedDB/demo.js
// indexDB 参考 http://javascript.ruanyifeng.com/bom/indexeddb.html

import React, { Component } from 'react'

export default class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      db: null
    }
  }

  componentDidMount() {

    const request = indexedDB.open("test", 2)
    let db

    // 第一次打开数据库时，会先触发upgradeneeded事件，然后触发success事件。
    request.onupgradeneeded = e => {
      console.log("Upgrading...")
    }

    request.onsuccess = e => {
      console.log("Success!")
      db = request.result
      console.log(db)
      this.setState({
        db
      })
    }

    request.onerror = e => {
      console.log("Error")
      console.log(e);
    }

    // request.onupgradeneeded = function () {
    //   console.log('upgrade')
    //   let db = request.result
    //   let store = db.createObjectStore("books", {
    //     keyPath: "isbn"
    //   })
    //   let titleIndex = store.createIndex("by_title", "title", {
    //     unique: true
    //   })
    //   let authorIndex = store.createIndex("by_author", "author")
    // }

    // request.onsuccess = ev => {
    //   this.setState({
    //     db: request.result
    //   })
    // }
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


        <div>
          <input type="text" id="dbname" />
          <input type="button" value="add DB" id="addIndexedDB" />
          <br />
          <label htmlFor="">title:<input type="text" ref="title" /></label>
          <label htmlFor="">author:<input type="text" ref="author" /></label>
          <label htmlFor="">isbn:<input type="text" ref="isbn" /></label>
          <input type="button" value="add store" onClick={this.addDaba} />
          <br />
          <input type="text" name="" id="delkey" />
          <input type="button" value="del store" id="delstore" />
          <br />
          <input type="text" name="" id="getkey" />
          <input type="button" value="get key" id="getkeybutton" />
          <br />
          <input type="button" value="get cursor" id="getCursor" />
          <br />
          <input type="button" id="delDB" value="delDB" />

        </div>

      </div>
    )
  }

  createLayer = e => {
    let container = document.createElement('div')
  }

  addDaba = e => {
    console.log('add store')
    let db = this.state.db
    let {
      title,
      author,
      isbn
    } = this.refs
    if (db) {

      // 检查有没有数据仓库，没有就创建一个
      if(!db.objectStoreNames.contains("firstOS")) {
        db.createObjectStore("firstOS", { keyPath: "email" })
      }

      let tx = db.transaction("books", "readwrite")
      let store = tx.objectStore("books")
      store.put({
        title: title.value,
        author: author.value,
        isbn: isbn.value
      })
      tx.complete = function () {
        console.log('push complete');
      }
    }
  }

}