import React, { Component } from 'react'

export default class ImageIO extends Component {
    constructor(props) {
        super(props);
        this.element = React.createRef();
    }
    _handleIntersection = (entries = []) => {
        entries.forEach(entry => {
            const { isIntersecting } = entry;
            if (isIntersecting) {
                this.element.current.src = this.props.src;
                this.intersectionObserver = this.intersectionObserver.disconnect();
            }
        });
    }


    componentDidMount() {
        const options = {
            root: null,
            rootMargin: "200px",
            threshold: 0.5
        }

        this.intersectionObserver = new IntersectionObserver(this._handleIntersection, options);
        this.intersectionObserver.observe(this.element.current);



    }
    render() {
        return (
            <div>
                <img ref={this.element} key={this.props.src} height='419' alt='' />
            </div>
        )
    }
}


