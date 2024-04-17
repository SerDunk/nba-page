import axios from "axios";

const getPlayers = async () => {
  const response = await axios.get("http://api.balldontlie.io/v1/players", {
    headers: {
      Authorization: "940ecb69-08fc-402b-b14b-b3de1d47db07",
    },
  });

  return response;
};

export default getPlayers;
