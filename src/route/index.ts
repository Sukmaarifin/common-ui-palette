export type RouteType = {
  url: string;
  breadcrumb: string;
  component: any;
  modes: Array<string>;
};

export const route: Array<RouteType> = [];
