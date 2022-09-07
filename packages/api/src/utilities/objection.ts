import { Model } from "objection";
import connection from "./knex";

Model.knex(connection);

export default Model;
