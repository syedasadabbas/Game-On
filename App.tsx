import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NumberGuessGame from './NumberGuessGame';
import TicTacToeGame from './TicTacToeGame';
import QuizGame from './QuizGame';
import BalloonPopperGame from './BalloonPopperGame';
import DinoRunningGame from './DinoRunningGame';
import 'react-native-gesture-handler';

type GameName = 'NumberGuess' | 'TicTacToe' | 'Quiz' | 'BalloonPopper' | 'DinoRunning';

interface MainScreenProps {
  navigation: any;
}

const Stack = createStackNavigator();

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [selectedGame, setSelectedGame] = useState<GameName | ''>('');

  const handleGameClick = (gameName: GameName) => {
    setSelectedGame(gameName);
  };

  const renderGame = () => {
    switch (selectedGame) {
      case 'NumberGuess':
        return <NumberGuessGame />;
      case 'TicTacToe':
        return <TicTacToeGame />;
      case 'Quiz':
        return <QuizGame />;
      case 'BalloonPopper':
        return <BalloonPopperGame />;
      case 'DinoRunning':
        return <DinoRunningGame />;
      default:
        return (
          <View style={styles.container}>
            <Text style={styles.header}>Select a Game</Text>
            <TouchableOpacity style={styles.gameButton} onPress={() => handleGameClick('NumberGuess')}>
              <Text>Number Guess</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gameButton} onPress={() => handleGameClick('TicTacToe')}>
              <Text>Tic Tac Toe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gameButton} onPress={() => handleGameClick('Quiz')}>
              <Text>Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gameButton} onPress={() => handleGameClick('BalloonPopper')}>
              <Text>Balloon Popper</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gameButton} onPress={() => handleGameClick('DinoRunning')}>
              <Text>Dino Running</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      {renderGame()}
    </View>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NumberGuess" component={NumberGuessGame} />
        <Stack.Screen name="TicTacToe" component={TicTacToeGame} />
        <Stack.Screen name="Quiz" component={QuizGame} />
        <Stack.Screen name="BalloonPopper" component={BalloonPopperGame} />
        <Stack.Screen name="DinoRunning" component={DinoRunningGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
  gameButton: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
});

export default App;
