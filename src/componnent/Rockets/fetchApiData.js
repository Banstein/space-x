const ROCKETS_API = 'https://api.spacexdata.com/v3/rockets)';

const fetchRocketsApiData = async () => {
  const getData = await fetch.get(ROCKETS_API);
  const Rockets = [];

  getData.data.forEach((rocketItem) => {
    const flickrImage = rocketItem.flickr_images[0];
    Rockets.push({
      rocketId: rocketItem.id,
      rocketName: rocketItem.rocket_name,
      description: rocketItem.description,
      rocketImage: flickrImage,
    });
  });

  return Rockets;
};

export default fetchRocketsApiData;
