import * as React from 'react'
import { connect } from 'react-redux'

import { ITAlchemysItem } from '../interfaces'

interface ITProps {
  alchemys: Array<ITAlchemysItem>
  
  valueChange: (data: any) => {}
}
interface ITState {

  // 联想珠子列表
  inputList: Array<ITAlchemysItem>

  // 当前输入框序号
  focusIndex: any
  
  // 输入框是否获取焦点
  isFocus: Boolean

  values: Array<any>
  bak: string
}

class EditList extends React.Component<ITProps, ITState> {
  constructor(props: any) {
    super(props)
    this.state = {
      inputList: [],
      focusIndex: null,
      isFocus: false,
      values: [],
      bak: ''
    }
  }

  public render(): JSX.Element {

    let {
      inputList,
      isFocus,
      focusIndex,
      values,
      bak
    } = this.state

    return (
      <div className="modal-body">
        <div className="form-row">
          {
            [0, 1, 2].map(item => {
              return (
                <div className="col" key={item}>
                  <input type="text" value={values[item] ? values[item].name : ''} className="form-control" onFocus={this.handleFocus.bind(this, item)} onChange={this.handleChange} placeholder={`添加珠子${item + 1}`} />
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
                  inputList.map((item: any): JSX.Element => {
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

  handleFocus = (data: Number): void => {
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

  handleClick = (data: ITAlchemysItem): void => {

    let {
      focusIndex,
      values,
    } = this.state

    let {
      valueChange
    } = this.props

    values[focusIndex] = {
      ...data,
      index: focusIndex
    }

    this.setState({
      isFocus: false,
      focusIndex: null,
      inputList: [],
      values
    }, () => {
      valueChange(values)
    })

  }

}

const mapStateToProps = (state: any): any => ({
  alchemys: state.alchemys
})

const mapDispatchToProps = (dispatch: any): any => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(EditList)