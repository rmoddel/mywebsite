import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import postgrestRestProvider from "@raphiniert/ra-data-postgrest";


const dataProvider = postgrestRestProvider("/api/admin");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} edit={EditGuesser} recordRepresentation="name" />
    <Resource name="posts" list={ListGuesser} edit={EditGuesser} recordRepresentation="title" />
    <Resource name="comments" list={ListGuesser} edit={EditGuesser} />
  </Admin>
);

export default App;
