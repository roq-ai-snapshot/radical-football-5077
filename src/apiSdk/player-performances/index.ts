import axios from 'axios';
import queryString from 'query-string';
import { PlayerPerformanceInterface } from 'interfaces/player-performance';
import { GetQueryInterface } from '../../interfaces';

export const getPlayerPerformances = async (query?: GetQueryInterface) => {
  const response = await axios.get(`/api/player-performances${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPlayerPerformance = async (playerPerformance: PlayerPerformanceInterface) => {
  const response = await axios.post('/api/player-performances', playerPerformance);
  return response.data;
};

export const updatePlayerPerformanceById = async (id: string, playerPerformance: PlayerPerformanceInterface) => {
  const response = await axios.put(`/api/player-performances/${id}`, playerPerformance);
  return response.data;
};

export const getPlayerPerformanceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/player-performances/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePlayerPerformanceById = async (id: string) => {
  const response = await axios.delete(`/api/player-performances/${id}`);
  return response.data;
};
