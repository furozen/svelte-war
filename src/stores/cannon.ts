import {writable} from 'svelte/store';
import {Writable} from '@pyoner/svelte-types/types/svelte/interfaces';



export const direction:Writable<string> = writable('');
export const angle = writable(0);
export const isFiring = writable(false);
export const lastFireAt = writable(0);


export interface IBulllet {
  id:number|(()=>number);
  x:number;
  y:number;
  angle:number;
}

export const bulletList:Writable<IBulllet[]>  = writable([]);
