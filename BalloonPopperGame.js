// import React, { Component } from 'react';
// import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
// import 'react-native-gesture-handler';


// class BalloonPopperGame extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       balloons: [],
//       score: 0,
//       highScore: 0,
//       gameEnded: false,
//     };
//   }

//   componentDidMount() {
//     this.startGame();
//   }

//   startGame = () => {
//     this.setState({
//       balloons: [],
//       score: 0,
//       gameEnded: false,
//     });

//     this.interval = setInterval(this.updateGame, 1000);
//   }

//   updateGame = () => {
//     if (!this.state.gameEnded) {
//       const balloonsCopy = [...this.state.balloons];
//       const randomNumber = Math.random();
//       const balloonType = randomNumber < 0.8 ? 'green' : 'red';
//       const newBalloon = { type: balloonType, id: balloonsCopy.length + 1 };
//       balloonsCopy.push(newBalloon);

//       this.setState({ balloons: balloonsCopy });

//       if (this.state.score >= 5) {
//         clearInterval(this.interval);
//         this.interval = setInterval(this.updateGame, 800);
//       }

//       if (this.state.score >= 10) {
//         clearInterval(this.interval);
//         this.interval = setInterval(this.updateGame, 600);
//       }
//     }
//   }

//   popBalloon = (balloonId, balloonType) => {
//     if (!this.state.gameEnded) {
//       if (balloonType === 'green') {
//         this.setState(prevState => ({
//           score: prevState.score + 1,
//         }));
//       } else if (balloonType === 'red') {
//         this.endGame();
//         return;
//       }

//       const balloonsCopy = this.state.balloons.filter(balloon => balloon.id !== balloonId);
//       this.setState({ balloons: balloonsCopy });
//     }
//   }

//   endGame = () => {
//     clearInterval(this.interval);
//     this.setState(prevState => ({
//       gameEnded: true,
//       highScore: Math.max(prevState.highScore, prevState.score),
//     }));
//   }

//   handleRestart = () => {
//     this.startGame();
//   }

//   render() {
//     const { balloons, score, highScore, gameEnded } = this.state;

//     return (
//       <View style={styles.container}>
//         <Text style={styles.header}>Balloon Popper Game</Text>
//         <Text style={styles.scoreText}>Score: {score}</Text>
//         <Text style={styles.scoreText}>High Score: {highScore}</Text>
//         {gameEnded && (
//           <View>
//             <Text style={styles.resultText}>Game Over</Text>
//             <Button title="Restart Game" onPress={this.handleRestart} />
//           </View>
//         )}
//         <View style={styles.balloonsContainer}>
//           {balloons.map(balloon => (
//             <TouchableOpacity
//               key={balloon.id}
//               style={[styles.balloon, { backgroundColor: balloon.type }]}
//               onPress={() => this.popBalloon(balloon.id, balloon.type)}
//             />
//           ))}
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   scoreText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   resultText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   balloonsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   balloon: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     margin: 10,
//   },
// });

// export default BalloonPopperGame;


import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

class WhackARabbitGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rabbits: [],
      score: 0,
      gameEnded: false,
    };
  }

  componentDidMount() {
    this.startGame();
  }

  startGame = () => {
    this.setState({
      rabbits: [],
      score: 0,
      gameEnded: false,
    });

    this.interval = setInterval(this.updateGame, 1000);
  }

  updateGame = () => {
    if (!this.state.gameEnded) {
      const rabbitsCopy = [...this.state.rabbits];
      const randomNumber = Math.floor(Math.random() * 9); // Generate a random hole number (0-8)
      const rabbitType = Math.random() < 0.8 ? 'white' : 'brown'; // 80% white, 20% brown
      const newRabbit = { type: rabbitType, hole: randomNumber, id: rabbitsCopy.length + 1 };
      rabbitsCopy.push(newRabbit);

      this.setState({ rabbits: rabbitsCopy });
    }
  }

  whackRabbit = (rabbitId, rabbitType) => {
    if (!this.state.gameEnded) {
      if (rabbitType === 'white') {
        this.setState(prevState => ({
          score: prevState.score + 1,
        }));
      } else if (rabbitType === 'brown') {
        this.endGame();
        return;
      }

      const rabbitsCopy = this.state.rabbits.filter(rabbit => rabbit.id !== rabbitId);
      this.setState({ rabbits: rabbitsCopy });
    }
  }

  endGame = () => {
    clearInterval(this.interval);
    this.setState({ gameEnded: true });
  }

  handleRestart = () => {
    this.startGame();
  }

  render() {
    const { rabbits, score, gameEnded } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Whack a Rabbit Game</Text>
        <Text style={styles.scoreText}>Score: {score}</Text>
        {gameEnded && (
          <View>
            <Text style={styles.resultText}>Game Over</Text>
            <Button title="Restart Game" onPress={this.handleRestart} />
          </View>
        )}
        <View style={styles.holesContainer}>
          {Array.from({ length: 9 }).map((_, index) => {
            const rabbit = rabbits.find(rabbit => rabbit.hole === index);
            return (
              <TouchableOpacity
                key={index}
                style={[styles.hole, { backgroundColor: rabbit ? rabbit.type : 'transparent' }]}
                onPress={() => rabbit && this.whackRabbit(rabbit.id, rabbit.type)}
              />
            );
          })}
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
  holesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hole: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WhackARabbitGame;
