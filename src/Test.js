import React from 'react'


  
class Test extends React.Component {
  constructor(props) {
    super();

    this.state = {
      flag:false
    }
  }
   

  render() {
    return (
      <>
      <div onClick={() => this.setState({flag:!this.state.flag})}> Ckick on Div</div>
      <h1>{this.state.flag ? "true" : "false"}</h1>
      </>
    )
  }
}

export default Test;