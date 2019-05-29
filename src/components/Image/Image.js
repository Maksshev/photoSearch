import React, {Component} from 'react'

class Image extends Component {

    constructor(props) {
        super(props)

        this.state = {
            rows: 0
        }

        this.img = React.createRef()
    }


    countRows = () => {
        if (this.img.current) {
            console.log(Math.floor(this.img.current.clientHeight / 10))

            this.img.current.addEventListener('load', () => this.setState({
                rows: Math.round(this.img.current.clientHeight / 10)
            }))
        }
        return 0
    }


    componentDidMount() {
        this.countRows()
    }

    componentDidUpdate() {
        this.countRows()
    }


    render() {
        return (
            <img ref={this.img}
                 src={this.props.src}
                 alt={this.props.alt}
                 className="img-fluid"
                 style={{
                     gridRowEnd: `span ${this.state.rows}`
                 }}
            />
        );

    }
}

export default Image




