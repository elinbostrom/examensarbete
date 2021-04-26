// Components
import HorseListItem from "./HorseListItem";

export default function HorseList({ horses, activeInfo }) {
  return (
    <ul style={{ padding: 0 }}>
      {Array.isArray(horses) ? (
        horses.map(horse => {
          const category = horse.horseInfo.category;
          if (category === activeInfo) {
            return <HorseListItem key={horse.id} horse={horse.horseInfo} />;
          }
        })
      ) : (
        <p>Inga hästar tillgängliga</p>
      )}
    </ul>
  );
}
