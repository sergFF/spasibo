// import { push } from 'react-router-redux';
import { ADD_HERO_URL } from '../constants/endpoints';
import { ADD_HERO_ACTION } from '../constants/action_types';
import { fetchApi } from '../helpers/fetch';

export default function addHero(hero) {
return dispatch => dispatch(fetchApi(
  ADD_HERO_URL,
  ADD_HERO_ACTION,
  'POST',
  hero
)).catch(err => err);
}
