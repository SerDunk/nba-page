import axios from "axios";

const getPlayers = async () => {
  const response = await axios({
    method: "get",
    url: "http://api.balldontlie.io/v1/players",
    withCredentials: false,
  });

  return response;
};

export default getPlayers;
