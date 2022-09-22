import { ActiveModelSerializer, createServer, Factory, Model, Response } from 'miragejs';
import { faker } from '@faker-js/faker';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({})
    },

    // ? Criação de dados em massa (factories)
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
          // return faker.name.fullName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      })
    },

    // ? Gera os dados da fake API (model, quantidade)
    // ? Neste caso, cria uma lista de usuários fake
    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      // ? Define a rota do mirage
      // ? http://localhost:3000/api/...
      this.namespace = 'api';

      // ? Causa um delay na chamada, para ficar mais real e testar os
      // ? carregamentos e loadings
      this.timing = 750;


      // ? Shorthands do MirageJS para o CRUD de user
      this.get('/users', function (schema, request) {
        // Paginação
        const { currentPage, per_page = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(currentPage) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd);

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        );
      });

      this.get('/users/:id');
      this.post('/users');

      // ? Para evitar conflitos com as API routes do Next
      this.namespace = '';

      // ? Faz com que todas as chamadas enviadas para a rota api passem pelo mirage,
      // ? mas se não forem detectadas pelas rotas do mirage, elas PASSEM ADIANTE
      // ? para a rota original delas
      this.passthrough();
    },
  })

  return server;
}