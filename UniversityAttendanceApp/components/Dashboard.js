import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar, Image } from 'react-native';
import { SearchBar, Card, Text, Icon } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Schedules from './Schedules';
const Dashboard = () => {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#9FE2BF' />

      <Card containerStyle={styles.dashboardCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Image
            source={require('../assets/logo.png')} // Replace with the path to your image
            style={styles.imagelogoMain}
          />
          <Text style={{ fontSize: 20, marginTop: 20 }}>Hello Muluken</Text>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'space-evenly' }}>
         
          <Text style={{ fontSize: 20, alignSelf:'center' }}>My Absent Days so far</Text>
          <Text style={{ fontSize: 30, alignSelf:'center' }}>30 days</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Card containerStyle={styles.card}>
                  <MaterialIcons
                    name={"schedule"}
                  
                    size={50}
                    color="#517fa4"
                  />
                  <Text>{"Schedule"}</Text>
                </Card>

                <Card  containerStyle={styles.card}>
                  <Entypo
                    name={"bookmarks"}
                    size={50}
                    color="#517fa4"
                  />
                  <Text>{"Courses"}</Text>
                </Card>

                <Card  containerStyle={styles.card}>
                  <FontAwesome5
                    name={"history"}
                    size={50}
                    color="#517fa4"
                  />
                  <Text>{"History"}</Text>
                </Card>

        </View>


      </Card>
      <Schedules/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    width: '30%',
    height:90,
    alignItems: 'center',
    borderRadius: 14,
  },
  dashboardCard: {
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#9FE2BF',
    margin: 0,
    borderWidth: 0, // Remove the border
    borderColor: '#34495E', // Set the border color to match the background
  },
  imagelogoMain: {
    width: "30%", // Set the width of the image
    height: 80, // Set the height of the image
    borderRadius: 20
  },
});

export default Dashboard;
