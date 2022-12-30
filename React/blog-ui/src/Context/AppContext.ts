import React from 'react';
import IPostService from '../Services/Interfaces/IPostService.interface';
import { appDependencies } from './Dependencies';
export const APP_CONTEXT: React.Context<AppContext> = React.createContext(appDependencies);

export interface AppContext {
  post: IPostService;
}