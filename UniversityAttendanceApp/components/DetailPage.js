import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card, Title, Button, DataTable } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DetailPage = () => {
  // Demo data for the table
  const tableData = [
    { subject: 'Math', teacher: 'John Doe', time: '9:00 AM', room: '101' },
    { subject: 'Science', teacher: 'Jane Smith', time: '10:30 AM', room: '102' },
    { subject: 'History', teacher: 'Mike Johnson', time: '1:00 PM', room: '103' },
  ];

  return (
    <ScrollView style={{ padding: 16 }}>
      <Card>
        <Card.Content>
          <Title>Course Details</Title>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Subject</DataTable.Title>
              <DataTable.Title>Teacher</DataTable.Title>
              <DataTable.Title>Time</DataTable.Title>
              <DataTable.Title>Room</DataTable.Title>
            </DataTable.Header>

            {tableData.map((item, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.subject}</DataTable.Cell>
                <DataTable.Cell>{item.teacher}</DataTable.Cell>
                <DataTable.Cell>{item.time}</DataTable.Cell>
                <DataTable.Cell>{item.room}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
            <Button icon="pencil" mode="outlined" onPress={() => console.log('Edit pressed')}>
              Edit
            </Button>
            <Button icon="delete" mode="outlined" onPress={() => console.log('Delete pressed')}>
              Delete
            </Button>
          </View>
        </Card.Content>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <Card.Cover source={{ uri: 'https://via.placeholder.com/300' }} />
        <Card.Content>
          <Title>Course Overview</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id leo id ex elementum rhoncus.
          </Text>
        </Card.Content>
        <Card.Actions style={{ justifyContent: 'flex-end' }}>
          <Button
            icon={({ size, color }) => <MaterialIcons name="info" size={size} color={color} />}
            onPress={() => console.log('More Info pressed')}
          >
            More Info
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

export default DetailPage;
