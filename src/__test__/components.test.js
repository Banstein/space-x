import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../componnent/Missions/Missions';
import Mission from '../componnent/Missions/Mission';

it('Test if Missions renders correctly', () => {
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test if Mission renders correctly', () => {
  const mission = {
    missionId: 1,
    missionName: 'test mission name',
    description: 'description',
  };
  const tree = TestRenderer.create(
    <Provider store={store}>
      <Mission mission={mission} />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
