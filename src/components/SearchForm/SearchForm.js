import React, {Component} from 'react'
import {searchByKeyword} from "../../api/unsplash/photoSearch"
import {FormGroup, FormControl, Button, Row, Container, Col, Form} from 'react-bootstrap'

class SearchForm extends Component {

    state = {
        search: ''
    }


    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const images = await searchByKeyword(this.state.search)
        this.props.saveImages(images.results)
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup className="m-5">
                                <FormControl value={this.state.search}
                                             onChange={this.handleChange}
                                             type="text"
                                             placeholder="Search"/>
                                <div className="text-center">
                                    <Button className="m-2" type="submit">Search</Button>
                                </div>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SearchForm