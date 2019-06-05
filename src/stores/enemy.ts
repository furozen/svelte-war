import {get, writable} from 'svelte/store';
import {Writable} from '@pyoner/svelte-types/types/svelte/interfaces';


export interface IEnemy {
  x:number;
  y:number;
  id:number | (() => number);
  speed:number;
}

export const enemyList:Writable<IEnemy[]> = writable([]);
export const enemySpeed:Writable<number> = writable(0.5);
export const lastEnemyAddedAt = writable(0);
export const enemyInterval = writable(3000);
