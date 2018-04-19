import * as React from 'react'
import { connect } from 'react-redux'

interface ITProps {
  valueChange: any
  index: number
}
interface ITState {
  value: any
}


class AlchemyInput extends React.Component<ITProps, ITState> {

  constructor(props: any) {
    super(props)
    this.state = {
      value: ''
    }
  }
  
  public render(): JSX.Element {
    return (
      <div className="col">
        <input type="text" value={this.state.value} className="form-control" onChange={this.handleChange}  />
      </div>
    )
  }

  handleChange = (e: any) => {
    let value = e.target.value.trim()
    this.setState({
      value
    }, () => {
      this.props.valueChange({value, index: this.props.index})
    })
  }

}

export default AlchemyInput