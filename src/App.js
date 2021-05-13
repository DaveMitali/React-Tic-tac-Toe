import "./styles.css";

export default function App() {
  return (
    <div>
      <header>
        <h1>Tic Tac Toe in React</h1>
      </header>
      <Game />
    </div>
  );
}

// function that generates a grid
function generateGrid(rows, columns, mapper) {
  return Array(rows)
    .fill()
    .map(() => Array(columns).fill().map(mapper));
}

const newTicTacToeGrid = () => generateGrid(3, 3, () => null);

// stateful component to store our game
function Game() {
  const grid = newTicTacToeGrid();
  const handleClick = () => {}; // passed down as a prop to be used with button's onClick property
  return (
    <div style={{ display: "inline-block" }}>
      <Grid grid={grid} />
    </div>
  );
}
// CSS Grid to layout our rows and columns
function Grid({ grid }) {
  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          backgroundColor: "#000",
          display: "grid",
          gridTemplateRows: `repeat(${grid.length}, 1fr)`, // length of grid array
          gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`, // length of the first row of the grid
          gridGap: 2 // to reveal the grid lines
        }}
      >
        {grid.map((row, rowIdx) =>
          row.map((cell, colIdx) => (
            <Cell key={`${colIdx}-${rowIdx}`} cell={cell} />
          ))
        )}
      </div>
    </div>
  );
}

const cellStyle = {
  backgroundColor: "#fff",
  height: 75,
  width: 75
};

function Cell({ cell, handleClick }) {
  //button to every cell to make it interactive
  return (
    <div style={cellStyle}>
      <button type="button" onClick={handleClick}>
        {cell}
      </button>
    </div>
  );
}
