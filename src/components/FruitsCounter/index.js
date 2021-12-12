// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  Mango = () => {
    this.setState(prevState => ({
      mango: prevState.mango + 1,
      banana: prevState.banana,
    }))
  }

  Banana = () => {
    this.setState(prevState => ({
      mango: prevState.mango,
      banana: prevState.banana + 1,
    }))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-holder">
        <div className="sub-holder">
          <h1 className="main-heading">
            Bob ate <span className="yellow">{mango}</span> mangoes{' '}
            <span className="yellow">{banana}</span> bananas
          </h1>
          <div className="fruits-holder">
            <div className="fruit-holder">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="Mango"
              />
              <button type="button" className="btn" onClick={this.Mango}>
                Eat Mango
              </button>
            </div>
            <div className="fruit-holder">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="Banana"
              />
              <button type="button" className="btn" onClick={this.Banana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
