/**
 * September 2020
 * @author Rishikesh <rishi5kesh@gmail.com>
 */
export default {
  Query: {
    getMachineCount: async (parent, { is_healthy, state }, { models: { machineModel } }, info) => {
      const statesArray = state.split("|");
      const states = [];
      statesArray.forEach(state => {
        states.push({"state": state});
      });
      const machineCount = await machineModel.count({
        $and: [
          {  $or: states }, { "is_healthy": is_healthy }
        ]
      }).exec();
      return machineCount;
    },
  }
};
