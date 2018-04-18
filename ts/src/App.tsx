import * as React from 'react'
import { connect } from 'react-redux'

import Modal from './components/Modal'
import Navbar from './components/Navbar'

import { GET_STORE, createAction } from './action'

interface ITProps {

  getStore: (prop: any) => {}

  // 是否显示浮层
  showModal: boolean
}
interface ITState {

}


class App extends React.Component<ITProps, ITState> {
  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    const {
      getStore
    } = this.props
    let db = localStorage.getItem("alchemy") || {}
    getStore(db)
  }

  public render(): JSX.Element {
    const {
      getStore,
      showModal
    } = this.props

    return (
      <div className="container-fluid">
        <Navbar />
        {showModal && <Modal />}
      </div>
    )
  }
}

interface ITStateToProps {
  showModal: boolean
}

const mapStateToProps = (state: any): ITStateToProps => ({
  showModal: state.showModal
})

const mapDispatchToProps = (dispatch: any): any => ({
  getStore: (data: any) => {
    dispatch(createAction(GET_STORE, data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)