import React, { Component } from 'react'


class StateLess extends Component {

    render() {


        return (
            <div>
                <ul>
                    {this.props.books.map(book => {
                        return (
                            // console.log(book.name)
                            <li>{book.name}</li>
                        )

                    })}

                    <li>dd</li>

                </ul>
            </div>
        )
    }
}

export default StateLess