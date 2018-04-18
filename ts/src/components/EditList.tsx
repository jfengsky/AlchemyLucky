import * as React from 'react'
import { connect } from 'react-redux'

import { ITAlchemysItem } from '../interfaces'

interface ITProps {
  alchemys: Array<ITAlchemysItem>
}
interface ITState {

  // 当前输入珠子列表
  values: Array<any>

  // 联想珠子列表
  inputList: Array<ITAlchemysItem>

  // 当前输入框序号
  focusIndex: Number

  // 输入框是否获取焦点
  isFocus: Boolean

  // 备注信息
  bak: string
}

class EditList extends React.Component<ITProps, ITState> {
  constructor(props: any) {
    super(props)
    this.state = {
      values: [],
      inputList: [],
      focusIndex: null,
      isFocus: false,
      bak: ''
    }
  }

  public render(): JSX.Element {

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
                  <input type="text" className="form-control" onFocus={this.handleFocus.bind(this, item)} onChange={this.handleChange} placeholder={`添加珠子${item + 1}`} />
                </div>
              )
            })
          }
          <div className="col">
            <input type="text" className="form-control" placeholder="添加备注" />
          </div>
        </div>
        <ul className="itemlist">
          {
            isFocus && !!inputList.length && <div>
              <dl>
                {
                  inputList.map( (item: any):JSX.Element => {
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

  handleFocus = (data: any) => {
    this.setState({
      isFocus: true,
      focusIndex: data
    })
  }

  handleChange = (e: any): void => {
    let value = e.target.value.trim()
    let tempList: Array<ITAlchemysItem> = []
    if (value) {

      this.props.alchemys.map(item => {
        // 先比较拼音 再比较中文
        if (item.py.indexOf(value) >= 0 || item.name.indexOf(value) >= 0) {
          tempList.push(item)
        }
      })

    }

    this.setState({
      inputList: tempList,
      isFocus: true
    })

  }

  handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let {
      focusIndex,
      values
    } = this.state

    // values[focusIndex] = {
    //   ..._data,
    //   index: focusIndex
    // }

    // this.setState({
    //   values,
    //   isFocus: false,
    //   focusIndex: null
    // }, () => {
    //   valueChange({
    //     values
    //   })
    // })

  }

}

const mapStateToProps = (state: any): any => ({
  alchemys: state.alchemys
})

const mapDispatchToProps = (dispatch: any): any => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(EditList)