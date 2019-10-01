import React, { Component } from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {};

  render() {
    return (
      <Container>
        <FaGithubAlt />
        <h1>Repositórios</h1>

        <Form onSubmit={() => {}}>
          <input type="text" placeholder="Adicionar repositório" />

          <SubmitButton disable>
            <FaPlus color="#FFF" size={14} />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
