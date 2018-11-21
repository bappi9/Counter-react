import React, { Component } from 'react'
import StateLess from './stateLess'


class Counter extends Component {

    state = {
        count: 0,
        books: [
            {
                name: 'Rabbi Sarkar',
                id: 1
            },
            {
                name: 'Bappi Sarkar',
                id: 2
            },
            {
                name: 'Rumal Sarkar',
                id: 3
            },
            {
                name: 'Rahul Sarkar',
                id: 4
            }
        ]
    }
    increseHendelar = () => {
        this.setState({
            count: this.state.count + 1
        })

        if (this.state.count >= 0) {
            this.setState({
                color: 'black'
            })
        }

    }

    decreseHendelar = () => {
        this.setState({
            count: this.state.count - 1
        })
        if (this.state.count <= 0) {
            this.setState({
                color: 'Red'
            })
        }

    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.increseHendelar} class="btn btn-primary">+</button>
                <span style={{ padding: '20px', color: this.state.color }} >{this.state.count}</span>
                <button type="button" onClick={this.decreseHendelar} class="btn btn-warning">-</button>
                <StateLess books={this.state.books} />
            </div>

        )
    }
}

export default Counter