import React, { Component } from 'react';

import api from '../../services/api';

import { FaArrowLeft } from 'react-icons/fa';

import Container from '../../components/Container';

import { cpfMask, dataMask, celularMask } from '../../utils/masks';
import { validaCPF } from '../../utils/validaCPF';

export default class EditClient extends Component {
  state = {
    name: '',
    birthday: '',
    cpf: '',
    cellphone: '',
    email: '',
    address: '',
    notes: '',
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newClient = {
      name: this.state.name,
      birthday: this.state.birthday,
      cpf: this.state.cpf,
      cellphone: this.state.cellphone,
      email: this.state.email,
      adress: this.state.address,
      notes: this.state.notes,
    };

    const id = decodeURIComponent(this.props.match.params.id);

    api
      .post(`/cliente/${id}`, {
        newClient,
      })
      .then(res => {
        if (res.status === 200) {
          return this.props.history.push('/');
        }
      });
  };

  componentDidMount() {
    const id = decodeURIComponent(this.props.match.params.id);

    api
      .get(`/cliente/${id}?token=8fdcc0e6ae7c9c09e2119b4c411df395`)
      .then(res => {
        this.setState({
          name: res.data.nome,
          birthday: res.data.nascimento,
          cpf: res.data.cpf,
          cellphone: '',
          email: res.data.email,
          address: res.data.endereco,
          notes: res.data.observacao,
        });
      });
  }

  render() {
    const {
      name,
      birthday,
      cpf,
      cellphone,
      email,
      address,
      notes,
    } = this.state;

    return (
      <Container>
        <FaArrowLeft
          size={22}
          color="#ccc"
          onClick={() => this.props.history.push('/')}
        />
        <h2>Edit Client</h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Enter your full name..."
            pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$"
            required
          />
          <br />
          <label htmlFor="birhtday">Birthday</label>
          <br />
          <input
            type="text"
            name="birthday"
            id="birthday"
            value={dataMask(birthday)}
            onChange={this.handleInputChange}
            maxLength="10"
            placeholder="Ex.: dd/mm/yyyy"
            required
          />
          <br />
          <label htmlFor="cpf">CPF</label>
          <br />
          <input
            type="text"
            name="cpf"
            id="cpf"
            value={cpfMask(cpf)}
            onChange={this.handleInputChange}
            maxLength="14"
            placeholder="Ex.: 000.000.000-00"
            onBlur={() => validaCPF(cpf)}
            required
          />
          <br />
          <label htmlFor="cellphone">Cell Phone</label>
          <br />
          <input
            type="text"
            name="cellphone"
            id="cellphone"
            value={celularMask(cellphone)}
            onChange={this.handleInputChange}
            maxLength="15"
            placeholder="Ex.: (00) 00000-0000"
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Type your e-mail..."
            required
          />
          <br />
          <label htmlFor="address">Adrress</label>
          <br />
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={this.handleInputChange}
            placeholder="Enter your full address..."
            required
          />
          <br />
          <label htmlFor="notes">Notes</label>
          <br />
          <textarea
            name="notes"
            id="notes"
            value={notes}
            onChange={this.handleInputChange}
            cols="30"
            rows="10"
            maxLength="300"
          ></textarea>
          <br />
          <button type="submit">Edit</button>
        </form>
      </Container>
    );
  }
}
