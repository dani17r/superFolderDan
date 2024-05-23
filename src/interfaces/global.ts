import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';

export type ToRouterT = RouteLocationNormalized;
export type FromRouterT = RouteLocationNormalized;
export type NextRouterT = NavigationGuardNext;

export interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?:
    | string
    | {
        name?: string;
        params?: { id?: string };
      };
  icon?: string;
}
