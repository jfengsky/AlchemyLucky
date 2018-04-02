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
    // let storage = window.localStorage
    // let json = storage.getItem("alchemy")
    // if (json) {
    //   this.setState({
    //     dblist: JSON.parse(json)
    //   })
    // }

    /*





    var idbSupported = false, // 是否支持indexedDB 默认为不支持
      db;
    var indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;

    var customerData = [{
      ssn: '444-44-444',
      name: 'bill',
      age: 25,
      email: 'bill@mail.com'
    }, {
      ssn: '555-55-5555',
      name: 'terry',
      age: 32,
      email: 'terry@gmail.com'
    }];

    document.addEventListener('DOMContentLoaded', function () {
      if ('indexedDB' in window) {
        idbSupported = true;
      }

      if (idbSupported) {
        $('#addIndexedDB').click(function () {
          var dbname = $('#dbname').val();
        });
        var request = indexedDB.open("library");
        request.onupgradeneeded = function () {
          console.log('upgrade');
          var db = request.result;
          var store = db.createObjectStore("books", {
            keyPath: "isbn"
          });
          var titleIndex = store.createIndex("by_title", "title", {
            unique: true
          });
          var authorIndex = store.createIndex("by_author", "author");

        }

        request.onsuccess = function (ev) {
          console.log('success');
          db = request.result;

          document.getElementById('addDB').addEventListener('click', function () {
            console.log('add store');
            var tx = db.transaction("books", "readwrite");
            var store = tx.objectStore("books");
            var temp_title = $('#tit').val();
            var temp_auth = $('#auth').val();
            var temp_isbn = $('#isbn').val() - 0;
            // 添加 store
            store.put({
              title: temp_title,
              author: temp_auth,
              isbn: temp_isbn
            });
            tx.complete = function () {
              console.log('push complete');
            }
          });

          // del store
          $('#delstore').click(function () {
            console.log('del store');
            var tx = db.transaction("books", "readwrite");
            var store = tx.objectStore("books");
            var del_key = parseInt($('#delkey').val());
            console.log(del_key);
            var delstore = store.delete(del_key);
            delstore.onsuccess = function () {
              console.log('has delete');
            }
          });

          // get store
          $('#getkeybutton').click(function () {
            console.log('get key');
            var tx = db.transaction("books", "readwrite");
            var store = tx.objectStore("books");
            var get_key = parseInt($('#getkey').val());
            var getstore = store.get(get_key);
            console.log(getstore);
            getstore.onsuccess = function (ev) {
              console.log(this.result);
            }
          });


          // del DB
          $('#delDB').click(function () {
            console.log('del DB');
            db.delete("library");
          });

          $('#getCursor').click(function () {
            var tx = db.transaction("books", "readonly");
            var store = tx.objectStore("books");
            var index = store.index("by_author");

            var request2 = index.openCursor(IDBKeyRange.only("auth2"));

            request2.onsuccess = function () {
              var cursor = request2.result;
              if (cursor) {
                // Called for each matching record.
                console.log(cursor.value);
                // console.log(cursor.value.isbn, cursor.value.title, cursor.value.author);
                cursor.continue();
              } else {
                // No more matching records.
                console.log('get null');
              }
            };



          });
          db.close();
          console.log('close')
        }

      }



    }, false);


    */











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
          <label htmlFor="">title:<input type="text" id="tit" /></label>
          <label htmlFor="">author:<input type="text" id="auth" /></label>
          <label htmlFor="">isbn:<input type="text" id="isbn" /></label>
          <input type="button" value="add store" id="addDB" />
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

}