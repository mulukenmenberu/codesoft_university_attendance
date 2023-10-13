import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
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
    <View style={styles.container}>
      <SearchBar
        placeholder="Search..."
        lightTheme
        containerStyle={{
          backgroundColor: 'transparent',
          borderTopWidth: 0, // Remove the top border
          borderBottomWidth: 0, // Remove the bottom border
        }}
        // inputContainerStyle={{ backgroundColor: 'transparent' }}
        searchIcon={{ color: 'black' }} // Set the search icon color as needed
        clearIcon={{ color: 'black' }} // Set the clear icon color as needed
      />

      <Card containerStyle={styles.tableCard}>
        <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </Card>

      <Card containerStyle={styles.dashboardCard}>

      <Card containerStyle={styles.dashboardHeader}>
        <View style={{flexDirection:'row', justifyContent:'space-between', height:'100%'}}>
      <Icon
                  name={'user'}
                  type="font-awesome"
                  size={15}
                  color="#517fa4"
                />
                    <Icon
                  name={'user'}
                  type="font-awesome"
                  size={20}
                  color="#517fa4"
                />
                </View>
</Card>
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

      <StatusBar backgroundColor='#6495ED' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderRadius:14,
  },
  tableCard: {
    marginTop: 20,
    padding: 10,
  },
  dashboardCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '45%', // 25% of the screen's height
    borderTopLeftRadius: 20, // Adjust the radius as needed
    borderTopRightRadius: 20, // Adjust the radius as needed
    backgroundColor: '#6495ED',
    margin: 0, // Reset margin to zero
    padding: 0, // Reset padding to zero
  },
  dashboardHeader:{
    height: '15%', // 25% of the screen's height
    width:"90%",
    backgroundColor:'#40E0D0',
    borderRadius:14,
    marginTop:-30,
    alignSelf:'center',
   

  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { margin: 6, fontWeight: 'bold' },
  text: { margin: 6 },
});

export default Dashboard;
