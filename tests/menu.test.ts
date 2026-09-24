import { test } from 'node:test';
import assert from 'node:assert/strict';
import { allSections, mainMenu, drinkMenu } from '../data/menu.ts';

test('all menu item ids are unique', () => {
  const ids = allSections.flatMap(s => s.items.map(i => i.id));
  assert.equal(new Set(ids).size, ids.length);
});

test('every item has a name and source image', () => {
  for (const s of allSections) {
    for (const i of s.items) {
      assert.ok(i.itemName.length > 0, `missing name in ${s.id}`);
      assert.ok(i.sourceImage.startsWith('image'), `bad source for ${i.itemName}`);
      assert.ok(i.price !== undefined);
    }
  }
});

test('no fabricated prices: items without a printed price have null', () => {
  for (const s of allSections) {
    for (const i of s.items) {
      if (i.price === null) assert.ok(i.options.length > 0 || i.notes.length > 0, `${i.itemName} has no price, options or notes`);
    }
  }
});

test('expected sections exist', () => {
  const names = mainMenu.map(s => s.id);
  for (const id of ['appetizers', 'nachos', 'quesadillas', 'salads', 'specials', 'fajitas', 'enchiladas', 'burritos', 'desserts', 'from-the-grill', 'seafood', 'flautas', 'chimichangas', 'combinations']) {
    assert.ok(names.includes(id), `missing section ${id}`);
  }
  assert.ok(drinkMenu.some(s => s.id === 'margaritas'));
});
