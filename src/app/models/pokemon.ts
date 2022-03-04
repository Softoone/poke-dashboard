export interface Pokemon {
  name : String;
  weight : number;
  height : number;
  types : String[];
  stats : Stats;
  id : number;
  abilities : String[];
  sprites : {
    art : String
    animation : String
  }
}

type Stats = {
  hp : number;
  attack : number;
  defense : number;
  spAttack : number;
  spDefense : number;
  speed : number;
}
