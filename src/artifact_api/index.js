import axios from 'axios';

export const api = async () => {
  try{
    return await axios.get(`https://steamcdn-a.akamaihd.net/apps/583950/resource/card_set_1.134088E143B4C697AA334924195E1DFB24EC95C5.json`, {
    });
  } catch(error){
    console.error(error)
  }
};
