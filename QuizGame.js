import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, ToastAndroid } from 'react-native';
import 'react-native-gesture-handler';

const allQuestions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which gas do plants use for photosynthesis?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 'William Shakespeare',
  },
  // Add more questions here
  // ...
    {
      question: 'Which country is known as "Land of the Pure"?',
      options: ['Saudi Arabia', 'Pakistan', 'Turkey', 'Egypt'],
      correctAnswer: 'Pakistan',
    },
    {
      question: 'What is the national sport of Japan?',
      options: ['Sumo Wrestling', 'Karate', 'Judo', 'Baseball'],
      correctAnswer: 'Sumo Wrestling',
    },
    {
      question: 'Which of these is an anagram of the word "listen"?',
      options: ['Silent', 'Tinsel', 'Lantern', 'Sentry'],
      correctAnswer: 'Silent',
    },
    {
      question: 'Which country is known as the "Land Down Under"?',
      options: ['Canada', 'United Kingdom', 'Australia', 'New Zealand'],
      correctAnswer: 'Australia',
    },
    {
      question: 'Who is the founder of Islam?',
      options: ['Prophet Muhammad', 'Prophet Ibrahim', 'Prophet Musa', 'Prophet Isa'],
      correctAnswer: 'Prophet Muhammad',
    },
    {
      question: 'Which sports figure is often referred to as "The Greatest of All Time" (GOAT)?',
      options: ['Michael Jordan', 'Serena Williams', 'Muhammad Ali', 'Usain Bolt'],
      correctAnswer: 'Muhammad Ali',
    },
    {
      question: 'Which of these is an anagram of the word "astronomer"?',
      options: ['Moonstarer', 'Starromeno', 'Asternmoro', 'Roarmtnoes'],
      correctAnswer: 'Moonstarer',
    },
    {
      question: 'Which country is known for the Taj Mahal?',
      options: ['China', 'India', 'Egypt', 'Greece'],
      correctAnswer: 'India',
    },
    {
      question: 'In which month do Muslims fast during Ramadan?',
      options: ['Shawwal', 'Dhul-Hijjah', 'Rabi\' al-Awwal', 'Ramadan'],
      correctAnswer: 'Ramadan',
    },
    {
      question: 'Which team won the FIFA World Cup in 2018?',
      options: ['Brazil', 'France', 'Germany', 'Argentina'],
      correctAnswer: 'France',
    },
    {
      question: 'Which of these is an anagram of the word "rescue"?',
      options: ['Resuce', 'Cursue', 'Secure', 'Rucsee'],
      correctAnswer: 'Rescue',
    },
    {
      question: 'Which country is known for the Christ the Redeemer statue?',
      options: ['Italy', 'Greece', 'Brazil', 'Spain'],
      correctAnswer: 'Brazil',
    },
    {
      question: 'Which book is considered the holy scripture of Islam?',
      options: ['Quran', 'Bible', 'Torah', 'Tripitaka'],
      correctAnswer: 'Quran',
    },
    {
      question: 'Which athlete is known for his record-breaking long jump at the 1968 Olympics?',
      options: ['Carl Lewis', 'Usain Bolt', 'Bob Beamon', 'Jesse Owens'],
      correctAnswer: 'Bob Beamon',
    },
    {
      question: 'Which of these is an anagram of the word "listen"?',
      options: ['Silent', 'Tinsel', 'Lantern', 'Sentry'],
      correctAnswer: 'Silent',
    },
    {
      question: 'Which country is known as the "Pearl of the Indian Ocean"?',
      options: ['Sri Lanka', 'Maldives', 'Mauritius', 'Singapore'],
      correctAnswer: 'Sri Lanka',
    },
    {
      question: 'What is the holy book of Islam?',
      options: ['Bible', 'Quran', 'Torah', 'Tripitaka'],
      correctAnswer: 'Quran',
    },
    {
      question: 'Which athlete is known as "The Flying Sikh"?',
      options: ['Usain Bolt', 'Milkha Singh', 'Carl Lewis', 'Michael Johnson'],
      correctAnswer: 'Milkha Singh',
    },
    {
      question: 'Which of these is an anagram of the word "triangle"?',
      options: ['Retalgin', 'Tangler', 'Garnlite', 'Nailer'],
      correctAnswer: 'Retalgin',
    },
    {
      question: 'Which country is known for the Pyramids of Giza?',
      options: ['Egypt', 'Mexico', 'China', 'India'],
      correctAnswer: 'Egypt',
    },
    {
      question: 'What is the month of fasting in Islam called?',
      options: ['Ramadan', 'Shawwal', 'Dhul-Qi\'dah', 'Muharram'],
      correctAnswer: 'Ramadan',
    },
    {
      question: 'Which team won the FIFA World Cup in 2014?',
      options: ['Italy', 'Germany', 'Brazil', 'Argentina'],
      correctAnswer: 'Germany',
    },
    {
      question: 'Which of these is an anagram of the word "astronomer"?',
      options: ['Moonstarer', 'Starromeno', 'Asternmoro', 'Roarmtnoes'],
      correctAnswer: 'Moonstarer',
    },
    {
      question: 'Which country is known as the "Land of Fire and Ice"?',
      options: ['Japan', 'Iceland', 'Russia', 'Canada'],
      correctAnswer: 'Iceland',
    },
    {
      question: 'In which city is the Kaaba located?',
      options: ['Istanbul', 'Mecca', 'Cairo', 'Medina'],
      correctAnswer: 'Mecca',
    },  
    {
      question: 'What comes next in the series: 1, 3, 7, 15, 31, 63, ___',
      options: ['94', '73', '101', '127'],
      correctAnswer: '127',
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the capital city of Australia?',
      options: ['Melbourne', 'Sydney', 'Canberra', 'Brisbane'],
      correctAnswer: 'Canberra',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Go', 'Au', 'Gl', 'Gd'],
      correctAnswer: 'Au',
    },
    {
      question: 'Which language is spoken in Brazil?',
      options: ['Spanish', 'Portuguese', 'French', 'Italian'],
      correctAnswer: 'Portuguese',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Which novel is written by Jane Austen?',
      options: ['Pride and Prejudice', 'Great Expectations', 'Moby-Dick', 'War and Peace'],
      correctAnswer: 'Pride and Prejudice',
    },
    {
      question: 'What is the square root of 144?',
      options: ['9', '12', '15', '16'],
      correctAnswer: '12',
    },
    {
      question: 'Which planet is known as the "King of Planets"?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 'Jupiter',
    },
    {
      question: 'Which US state is known as the "Sunshine State"?',
      options: ['California', 'Florida', 'Texas', 'Arizona'],
      correctAnswer: 'Florida',
    },
    {
      question: 'What is the largest mammal on Earth?',
      options: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      question: 'Which river is the longest in the world?',
      options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
      correctAnswer: 'Nile River',
    },
    {
      question: 'What is the capital city of France?',
      options: ['Berlin', 'Madrid', 'Rome', 'Paris'],
      correctAnswer: 'Paris',
    },
    {
      question: 'What is the process by which plants make their own food using sunlight?',
      options: ['Respiration', 'Photosynthesis', 'Germination', 'Pollination'],
      correctAnswer: 'Photosynthesis',
    },
    {
      question: 'Which famous scientist developed the theory of relativity?',
      options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Stephen Hawking'],
      correctAnswer: 'Albert Einstein',
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'NaCl'],
      correctAnswer: 'H2O',
    },
    {
      question: 'Who is known as the "Father of Modern Physics"?',
      options: ['Isaac Newton', 'Galileo Galilei', 'Albert Einstein', 'Niels Bohr'],
      correctAnswer: 'Albert Einstein',
    },
    {
      question: 'What is the national flower of Japan?',
      options: ['Cherry Blossom', 'Rose', 'Tulip', 'Sunflower'],
      correctAnswer: 'Cherry Blossom',
    },
    {
      question: 'In which year did the Titanic sink?',
      options: ['1912', '1923', '1907', '1931'],
      correctAnswer: '1912',
    },
    {
      question: 'What is the capital city of India?',
      options: ['New Delhi', 'Mumbai', 'Kolkata', 'Bangalore'],
      correctAnswer: 'New Delhi',
    },
    {
      question: 'Who wrote the play "Hamlet"?',
      options: ['William Shakespeare', 'George Orwell', 'F. Scott Fitzgerald', 'Mark Twain'],
      correctAnswer: 'William Shakespeare',
    },
    {
      question: 'Which gas do plants use for photosynthesis?',
      options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide',
    },
    {
      question: 'Which of the following is a primary color?',
      options: ['Green', 'Purple', 'Orange', 'Blue'],
      correctAnswer: 'Blue',
    },
    {
      question: 'Who is the author of "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'J.K. Rowling', 'George Orwell', 'Ernest Hemingway'],
      correctAnswer: 'Harper Lee',
    }
    ,
  {
    question: 'What comes next in the series: 1, 3, 7, 15, 31, 63, ___',
    options: ['94', '73', '101', '127'],
    correctAnswer: '127',
  },
  {
    question: 'When did Titanic sank?',
    options: ['2000', '1878', '1912', '1933'],
    correctAnswer: '1912',
  },
];

