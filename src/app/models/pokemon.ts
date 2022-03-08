export interface Pokemon {
  name : string;
  weight : number;
  height : number;
  types : String[];
  stats : Stats;
  id : number;
  abilities : string[];
  sprites : {
    art : string
    animation : string
  }
}

type Stats = {
  hp : number;
  attack : number;
  defense : number;
  spAttack : number;
  spDefense : number;
  speed : number;
  higherStat : string
}
