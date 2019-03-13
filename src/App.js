import React, { Component } from 'react';
import {
    Container,
} from 'reactstrap';
import Header from './components/Header';
import Slide from './components/Slide';
import Intro from './components/Intro';

class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
          <Container>
              <Header />
              <Slide />
              <Intro />
          </Container>
        );
    }
}

export default App;