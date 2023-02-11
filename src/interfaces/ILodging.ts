interface IHost {
  name: string;
  picture: string;
}
export default interface ILodging {
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
