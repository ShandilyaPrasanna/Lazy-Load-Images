import React, { Component } from 'react'

export default class ImageNone extends Component {


    render() {
        return (
            <div>
                <img src={this.props.src} key={this.props.src} height='419' alt='' />
            </div>
        )
    }
}


