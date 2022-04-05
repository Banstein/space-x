import axios from 'axios';

const missionsApi = 'https://api.spacexdata.com/v3/missions';

export const getMissionsApi = async () => {
  const getData = await axios.get(missionsApi);
  const missions = [];
  getData.data.forEach((mission) => {
    missions.push({
      mission_name: mission.mission_name,
      mission_id: mission.mission_id,
      description: mission.mission_description,
    });
  });
  return missions;
};

export default getMissionsApi;
