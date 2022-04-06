import axios from 'axios';

const missionAPI = 'https://api.spacexdata.com/v3/missions';

const getMissionsFromAPI = async () => {
  const getData = await axios.get(missionAPI);
  const missions = [];
  getData.data.forEach((mission) => {
    missions.push({
      missionId: mission.mission_id,
      missionName: mission.mission_name,
      description: mission.mission_description,
    });
  });
  return missions;
};

export default getMissionsFromAPI;
