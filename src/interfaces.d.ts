interface IHost {
  name: string;
  picture: string;
}
interface ILodging {
  id: string;
  title: string;
  cover: string;
  pictures: Array<string>;
  description: string;
  host: IHost;
  rating: string;
  location: string;
  equipments: Array<string>;
  tags: Array<string>;
}

interface IFill {
  fill: string;
}
export { ILodging, IFill };
