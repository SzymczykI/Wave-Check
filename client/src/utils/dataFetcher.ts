import axios from "axios";

export const fetchData = async (lat: number, lon: number) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/hmax",
      { lat, lon },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.max_wave_height;
  } catch (error) {
    console.log(error);
  }
};
