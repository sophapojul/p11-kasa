import ILodging from 'interfaces/ILodging';

const API_URL = `${process.env.PUBLIC_URL}/api/logements.json`;
export async function getAllLodgings() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  return res.json() as Promise<ILodging[]>;
}

export async function getLodging(id: string) {
  const data = await getAllLodgings();
  const lodging = data.find((item) => item.id === id);
  if (!lodging) {
    throw new Error(`404`);
  }
  return lodging;
}
