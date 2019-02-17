import axios from 'axios';


export const api = async () => {
  try{
    return await axios.get(`https://steamcdn-a.akamaihd.net/apps/583950/resource/card_set_1.134088E143B4C697AA334924195E1DFB24EC95C5.json`, {
      // return axios.get(`https://steamcdn-a.akamaihd.net/apps/583950/resource/card_set_0.79824067E797DFFD5925FE05AB27CF5ACC88723F.json`, {

    });
  } catch(error){
    console.error(error)
  }
};


export const apiPrice = async (idCard) => {
  try{
    return await axios.get(`https://steamcommunity.com/market/priceoverview?appid=583950&market_hash_name=${idCard}`, {
      headers: {
        'Authorization': 'Basic 7B84467F3F7634E17E427051C9C7588F'
      }
    });
  }catch(error){
    console.log(`error: ${error}`)
  }
};

