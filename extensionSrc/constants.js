// 0 one time | 1 daily | 2 weekdays only | 3 weekends only
export const DEFAULT_ALTERNATIVE_ACTIVITIES = [
  {name: "go grocery shopping ONE TIME", lenSec: 300, tags: [''], frequency: 0 },
  {name: "wash your car ONE TIME", lenMin: 300, tags: [''], frequency: 0},
  {name: "clean stove range ONE TIME", lenMin: 300, tags: [''], frequency: 0},
  {name: "mop kitchen floor ONE TIME", lenMin: 300, tags: [''], frequency: 0},


  { name: "practice singing", lenSec: 300, tags: [''], frequency: 1 },
  { name: "wash the dishes", lenSec: 300, tags: ['chore'], frequency: 1 },
  { name: "take the trash out", lenSec: 180, tags: ['chore'], frequency: 1 },
  { name: "walk around the block", lenSec: 300, tags: ['exercise'], frequency: 1 },
  { name: "standing pike", lenSec: 60, tags: ['stretch'], frequency: 1 },
  { name: "meditate", lenSec: 300, tags: ['mental health'], frequency: 1 },

  { name: "pack lunch for work ON THE WEEKDAYS", lenSec: 300, tags: ['mental health'], frequency: 2 },
  { name: "WEEKDAYS 1", lenSec: 300, tags: ['mental health'], frequency: 2 },
  { name: "WEEKDAYS 2", lenSec: 300, tags: ['mental health'], frequency: 2 },
  { name: "WEEKDAYS 3", lenSec: 300, tags: ['mental health'], frequency: 2 },


  { name: "call your mom ON THE WEEKEND", lenSec: 300, tags: ['family'], frequency: 3 },
  { name: "WEEKENDS 1", lenSec: 300, tags: ['mental health'], frequency: 3 },
  { name: "WEEKENDS 2", lenSec: 300, tags: ['mental health'], frequency: 3 },
  { name: "WEEKENDS 3", lenSec: 300, tags: ['mental health'], frequency: 3 },


];

// {name: "", lenMin: , tags: [''], frequency: n},
