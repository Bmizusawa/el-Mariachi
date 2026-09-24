import { item, option, type MenuSection } from './types.ts';
import { softDrinks } from './starters.ts';
const m = (name: string) => item(name, 'image5.jpeg');
const p = item('Mixed Drinks', 'image6.jpeg');
const beer = item('Bottled Beer', 'image6.jpeg');
const sizes = (medium: string, large: string, pitcher?: string) => [option('Medium · 21 oz', medium), option('Large · 32 oz', large), ...(pitcher ? [option('Pitcher', pitcher)] : [])];
export const drinks: MenuSection[] = [
  { id: 'margaritas', name: 'Margaritas', group: 'drinks', items: [
    m('Regular House Margaritas')('', 'Regular House Margarita', 'Lime margarita.', null, { options: sizes('10.99', '15.99', '26.99') }),
    m('Patrón Margaritas / Top Shelf')('', 'Patrón Margarita · Top Shelf', '', null, { options: sizes('26.99', '30.99') }),
    m('Texas Margaritas')('', 'Texas Margarita', 'With Cuervo Gold and Grand Marnier.', null, { options: sizes('16.99', '19.99', '27.99') }),
    m('Coconut Margaritas')('', 'Coconut Margarita', 'Made with 1800 Coconut Tequila.', null, { options: sizes('17.99', '22.99') }),
    m('Riunite ’Rita')('', 'Riunite ’Rita', 'Our house lime margarita, on the rocks or frozen, with Riunite Lambrusco wine.', null, { options: sizes('13.99', '17.99') }),
    m('Corona ’Rita')('', 'Corona ’Rita', 'On the rocks or frozen.', null, { options: sizes('13.99', '17.99') }),
    m('Red Bull Margarita')('', 'Red Bull Margarita', 'On the rocks or frozen.', null, { options: sizes('13.99', '17.99') }),
    m('Margaritas')('', 'Blue Margarita', '', '13.99', { notes: ['Size not specified on the printed menu.'] }),
    m('Margaritas')('', 'Jalapeño Margarita', 'Medium · 21 oz.', '11.99'),
  ] },
  { id: 'virgin-margaritas', name: 'Virgin Margaritas', group: 'drinks', items: [
    m('Virgin Margaritas')('', 'Virgin Margarita', '16 oz. Pineapple, strawberry, piña colada, peach or mango.', '8.50'),
  ] },
  { id: 'daiquiris', name: 'Daiquiris', group: 'drinks', items: [
    m('Daiquiris')('', 'Daiquiri', 'Prepared with rum or vodka, topped with whipped cream and cherry. Piña colada, peach, strawberry, mango or raspberry.', null, { options: sizes('13.99', '17.99') }),
  ] },
  { id: 'wine', name: 'Wine', group: 'drinks', items: [
    ...['White Zinfandel', 'Chardonnay', 'Merlot', 'Sangria', 'Stella Rosa Moscato', 'Lambrusco', 'Cabernet Sauvignon'].map(name => item('Wine', 'image6.jpeg')('', name, '', '8.99')),
    item('Michelada', 'image6.jpeg')('', 'Michelada', '', '13.99'),
  ] },
  { id: 'beer', name: 'Bottled Beer', group: 'drinks', items: [
    ...['Bud Light', 'Michelob Ultra', 'Budweiser', 'Coors Light', 'Miller Lite'].map(name => beer('', name, 'Domestic bottle.', '4.75')),
    ...['Modelo Especial', 'Negra Modelo', 'Corona', 'Corona Premier', 'Corona Light', 'Corona Extra', 'XX Ambar', 'XX Lager', 'Estrella', 'Natural Light', 'Victoria', 'Pacifico', 'Sol'].map(name => beer('', name, '', '5.75', name === 'Natural Light' ? { notes: ['Printed in the imported price group; please confirm.'], reviewFields: ['price group'], confidence: 0.99 } : {})),
  ] },
  { id: 'mixed-drinks', name: 'Mixed Drinks · 16 oz', group: 'drinks', items: [
    p('', 'Crown Royal', '', '8.95'),
    p('', 'Long Island Iced Tea', '', '12.99'),
    p('', 'Jack Daniel’s', '', '8.95'),
    p('', 'Amaretto Sour', '', '8.95'),
    p('', 'Sex on the Beach', '', '12.99'),
    p('', 'Blue Hawaiian', '', '12.99'),
    p('', 'Jim Beam', '', '8.95'),
    p('', 'Rum & Coke', '', '8.95'),
    p('', 'Screwdriver', '', '12.99'),
    p('', 'Wild Turkey', '', '12.99'),
    p('', 'Tequila Sunrise', '', '12.99'),
    p('', 'White Russian', '', '12.99'),
    p('', 'Bloody Mary', '', '8.95'),
    p('', 'CC & 7', '', '8.95'),
    p('', 'Seagram’s 7', '', '8.95'),
  ] },
  softDrinks,
];
