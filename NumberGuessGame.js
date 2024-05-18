import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native'; // Import TouchableOpacity
import 'react-native-gesture-handler';

class NumberGuessGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetNumber: Math.floor(Math.random() * 100) + 1,
      guess: '',
      message: '',
      attempts: 0,
      gameOver: false,
    };
  }

  handleGuess = () => {
    const { targetNumber, guess, attempts } = this.state;
    const guessedNumber = parseInt(guess);

    if (isNaN(guessedNumber)) {
      this.setState({ message: 'Please enter a valid number.' });
      return;
    }

    this.setState({ attempts: attempts + 1 });

    if (guessedNumber === targetNumber) {
      this.setState({
        message: `Congratulations! You guessed the number ${targetNumber} in ${attempts + 1} attempts.`,
        gameOver: true,
      });
    } else if (guessedNumber < targetNumber) {
      this.setState({ message: 'Try a higher number.' });
    } else {
      this.setState({ message: 'Try a lower number.' });
    }
  };

  handleRestart = () => {
    this.setState({
      targetNumber: Math.floor(Math.random() * 100) + 1,
      guess: '',
      message: '',
      attempts: 0,
      gameOver: false,
    });
  };

  render() {
    const { guess, message, gameOver } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Number Guess Game</Text>
        <Text>{message}</Text>
        {!gameOver && (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter your guess"
              onChangeText={(text) => this.setState({ guess: text })}
              value={guess}
              keyboardType="numeric"
            />
            <Button title="Guess" onPress={this.handleGuess} />
          </View>
        )}
        {gameOver && (
          <Button title="Restart Game" onPress={this.handleRestart} />
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
  input: {
    width: 200,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default NumberGuessGame;
