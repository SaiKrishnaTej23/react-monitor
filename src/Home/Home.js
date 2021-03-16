import React from 'react';
import { Container } from "@material-ui/core";
import Inside from './Inside';
import { getData } from '../Services';
import appData from '../data.json';

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = { data: null}
    }

    componentDidMount() {
        getData().then((result) => {
            this.setState({
                data: appData
            })
        })
    }

    render() {
        
        return (
            <Container>
                <Inside data={this.state.data} />
            </Container>
        );
    }
}