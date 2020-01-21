import React, { Component } from 'react';

import { FaRegAddressCard } from 'react-icons/fa';

import api from '../../services/api';

import { Container, Content, Form } from './styles';
import ListClients from '../../components/ListClients';

export default class Main extends Component {
  state = {
    name: '',
    email: '',
    clients: [],
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.handleShowClients();
  }

  handleShowClients = async () => {
    const clients = await api.get(
      '/cliente?token=8fdcc0e6ae7c9c09e2119b4c411df395&limit=10'
    );

    this.setState({
      clients: clients.data,
    });
  };

  render() {
    const { name, email, clients } = this.state;

    return (
      <Container>
        <Content>
          <Form>
            <div>
              <form onSubmit={() => {}}>
                <input
                  type="text"
                  name="nome"
                  value={name}
                  onChange={() => {}}
                  placeholder="Search by name ...."
                  disabled
                />
              </form>
              <form onSubmit={() => {}}>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={() => {}}
                  placeholder="Search by email..."
                  disabled
                />
              </form>
            </div>
          </Form>

          <h3>Register new customer</h3>
          <FaRegAddressCard
            size={22}
            color="green"
            onClick={() => this.props.history.push('/new-client')}
          />

          <hr />
          <ListClients clients={clients} />
        </Content>
      </Container>
    );
  }
}
