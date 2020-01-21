import React from "react";

import api from "../../services/api";

import { Link } from "react-router-dom";
import { FaTrashAlt, FaPenAlt } from "react-icons/fa";

const handleDeleteUser = id_cliente => {
  api.delete(`/cliente/${id_cliente}`).then(res => {
    alert("The client was successfully deleted!");

    window.location.reload();
  });
};

const ListClients = ({ clients }) => {
  return clients.map(client => (
    <article key={client.id_cliente}>
      <h3>{client.nome}</h3>
      <p>{client.nascimento}</p>
      <p>{client.cpf}</p>
      <p>{client.email}</p>
      <p>{client.endereco}</p>
      <p>{client.observacao}</p>

      <Link to={`/edit-client/${encodeURIComponent(client.id_cliente)}`}>
        <FaPenAlt size={20} color="blue" />
      </Link>

      <FaTrashAlt
        size={20}
        color="red"
        onClick={() => handleDeleteUser(client.id_cliente)}
      />
    </article>
  ));
};

export default ListClients;
