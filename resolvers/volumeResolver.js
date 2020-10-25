/**
 * September 2020
 * @author Rishikesh <rishi5kesh@gmail.com>
 */
export default {
  Query: {
    getVolumeCount: async (parent, { is_user_volume, state }, { models: { volumeModel } }, info) => {
      const statesArray = state.split("|");
      const states = [];
      statesArray.forEach(state => {
        states.push({"state": state});
      });
      const volumeCount = await volumeModel.count({
        $and: [
          {  $or: states }, { "is_user_volume": is_user_volume }
        ]
      }).exec();
      return volumeCount;
    },
  }
};
