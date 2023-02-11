// import { IProps } from 'interfaces/IEquipments';
interface IEquipments {
  equipments: string[];
}

function Equipments({ equipments }: IEquipments) {
  return (
    <ul>
      {equipments.map((equipment: string) => (
        <li key={equipment}>{equipment}</li>
      ))}
    </ul>
  );
}
export default Equipments;
