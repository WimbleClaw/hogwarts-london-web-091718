import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import hogs from '../porkers_data';
import {Card, Menu, Image, Visibility } from 'semantic-ui-react'

export default class Hogcard extends React.Component{
    
    constructor() {
        super()
        this.state = {
            visibility: false
        }
    }

    handleClick = () => {
        this.setState({
            visibility: !this.state.visibility
        })
    }

    render() {
        return (
        <div>
            <Card onClick={this.handleClick}>
                <Image src='data:image/jpeg;base64,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' />
                <Card.Content>
                <Card.Header>{this.props.hog.name}</Card.Header>
                {this.state.visibility ? (
                    <div>
                         <Card.Meta>{this.props.hog.specialty}</Card.Meta>
                         <Card.Description>"yes"</Card.Description>
                    </div>
                ) : ""}
                
                </Card.Content>
            </Card>
        </div>
        )
    }

}