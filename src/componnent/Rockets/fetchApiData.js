import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const fetchRocketsApiData = async () => {
  const getData = await axios.get(url);
  const Rockets = [];

  getData.data.forEach((rocketItem) => {
    const flickrImage = rocketItem.flickr_images[0];
    Rockets.push({
      id: rocketItem.id,
      rocket_name: rocketItem.rocket_name,
      description: rocketItem.description,
      image: flickrImage,
      reserved: false,
    });
  });

  return Rockets;
};

export default fetchRocketsApiData;
