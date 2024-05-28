import React , {Component} from 'react'
import styles from './Counter.module.css'

class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
        this.increaseCount = this.increaseCount.bind(this)
        this.decreaseCount = this.decreaseCount.bind(this)
    }

    increaseCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decreaseCount(){
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
        return (
            <div>
                <h1> Counter App</h1>
                <div className={styles.counter}>Count: {this.state.count}</div>
                <div>
                <button onClick={this.increaseCount}>Increment</button>
                <button onClick={this.decreaseCount}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default Counter;