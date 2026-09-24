import { starters } from './starters.ts';
import { classics } from './classics.ts';
import { grill } from './grill.ts';
import { seafood } from './seafood.ts';
import { lunch } from './lunch.ts';
import { kids } from './kids.ts';
import { aLaCarte } from './a-la-carte.ts';
import { drinks } from './drinks.ts';
import type { MenuSection } from './types.ts';

export const mainMenu: MenuSection[] = [...starters, ...classics, grill, ...seafood];
export const lunchMenu: MenuSection[] = lunch;
export const kidsMenu: MenuSection[] = kids;
export const aLaCarteMenu: MenuSection[] = aLaCarte;
export const drinkMenu: MenuSection[] = drinks;
export const allSections: MenuSection[] = [
  ...mainMenu, ...lunchMenu, ...kidsMenu, ...aLaCarteMenu, ...drinkMenu,
];
export const menuTabs = [
  { id: 'main', label: 'Dinner', sections: mainMenu },
  { id: 'lunch', label: 'Lunch', sections: lunchMenu },
  { id: 'kids', label: 'Kids', sections: kidsMenu },
  { id: 'a-la-carte', label: 'À La Carte', sections: aLaCarteMenu },
  { id: 'drinks', label: 'Drinks', sections: drinkMenu },
] as const;
