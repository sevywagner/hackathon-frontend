import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, View, TextInput, Text, Pressable } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import TimeBox from '../components/order/TimeBox';
import times from '../components/order/times';
import mainStyles from '../constants/mainStyles';

export default Order = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(date);
    const [amount, setAmount] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [email, setEmail] = useState();
    const [slide, setSlide] = useState(1);
    const [payout, setPayout] = useState();
    const [error, setError] = useState();
  
    const dateChangeHandler = (event, selectedDate) => {
      setDate(selectedDate);
    };

    const timePressHandler = (tappedTime) => {
      setTime(tappedTime);
    }

    const amountHandler = (amount) => {
      setAmount(amount);
      setPayout((amount / .25) * 5.00);
    }

    const nameChangeHandler = (enteredText) => {
      setName(enteredText);
    }

    const addressChangeHandler = (enteredText) => {
      setAddress(enteredText);
    }

    const emailChangeHandler = (enteredText) => {
      setEmail(enteredText);
    }

    const nextSlideHandler = () => {
      setSlide(2);
    }


    const prevSlideHandler = () => {
      setSlide(1);
    }

    const submitHandler = () => {
      let error = false;
      fetch('https://blood-app-backend.herokuapp.com/orders', {
            method: 'POST',
            body: JSON.stringify({
                name,
                address,
                email,
                date,
                time,
                amount,
                payout
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
          if (!response.ok) {
            error = true;
          }
          return response.json();
        }).then((data) => {
            if (error) {
              console.log(data.error);
              setError(data.error);
            } else {
              console.log(data.message);
              navigation.navigate('Home')
              setName('');
              setAddress('');
              setEmail('');
              setSlide(1);
              setAmount(0);
              setDate(new Date());
              setTime(date);
            }
        }).catch((err) => {
          console.log(err);
        });
    }

    
    const day = times.find((t) => t.day === date.toDateString().split(' ')[0]);
  
    return (
      <View>
        <View style={styles.small}>
          <DateTimePicker 
              value={date}
              onChange={dateChangeHandler}
              minimumDate={new Date()}
          />
        </View>
        {slide === 1 && <ScrollView style={styles.large}>
          {error && <Text style={mainStyles.error}>{error}</Text>}
          {day.times.map((t) => <TimeBox 
            isSelected={t === time}
            time={t} 
            date={date} 
            key={t} 
            onPress={timePressHandler.bind(null, t)} 
          />)}
        </ScrollView>}
        {slide === 2 && <ScrollView style={styles.large}>
            {error && <Text style={mainStyles.error}>{error}</Text>}
            <Text style={mainStyles.label}>Name</Text>
            <TextInput style={mainStyles.input} onChangeText={nameChangeHandler} />
            <Text style={mainStyles.label}>Address</Text>
            <TextInput style={mainStyles.input} onChangeText={addressChangeHandler} />
            <Text style={mainStyles.label}>Email</Text>
            <TextInput style={mainStyles.input} onChangeText={emailChangeHandler} />
            <Text style={{ fontSize: 20, fontFamily: 'Montserrat', textAlign: 'center' }}>Amount donating(Liters):</Text>
            <View style={styles.wrap}>
              <View style={styles.innerWrap}>
                <Pressable style={() => {
                  if (amount === .25) {
                    return styles.amountOptionPressed;
                  } else {
                    return styles.amountOption;
                  }
                }} onPress={amountHandler.bind(null, .25)}>
                  <Text style={amount === .25 ? [styles.amountOptionText, { color: 'white' }] : styles.amountOptionText}>.25</Text>
                </Pressable>
                <Pressable style={() => {
                  if (amount === .5) {
                    return styles.amountOptionPressed;
                  } else {
                    return styles.amountOption;
                  }
                }} onPress={amountHandler.bind(null, .5)}>
                  <Text style={amount === .5 ? [styles.amountOptionText, { color: 'white' }] : styles.amountOptionText}>.5</Text>
                </Pressable>
                <Pressable style={() => {
                  if (amount === .75) {
                    return styles.amountOptionPressed;
                  } else {
                    return styles.amountOption;
                  }
                }} onPress={amountHandler.bind(null, .75)}>
                  <Text style={amount === .75 ? [styles.amountOptionText, { color: 'white' }] : styles.amountOptionText}>.75</Text>
                </Pressable>
                <Pressable style={() => {
                  if (amount === 1) {
                    return styles.amountOptionPressed;
                  } else {
                    return styles.amountOption;
                  }
                }} onPress={amountHandler.bind(null, 1)}>
                  <Text style={amount === 1 ? [styles.amountOptionText, { color: 'white' }] : styles.amountOptionText}>1</Text>
                </Pressable>
              </View>
            </View>
        </ScrollView>}
        <View style={styles.small}>
          {slide === 1 && <Button onPress={nextSlideHandler} title='Next' />}

          {slide === 2 && <Text style={{ fontSize: 18 }}>You earn: ${payout || 0}</Text>}
          {slide == 2 && <View style={styles.row}>
            <Button title='Go Back' onPress={prevSlideHandler} />
            <Button title='Submit' onPress={submitHandler} />
          </View>}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  small: {
    height: '15%',
    alignItems: 'center',
    padding: 20
  },
  large: {
    height: '70%'  },
  row: {
    flexDirection: 'row',
  },
  amountOption: {
    padding: 15,
    borderRadius: 20
  },
  amountOptionPressed: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'black'
  },
  amountOptionText: {
    fontSize: 18
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  innerWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20
  }
});