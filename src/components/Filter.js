export default function Filter() {
  const filterSelected = value => {
    console.log(value);
  };

  return (
    <div>
      all
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected('ALL')}
      />
      important
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected('IMPORTANT')}
      />
      noimportant
      <input
        type="radio"
        name="filter"
        onChange={() => filterSelected('NOIMPORTANT')}
      />
    </div>
  );
}
