import * as React from 'react'
import { connect } from 'react-redux'

import { createAction, TOGGLE_MODAL } from '../action'

import EditList from './EditList'

interface ITProps {
  toggleModal: () => {}
}
interface ITState {

}


class Modal extends React.Component<ITProps, ITState> {
  constructor(props: any){
    super(props)
  }
  public render(): JSX.Element {
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
            <EditList />
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">保存</button>
              <button type="button" className="btn btn-secondary" onClick={this.handleClickClose}>关闭</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  handleClickClose = (e: React.MouseEvent<HTMLButtonElement>) =>{
    this.props.toggleModal()
  }
}

const mapStateToProps = (state: any): any => ({
  
})

const mapDispatchToProps = (dispatch: any): any => ({
  toggleModal: () => {
    dispatch(createAction(TOGGLE_MODAL, false))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)