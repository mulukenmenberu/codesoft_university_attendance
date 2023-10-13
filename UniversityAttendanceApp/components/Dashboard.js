import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SearchBar, Card, Text, Icon } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { Table, Row, Rows } from 'react-native-table-component';

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

  // Sample data for the table
  const tableHead = ['Header 1', 'Header 2', 'Header 3'];
  const tableData = [
    ['Data 1', 'Data 2', 'Data 3'],
    ['Data 4', 'Data 5', 'Data 6'],
    ['Data 7', 'Data 8', 'Data 9'],
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar placeholder="Search..." lightTheme round />

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

      <Card containerStyle={styles.tableCard}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
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
    width: '46%',
    alignItems: 'center',
  },
  tableCard: {
    marginTop: 20,
    padding: 10,
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { margin: 6, fontWeight: 'bold' },
  text: { margin: 6 },
});

export default Dashboard;
