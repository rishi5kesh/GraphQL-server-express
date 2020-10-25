/**
 * September 2020
 * @author Rishikesh <rishi5kesh@gmail.com>
 */
import { gql } from 'apollo-server-express';

export default gql`
  type Volumes {
    id: ID
    name: String,
    state: String,
    is_user_volume: Boolean,
  }

  extend type Query {
    getVolumeCount(is_user_volume: Boolean, state: String): Int
  }
`;
