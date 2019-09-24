import React, { Component } from 'react'

export default class ImageNative extends Component {


    render() {
        return (
            <div>
                <img loading="lazy" src={this.props.src} key={this.props.src} height='419' alt='' />
            </div>
        )
    }
}


