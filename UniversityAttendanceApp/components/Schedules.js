import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const sampleData = [
  {
    id: '1',
    title: 'Card 1',
    content: 'This is the content of Card 1.',
  },
  {
    id: '2',
    title: 'Card 2',
    content: 'This is the content of Card 2.',
  },
  {
    id: '3',
    title: 'Card 3',
    content: 'This is the content of Card 3.',
  },
  {
    id: '3',
    title: 'Card 3',
    content: 'This is the content of Card 3.',
  },

];

const Separator = () => <View style={{ height: 10 }} />; // Adjust the height to set the gap size.

const Schedules = () => {
 

  const renderItem = ({ item }) => (
    <Card style={{ backgroundColor: '#fff' }}>
      
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Title>{item.title}</Title>
            <View>
              <MaterialIcons name={"schedule"} size={20} color="#517fa4" />
              <Text>20-23-2023 5:00 - 7:00</Text>
            </View>
          </View>
          <Paragraph>{item.content}</Paragraph>
        </Card.Content>
    
        <View style={{ padding: 10, backgroundColor: '#fff' }}>
          {/* Additional information to show when expanded */}
          <Text>Additional Information:</Text>
          <Text>Some more details about this event.</Text>
        </View>
 
    </Card>
  );

  return (
    <ScrollView>
      <View style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>
        <FlatList
          data={sampleData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </ScrollView>
  );
};

export default Schedules;
