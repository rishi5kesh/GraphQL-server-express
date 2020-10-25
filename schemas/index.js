/**
 * September 2020
 * @author Rishikesh <rishi5kesh@gmail.com>
 */

import { gql } from 'apollo-server-express';
import machineSchema from './machineSchema';


const linkSchema = gql`
  type Query {
    _: Boolean
  }
`;

export default [
  linkSchema,
  macchineSchema,
];
