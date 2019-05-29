import React, {Component} from 'react'
import SearchForm from "../SearchForm/SearchForm";
import ImageList from "../ImageList/ImageList";
import {Button, Col} from 'react-bootstrap'

class App extends Component {

    state = {
        images: [],
        page: 2
    }

    saveImages = images => void this.setState({images})

    handleLoadMore = (e) => {

    }

    render() {
        return (
            <div>
                <SearchForm saveImages={this.saveImages}/>
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App

