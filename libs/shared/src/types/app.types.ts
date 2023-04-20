export enum SupportedLangs {
  EN = 'en',
}

export interface AppRoute {
  path: string | undefined;
  component: React.ComponentType<any>;
  exact?: boolean;
  headerContent?: string;
  title: string;
}