const getRandomQuestions = (count) => {
  const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, count);
};

class QuizGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: getRandomQuestions(10),
      currentQuestionIndex: 0,
      score: 0,
      gameEnded: false,
    };
  }

  handleAnswer = (selectedAnswer) => {
    const { currentQuestionIndex, questions } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }));
      ToastAndroid.show('Correct Answer!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Incorrect Answer!', ToastAndroid.SHORT);
    }

    if (currentQuestionIndex < questions.length - 1) {
      this.setState(prevState => ({
        currentQuestionIndex: prevState.currentQuestionIndex + 1,
      }));
    } else {
      this.setState({ gameEnded: true });
    }
  };

  handleRestart = () => {
    this.setState({
      questions: getRandomQuestions(10),
      currentQuestionIndex: 0,
      score: 0,
      gameEnded: false,
    });
  };

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  render() {
    const { currentQuestionIndex, score, gameEnded, questions } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Quiz Game</Text>
        {gameEnded ? (
          <View>
            <Text style={styles.resultText}>Your Score: {score}</Text>
            <Button title="Restart Game" onPress={this.handleRestart} />
            <Button title="Back to App" onPress={this.handleBack} />
          </View>
        ) : (
          <View>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => this.handleAnswer(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
            <Text style={styles.scoreText}>Score: {score}</Text>
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
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
  },
  scoreText: {
    fontSize: 18,
    marginTop: 10,
  },
  resultText: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default QuizGame;
