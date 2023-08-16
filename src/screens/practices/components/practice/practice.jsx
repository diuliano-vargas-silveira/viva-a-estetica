import { EXERCISES, EXERCISES_TITLES } from "../";

import "./practice.css"

export function Practice({ practiceType }) {
  const exercises = EXERCISES[practiceType];
  const title = EXERCISES_TITLES[practiceType];

  function renderTable() {
    return exercises.map(({ name, repetitions, quantity }, index) => (
      <tr key={index} className="practice__row">
        <td>{name}</td>
        <td className="practice__center">{repetitions}</td>
        <td>{quantity}</td>
      </tr>
    ));
  }

  return (
    <div className="practice">
      <h2 className="practice__title">EXERCICIOS PARA {title}:</h2>

      <table className="practice__table">
        <tr className="practice__row">
          <th>EXERCICÍOS</th>
          <th className="practice__center">SER</th>
          <th>REPS</th>
        </tr>
        {renderTable()}
      </table>
    </div>
  );
}
