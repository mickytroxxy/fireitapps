
export type Page = 'home' | 'privacy-web' | 'privacy-spiceshot' | 'apps' | 'services';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface NavItem {
  label: string;
  target: Page;
}
