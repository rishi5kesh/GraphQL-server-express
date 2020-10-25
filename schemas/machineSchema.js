/**
 * September 2020
 * @author Rishikesh <rishi5kesh@gmail.com>
 */
import { gql } from 'apollo-server-express';

export default gql`
  type Machines {
    id: ID
    name: String,
    state: String,
    is_healthy: Boolean,
  }

  extend type Query {
    getMachineCount(is_healthy: Boolean, state: String): Int
  }
`;
