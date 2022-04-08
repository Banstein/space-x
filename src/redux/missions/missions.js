import getMissionsFromAPI from '../../componnent/Missions/MissionsApi';

const GET_MISSIONS = 'space-x/missions/GET_MISSIONS';
const TOGGLE_MISSION = 'space-x/missions/TOGGLE_MISSION';
const INITIAL_STATE = {};

const missionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        isMissionsStored: true,
        missions: action.payload,
      };
    case TOGGLE_MISSION: {
      const newMissions = state.missions.map((mission) => {
        if (mission.missionId === action.payload) {
          return { ...mission, status: !mission.status };
        }
        return mission;
      });
      return {
        ...state,
        missions: newMissions,
        isMissionsStored: true,
      };
    }
    default:
      return state;
  }
};

export const getMissions = (data) => ({
  type: GET_MISSIONS,
  payload: data,
});

export const getMissionsDispatcher = () => async (dispatch) => {
  const missions = await getMissionsFromAPI();
  dispatch(getMissions(missions));
};

export const toggleMission = (data) => ({
  type: TOGGLE_MISSION,
  payload: data,
});

export default missionsReducer;
