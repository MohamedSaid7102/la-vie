export type NavbarItemType = {
  id: number;
  dom: JSX.Element;
  navigatable: boolean;
  path?: string;
};
export type NavbarListType = Array<NavbarItemType>;
