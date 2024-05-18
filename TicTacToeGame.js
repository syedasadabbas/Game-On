import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

class TicTacToeGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: 'X',
      grid: Array(9).fill(''),
      gameEnded: false,
      winner: '',
    };
  }

  handleCellPress = (index) => {
    const { grid, currentPlayer, gameEnded } = this.state;

    if (!gameEnded && grid[index] === '') {
      const newGrid = [...grid];
      newGrid[index] = currentPlayer;

      const winner = this.checkForWinner(newGrid);
      if (winner) {
        this.setState({ grid: newGrid, gameEnded: true, winner });
      } else if (newGrid.every(cell => cell !== '')) {
        this.setState({ grid: newGrid, gameEnded: true, winner: 'draw' });
      } else {
        this.setState({ grid: newGrid, currentPlayer: currentPlayer === 'X' ? 'O' : 'X' });
      }
    }
  };

  checkForWinner = (grid) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }

    return null;
  };

  handleRestart = () => {
    this.setState({
      currentPlayer: 'X',
      grid: Array(9).fill(''),
      gameEnded: false,
      winner: '',
    });
  };

  renderCell = (value, index) => (
    <TouchableOpacity
      style={styles.cell}
      key={index}
      onPress={() => this.handleCellPress(index)}
    >
      <Text style={styles.cellText}>{value}</Text>
    </TouchableOpacity>
  );

  render() {
    const { grid, gameEnded, winner } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Tic Tac Toe</Text>
        <View style={styles.grid}>
          {grid.map((cell, index) => this.renderCell(cell, index))}
        </View>
        {gameEnded && (
          <View>
            <Text style={styles.resultText}>
              {winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`}
            </Text>
            <Button title="Restart Game" onPress={this.handleRestart} />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 200,
  },
  cell: {
    width: 66,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  cellText: {
    fontSize: 32,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default TicTacToeGame;
