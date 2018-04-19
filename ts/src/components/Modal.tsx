import * as React from 'react'
import { connect } from 'react-redux'

import { createAction, TOGGLE_MODAL } from '../action'

import { ITAlchemysItem } from '../interfaces'

import AlchemyInput from './AlchemyInput'

const getSelectList = ({ inputText, alchemys }: any): Array<any> => {
  let tempList: Array<any> = []

  if (inputText) {
    alchemys.map((item: any) => {
      // 先比较拼音 再比较中文
      if (item.py.indexOf(inputText) >= 0 || item.name.indexOf(inputText) >= 0) {
        tempList.push(item)
      }
    })
  }
  return tempList
}

interface ITProps {
  toggleModal: () => {}
  alchemys: Array<ITAlchemysItem>
}
interface ITState {
  inputText: string
  focusIndex: number
}


class Modal extends React.Component<ITProps, ITState> {
  constructor(props: any) {
    super(props)
    this.state = {
      inputText: '',
      focusIndex: null
    }
  }
  public render(): JSX.Element {

    let {
      inputText
    } = this.state

    let editprops = {
      valueChange: this.valueChange,
      index: 0
    }

    let selectList = getSelectList({
      inputText,
      alchemys: this.props.alchemys
    })
    
    return (
      <div className="modal bd-example-modal-lg" style={{ display: 'block' }}>
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">添加炼金组</h5>
              <button type="button" className="close" onClick={this.handleClickClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                {
                  [0, 1, 2].map(item => {
                    editprops.index = item
                    return <AlchemyInput {...editprops} key={item} />
                  })
                }
                <div className="col">
                  <input type="text" className="form-control" placeholder="添加备注" />
                </div>
              </div>
              <ul className="itemlist">
                {
                  !!selectList.length && selectList.map(item => <li key={item.id} onClick={this.handleClickSelect.bind(this, item)}>{item.name}</li>)
                }
              </ul>
            </div>
            {/* <EditList {...editprops} /> */}
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.handleClickSave}>保存</button>
              <button type="button" className="btn btn-secondary" onClick={this.handleClickClose}>关闭</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleClickSelect = (data: any) => {
    console.log(data)
  }

  handleClickClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.toggleModal()
  }

  handleClickSave = (e: React.MouseEvent<HTMLButtonElement>) => {

    // console.log(this.state.values)
  }

  valueChange = ({ value, index }: any) => {
    this.setState({
      inputText: value,
      focusIndex: index
    })
  }

}

const mapStateToProps = (state: any): any => ({
  alchemys: state.alchemys
})

const mapDispatchToProps = (dispatch: any): any => ({
  toggleModal: () => {
    dispatch(createAction(TOGGLE_MODAL, false))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)