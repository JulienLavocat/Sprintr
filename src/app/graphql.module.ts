import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws';
import { environment } from '../environments/environment';
import { getMainDefinition } from '@apollo/client/utilities';

const httpUri = environment.apiUrl;
const wsUri = environment.wsApiUrl;

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink): ApolloClientOptions<any> {
        const http = httpLink.create({
          uri: httpUri,
        });

        const ws = new WebSocketLink({
          uri: wsUri,
          options: {
            reconnect: true,
          },
        });
        const link = split(
          ({ query }) => {
            const data = getMainDefinition(query);
            return (
              data.kind === 'OperationDefinition' &&
              data.operation === 'subscription'
            );
          },
          ws,
          http
        );

        return {
          link,
          cache: new InMemoryCache(),
        };
      },
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
