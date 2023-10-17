import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SearchBar, Card, Text, Icon } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const Dashboard = () => {
  const gridData = [
    [
      { title: 'Card 1', icon: 'user' },
      { title: 'Card 2', icon: 'cog' },
    ],
    [
      { title: 'Card 3', icon: 'chart-pie' },
      { title: 'Card 4', icon: 'file-alt' },
    ],
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#566573' />

      <Card containerStyle={styles.dashboardCard}>
        <View style={styles.gridContainer}>
          {gridData.map((row, rowIndex) => (
            <View style={styles.gridRow} key={rowIndex}>
              {row.map((item, columnIndex) => (
                <Card key={columnIndex} containerStyle={styles.card}>
                  <Icon
                    name={item.icon}
                    type="font-awesome"
                    size={50}
                    color="#517fa4"
                  />
                  <Text>{item.title}</Text>
                </Card>
              ))}
            </View>
          ))}
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2631',
  },
  gridContainer: {
    flexDirection: 'column',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  card: {
    width: '40%',
    alignItems: 'center',
    borderRadius: 14,
  },
  dashboardCard: {
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#566573',
    margin: 0,
    borderWidth: 0, // Remove the border
    borderColor: '#566573', // Set the border color to match the background
  },
});

export default Dashboard;
