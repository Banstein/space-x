import getMissionsFromAPI from '../../componnent/Missions/MissionsApi';

const GET_MISSIONS = 'space-x/missions/GET_MISSIONS';
const JOIN_LEAVE_MISSION = 'space-x/missions/JOIN_MISSION';
const INITIAL_STATE = {};

export const getMissions = (data) => ({
  type: GET_MISSIONS,
  payload: data,
});

export const joinMission = (data) => ({
  type: JOIN_LEAVE_MISSION,
  payload: data,
});

export const getMissionsDispatcher = () => async (dispatch) => {
  const missions = await getMissionsFromAPI();
  dispatch(getMissions(missions));
};

export const joinMissionDispatcher = (id) => (dispatch) => dispatch(joinMission(id));
export const leaveMissionDispatcher = (id) => (dispatch) => dispatch(joinMission(id));

const missionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return {
        ...state,
        data: action.payload,
      };
    case JOIN_LEAVE_MISSION: {
      const s = state.data.map((e) => {
        if (e.missionId === action.payload) {
          return { ...e, status: !e.status };
        }
        return e;
      });
      return {
        data: s,
      };
    }
    default:
      return state;
  }
};

export default missionsReducer;
