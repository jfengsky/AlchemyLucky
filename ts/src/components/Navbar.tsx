import * as React from 'react'
import { connect } from 'react-redux'

import { createAction, TOGGLE_MODAL } from '../action'

interface ITProps {
  DB: any
  toggleModal: () => {}
}
interface ITState {

}


class Navbar extends React.Component<ITProps, ITState> {
  constructor(props: any){
    super(props)
  }
  public render(): JSX.Element {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)">任务一次</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)">炼金一次</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-light" type="button" onClick={this.handleClickAdd}>添加炼金组</button>
      </nav>
    )
  }

  handleClickAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.toggleModal()
  }
}

interface ITStateToProps {
  DB: any
}

const mapStateToProps = (state: any): ITStateToProps => ({
  DB: state.DB
})

const mapDispatchToProps = (dispatch: any): any => ({
  toggleModal: () => {
    dispatch(createAction(TOGGLE_MODAL, true))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)