import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

function Square(props) {
  let className = "square";
  if (props.lastPlayed) {
    className += " highlighted";
  }
  return (
    <button
      onClick={() => {
        props.onClick();
        console.log("Square " + props.value + " clicked"); //will display the old valuse (probably because it is updates only when rendered! )
      }}
      className={className}
    >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        lastPlayed={this.props.lastMove === i}
      />
    );
  }

  generateColumns(r) {
    let columns = [];
    for (let c = 0; c < 3; c++) {
      columns.push(this.renderSquare(r * 3 + c));
    }
    return columns;
  }

  generateRows() {
    let rows = [];
    for (let r = 0; r < 3; r++) {
      rows.push(
        <div key={r} className="board-row">
          {this.generateColumns(r)}
        </div>
      );
    }
    return rows;
  }

  render() {
    return <div>{this.generateRows()}</div>;
  }
}

class Game extends React.Component {
  finished = false;

  state = {
    history: [
      {
        squares: Array(9).fill(null),
        lastMove: -1
      }
    ],
    stepNumber: 0,
    xIsNext: true,
    historyOrder: 1
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];

    if (this.finished || current.squares[i]) {
      return;
    }

    // why we copy the array with `slice()`? We go here witth the immutability approach, by overwriting instead of mutating the state.
    // This allows us several benefits with the most important one being able to use `React.PureComponent` instead of writing `shouldComponentUpdate()`:
    const squares = current.squares.slice();

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          lastMove: i
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
    this.finished = false;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber]; //history[history.length - 1];
    console.log("current", current);
    console.log("this.state", this.state);
    const winner = calculateWinner(current.squares);

    // the `moves` is a React element:
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      // if (move === this.state.stepNumber) {
      //   desc = "<b>" + desc + "</b>";
      // }
      console.log("step", step);
      return (
        <li key={move}>
          <button
            className={move === this.state.stepNumber ? "bold" : ""}
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
          {//Displays the location for each move in the format (col, row) in the move history list:
          step.lastMove !== -1
            ? "(" +
              ((step.lastMove % 3) + 1) + //col
              "," +
              (Math.floor(step.lastMove / 3) + 1) + //row
              ")"
            : ""}
        </li>
      );
    });

    if (this.state.historyOrder < 0) {
      moves.reverse();
    }

    let status;
    if (winner) {
      this.finished = true;
      status = "Winner: " + winner;
    } else if (this.state.stepNumber === 9) {
      this.finished = true;
      status = "No Winner - Draw";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
            lastMove={current.lastMove}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          order:{" "}
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              this.setState({ historyOrder: -this.state.historyOrder })
            }
          >
            {/* <i classname="material-icons">vertical_align_bottom</i> */}
            <Icon className="icon" color="primary">
              {this.state.historyOrder > 0
                ? "vertical_align_bottom"
                : "vertical_align_top"}
            </Icon>
            {this.state.historyOrder > 0 ? "V" : "^"}
          </Button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
