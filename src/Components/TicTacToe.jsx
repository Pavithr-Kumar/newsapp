import React, { useEffect, useState } from "react";
import Square from "./Square";
const Patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const emptyBoard = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
  const [board, setBoard] = useState(emptyBoard);
  const [player, setPlayer] = useState("O");
  const [result, setresult] = useState({ winner: "", state: "none" });

  function checkWin() {
    Patterns.forEach((currentPattern) => {
      const firstplayer = board[currentPattern[0]];
      if (firstplayer === "") return;
      let win = true;
      currentPattern.forEach((windex) => {
        if (firstplayer !== board[windex]) {
          win = false;
        }
      });

      if (win) setresult({ winner: player, state: "Won" });
    });
  }

  useEffect(() => {
    if (result.state !== "none" && board[4] !== "") {
      alert(`Game complete ${result.winner} won the game`);
      setBoard(emptyBoard);
    }
  }, [result]);

  useEffect(() => {
    if (player !== "") checkWin();
    if (player === "X") setPlayer("O");
    else setPlayer("X");
    checkTie();
  }, [board]);

  function chooseSquare(ind) {
    setBoard(
      board.map((element, index) => {
        if (ind === index && element === "") return player;
        else return element;
      })
    );
  }

  function checkTie() {
    let filled = true;
    board.forEach((item) => {
      if (item === "") filled = false;
    });
    if (filled) {
      alert("Game tied, No One wins");
      setBoard(emptyBoard);
    }
  }

  return (
    <div>
      <div className="min-h-screen min-w-screen grid place-items-center bg-gradient-to-tr from-slate-400 to-red-400">
        <div
          id="main"
          className="border w-2/6 h-3/6 bg-gradient-to-tr from-lime-400 to-emerald-500 bg-opacity-50"
        >
          <div id="row" className="flex h-1/3">
            <Square value={board[0]} chooseSquare={() => chooseSquare(0)} />
            <Square value={board[1]} chooseSquare={() => chooseSquare(1)} />
            <Square value={board[2]} chooseSquare={() => chooseSquare(2)} />
          </div>
          <div id="row" className="flex h-1/3">
            <Square value={board[3]} chooseSquare={() => chooseSquare(3)} />
            <Square value={board[4]} chooseSquare={() => chooseSquare(4)} />
            <Square value={board[5]} chooseSquare={() => chooseSquare(5)} />
          </div>
          <div id="row" className="flex h-1/3">
            <Square value={board[6]} chooseSquare={() => chooseSquare(6)} />
            <Square value={board[7]} chooseSquare={() => chooseSquare(7)} />
            <Square value={board[8]} chooseSquare={() => chooseSquare(8)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
