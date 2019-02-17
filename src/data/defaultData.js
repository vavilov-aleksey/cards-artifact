export const dataType = {
  type: 'type',
  typeName: 'Тип',
  typeSort: [
    {typeFilter: 'Hero', name: 'Герои', img: 'heroes.png'},
    {typeFilter: 'Spell', name: 'Заклинание', img: 'spells.png'},
    {typeFilter: 'Creep', name: 'Крип', img: 'creeps.png'},
    {typeFilter: 'Item', name: 'Предмет', img: 'items.png'},
    {typeFilter: 'Improvement', name: 'Улучшение', img: 'improvements.png'}
  ]
};

export const dataRarity = {
  type: 'rarity',
  typeName: 'Редкость',
  typeSort: [
    {typeFilter: 'Base', name: 'Базовая', bgc: '#a6a6a6'},
    {typeFilter: 'Common', name: 'Обычная', bgc: '#644c41'},
    {typeFilter: 'Uncommon', name: 'Необычная', bgc: '#5e5e5e'},
    {typeFilter: 'Rare', name: 'Редкая', bgc: '#978861'},
  ]
};

export const dataColor = {
  type: 'color',
  typeName: 'Цвет',
  typeSort: [
    {typeFilter: 'Red', name: 'Красный', bgc: '#6f2224'},
    {typeFilter: 'Blue', name: 'Синий', bgc: '#21496e'},
    {typeFilter: 'Green', name: 'Зеленый', bgc: '#3b7022'},
    {typeFilter: 'Black', name: 'Черный', bgc: '#403c42'},
  ]
};

export const dataBasket = {
  type: 'clear',
  typeSort: [
    {typeFilter: '', name: 'Очистить колоду', img: 'basket.svg'}
  ]
};