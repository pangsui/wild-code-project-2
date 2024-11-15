export type Hero = {
  images: {
    lg: string;
    md?: string;
    sm?: string;
  };
  id: number;
  name: string;
  length: number;
  biography: {
    fullName: string;
    aliases: [0];
  };
  appearance: {
    gender: string;
    race: string;
    height: string;
    weight: string;
  };
  powerstats: {
    combat: number;
    durability: number;
    intelligence: number;
    power: number;
    speed: number;
    strength: number;
  };
};
