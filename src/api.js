//  require("dotenv").config();
//Base URL

const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
//Popular Games
const key = process.env.REACT_APP_IGNITE_API_KEY;
const popular_games = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const upcoming_games = `games?key=${key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const newGames = `games?key=${key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upComingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}.json?&key=${key}`;
// GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&key=${key}`;
//Searched Game

export const searchGameURL = (game_name) =>
  `${base_url}games?key=${key}&search=${game_name}&page_size=12`;
