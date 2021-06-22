type ElementStyles = {
  width: string,
  height: string,
}

type SkillsList = {
  value?: string,
  name: string,
}

type StatsList = {
  name?: string,
  value: string,
  color?: string,
}

type ItemType = {
  name: string,
  type: string,
  damage: number,
  speed: string,
}

export const itemBlockStyle:ElementStyles = {
  width: '400px',
  height: '650px',
}

export const skillsList: SkillsList[] = [
  {
    name: 'Энергия',
    value: '2914',
  },
  {
    name: 'Выносливость',
    value: '1410',
  },
  {
    name: 'Урон Ядом',
    value: '79%',
  },
  {
    name: 'Урон Ядом',
    value: '2350',
  },
  {
    name: 'Скорость Атаки',
    value: '28%',
  },
]

export const statsList: StatsList[] = [
  {
    name: 'ID',
    value: '1768043',
  },
  {
    value: '[Ближний бой]',
    color: 'blue',
  },
  {
    value: '[1-ручный]',
    color: 'yellow',
  },
  {
    name: 'Уровень',
    value: '10',
    color: 'yellow',
  },
  {
    name: 'Качество',
    value: '88%',
  },
  {
    name: 'Требуемый Lvl',
    value: '100',
  },
  {
    name: 'Lvl Предметов',
    value: '160',
  },
]

export const abilityList: SkillsList[] = [
  {
    name: 'Сглаз',
  },
]

export const item: ItemType = {
  name: 'Лазурный Гнев',
  type: 'satanic',
  damage: 16899,
  speed: '1.77 Aps.',
}

export const itemsList: ItemType[] = [
  {
    name: 'Лазурный Гнев',
    type: 'satanic',
    damage: 16899,
    speed: '1.77 Aps.',
  },
  {
    name: 'Флакон Душ',
    type: 'satanic',
    damage: 7990,
    speed: '1.85 Aps.',
  },
  {
    name: 'Кровопускатель',
    type: 'satanic',
    damage: 14147,
    speed: '1.21 Aps.',
  },
  {
    name: 'Ярость Грома',
    type: 'satanic',
    damage: 15199,
    speed: '1.80 Aps.',
  },
  {
    name: 'Вестник Пламени',
    type: 'satanic',
    damage: 16884,
    speed: '1.49 Aps.',
  },
]
