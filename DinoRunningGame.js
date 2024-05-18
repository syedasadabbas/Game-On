import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Dimensions } from 'react-native';
import 'react-native-gesture-handler';


const { width } = Dimensions.get('window');

class DinoRunningGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinoBottom: 0,
      dinoJumping: false,
      hurdles: [],
      score: 0,
      highScore: 0,
      gameEnded: false,
    };
  }

  componentDidMount() {
    this.startGame();
    this.interval = setInterval(this.updateGame, 50);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startGame = () => {
    this.setState({
      dinoBottom: 0,
      dinoJumping: false,
      hurdles: [],
      score: 0,
      gameEnded: false,
    });
  }

  updateGame = () => {
    if (!this.state.gameEnded) {
      this.moveDino();
      this.generateHurdles();

      const dinoTop = this.state.dinoBottom + 80;
      const dinoRight = 60;
      const dinoLeft = 0;

      const collided = this.state.hurdles.some(hurdle => {
        const hurdleTop = hurdle.bottom + hurdle.height;
        const hurdleRight = hurdle.left + hurdle.width;
        const hurdleLeft = hurdle.left;

        return (
          dinoTop >= hurdle.bottom &&
          dinoRight >= hurdleLeft &&
          dinoLeft <= hurdleRight
        );
      });

      if (collided) {
        this.endGame();
      } else {
        this.setState(prevState => ({
          score: prevState.score + 1,
        }));
      }
    }
  }

  moveDino = () => {
    if (this.state.dinoJumping) {
      if (this.state.dinoBottom < 150) {
        this.setState(prevState => ({
          dinoBottom: prevState.dinoBottom + 8,
        }));
      } else {
        this.setState({ dinoJumping: false });
      }
    } else {
      if (this.state.dinoBottom > 0) {
        this.setState(prevState => ({
          dinoBottom: prevState.dinoBottom - 8,
        }));
      }
    }
  }

  generateHurdles = () => {
    if (this.state.score % 50 === 0) {
      const hurdlesCopy = [...this.state.hurdles];
      hurdlesCopy.push({
        left: width,
        bottom: 0,
        width: 30,
        height: 60,
      });

      this.setState({ hurdles: hurdlesCopy });
    }
  }

  endGame = () => {
    clearInterval(this.interval);
    this.setState(prevState => ({
      gameEnded: true,
      highScore: Math.max(prevState.highScore, prevState.score),
    }));
  }

  handleRestart = () => {
    this.startGame();
    this.interval = setInterval(this.updateGame, 50);
  }

  handleJump = () => {
    if (!this.state.dinoJumping) {
      this.setState({ dinoJumping: true });
    }
  }

  render() {
    const { dinoBottom, hurdles, score, highScore, gameEnded } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Dino Running Game</Text>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Text style={styles.scoreText}>High Score: {highScore}</Text>
        {gameEnded && (
          <View>
            <Text style={styles.resultText}>Game Over</Text>
            <Button title="Restart Game" onPress={this.handleRestart} />
          </View>
        )}
        <View style={styles.gameContainer}>
          <View style={styles.dino} />
          <View style={styles.ground} />
          {hurdles.map((hurdle, index) => (
            <View
              key={index}
              style={[styles.hurdle, { left: hurdle.left, bottom: hurdle.bottom, width: hurdle.width, height: hurdle.height }]}
            />
          ))}
          <TouchableOpacity style={styles.jumpButton} onPress={this.handleJump}>
            <Text style={styles.jumpButtonText}>Jump</Text>
          </TouchableOpacity>
        </View>
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
  scoreText: {
    fontSize: 18,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
  gameContainer: {
    width: width,
    height: 300,
    position: 'relative',
    overflow: 'hidden',
  },
  dino: {
    position: 'absolute',
    bottom: 0,
    left: 30,
    width: 40,
    height: 40,
    backgroundColor: 'green',
  },
  ground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width,
    height: 10,
    backgroundColor: 'gray',
  },
  hurdle: {
    position: 'absolute',
    backgroundColor: 'red',
  },
  jumpButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  jumpButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DinoRunningGame;
