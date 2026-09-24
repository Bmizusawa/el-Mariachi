import { item, option, type MenuSection } from './types.ts';
const g = item('From the Grill', 'image3.jpeg');
export const grill: MenuSection = { id: 'from-the-grill', name: 'From the Grill', group: 'main', items: [
  g('G1', 'Rib Eye Steak – Carne Asada', 'Grilled rib eye steak served with grilled onions, avocado slices, chile toreado, rice, beans and your choice of flour or corn tortillas.', '23.99'),
  g('G2', 'Steak or Chicken a la Mexicana', 'Steak or chicken cut into small cubes, cooked with sautéed bell peppers, onions and tomatoes. Served with rice, beans and your choice of flour or corn tortillas.', '15.99'),
  g('G3', 'Parrillada', 'A mix of steak, chicken, shrimp and Spanish sausage with sautéed bell peppers and onions. Served with rice, beans and your choice of flour or corn tortillas.', '15.99'),
  g('G4', 'Parrillada El Mariachi', 'Steak, grilled chicken, shrimp, bacon and pineapple with sautéed bell peppers and onions. Cooked in mild sauce. Served with tortillas.', '16.99'),
  g('G5', 'Pork Carnitas El Mariachi', 'Pork carnitas served with rice, beans, pico de gallo, jalapeños and your choice of flour or corn tortillas.', '13.99', { notes: ['The photo caption calls this Pork Carnitas Michoacanas; the menu entry reads Pork Carnitas El Mariachi.'], reviewFields: ['itemName'], confidence: 0.99 }),
  g('G6', 'Puerco Verde or Rojo', 'Pork cooked in your choice of mild or spicy green or red Mexican sauce. Served with rice, beans and your choice of flour or corn tortillas.', '13.99'),
  g('G7', 'Mole', 'Shredded chicken topped with rich and traditional Mexican mole sauce. Served with rice, beans and your choice of flour or corn tortillas.', '13.95'),
  g('G8', 'Chile Relleno', 'Poblano pepper stuffed with cheese or ground beef, smothered in cheese dip. Served with rice, beans and your choice of flour or corn tortillas.', null, { options: [option('Cheese', '11.95'), option('Beef', '11.95'), option('Steak', '13.95'), option('Shrimp', '14.95')] }),
  g('G9', 'Pollo Loco', 'Grilled chicken served over a bed of rice, topped with cheese dip.', '10.99', { options: [option('Steak', '11.99'), option('Shrimp', '13.99'), option('Texas Loco · chicken, steak and shrimp', '14.99')] }),
  g('G10', 'Tacos La Raza', 'Four corn tortillas filled with grilled steak, served with pico de gallo, cilantro, onion and slices of avocado. Served with your choice of spicy red or green Mexican sauce.', '15.99'),
  g('G11', 'Mexican Tacos', 'Four soft corn tortillas with your choice of steak, pastor or carnitas, onions and cilantro. Served with a slice of avocado and spicy red or green Mexican sauce. Available in pork carnitas or grilled pork pastor.', '15.99'),
  g('G12', 'Tacos de la Casa', 'Four corn tortillas with steak and chorizo, grilled onions, cilantro, chile toreado, avocado slices and Spanish sauce. Served with spicy red and green Mexican sauces.', '16.99'),
  g('G13', 'Birria Tacos (4)', 'Mexican-style barbecue with cheese on a corn tortilla, topped with onions and cilantro, served with a cup of birria broth.', '17.99'),
] };
