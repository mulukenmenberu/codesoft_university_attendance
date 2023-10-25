import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Portal, Modal, TextInput, Button, Provider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse, getCourse, resetState } from '../redux/reducers/courseReducer';
import { getUserInfoFromDB } from '../DB/DB';

const Separator = () => <View style={{ height: 10 }} />;

const Schedules = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [creditHour, setCreditHour] = useState('');
  const [year, setYear] = useState('');
  const [nameError, setNameError] = useState('');
  const [codeError, setCodeError] = useState('');
  const [hourError, setHourError] = useState('');
  const [yearError, setYearError] = useState('');

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setCourseName('');
    setCourseCode('');
    setCreditHour('');
    setYear('');
    setNameError('');
    setCodeError('');
    setHourError('');
    setYearError('');
  };


  const dispatch = useDispatch();
  const { courseInfo, success, errorMessage } = useSelector((state) => state.course);


  const saveCourse = () => {
    setNameError('');
    setCodeError('');
    setHourError('');
    setYearError('');

    let hasError = false;

    if (!courseName) {
      setNameError('Course name is required');
      hasError = true;
    }

    if (!courseCode) {
      setCodeError('Course code is required');
      hasError = true;
    }

    if (!creditHour) {
      setHourError('Credit hour is required');
      hasError = true;
    }

    if (!year) {
      setYearError('Year is required');
      hasError = true;
    }

    if (!hasError) {
      // toggleModal();
      const data = {
        course_name:courseName, 
        course_code:courseCode,
        instructor_id:userdata.id ||6,
        credit_hour:  creditHour,
        year: year
      }
      dispatch(addCourse(data))
      setTimeout(()=>{
        dispatch(getCourse())
        toggleModal()

      },1000)
    }
  };
const manageRedirect = ()=>[
  // navigation.navigate('DetailPage')
]
  const renderItem = ({ item }) => (
    <Card style={{ backgroundColor: '#fff' }} onPress={manageRedirect}>
      <Card.Content>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Title>{item.course_name || ''}</Title>
          <View>
            <MaterialIcons name={"schedule"} size={20} color="#517fa4" />
            <Text>20-23-2023 5:00 - 7:00</Text>
          </View>
        </View>
        <Paragraph>{item.course_name || ''}</Paragraph>
      </Card.Content>
      <View style={{ padding: 10, backgroundColor: '#fff' }}>
        <Text>Additional Information:</Text>
        <Text>Some more details about this event.</Text>
      </View>
    </Card>
  );

  const [userdata, setUserdata] = useState({})
  const handleUserInfo = (userInfo) => {
    if (userInfo) {
      console.log('Retrieved user info:', userInfo);
      setUserdata(userInfo)
    } else {
      console.log('No user info in the database.');
    }
  };

  useEffect(()=>{
    dispatch(getCourse())
    getUserInfoFromDB(handleUserInfo);

  },[])

  return (
    <ScrollView>
      <View style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>
        <FlatList
          data={courseInfo}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={Separator}
        />
      </View>
      <View style={{  marginTop: 10, paddingLeft: 10, paddingRight: 10 , marginTop:25}}>
        <Card style={{ backgroundColor: '#C2CAD2' }}>
          <Card.Content>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Title>{"Add New Course"}</Title>
            </View>
            <TouchableOpacity onPress={toggleModal}>
              <Ionicons style={{ alignSelf: 'center', justifyContent: 'center' }} name={"add"} size={70} color="#517fa4" />
            </TouchableOpacity>
          </Card.Content>
          <View style={{ padding: 10, backgroundColor: '#C2CAD2' }}>
            <Text></Text>
            <Text></Text>
          </View>
        </Card>
      </View>

      <Portal>
        <Modal visible={modalVisible} onDismiss={toggleModal}>
          <Card>
            <Card.Content>
              <Title>Add New Course</Title>
              <View style={{paddingTop:10}}>
              <TextInput
                label="Course Name"
                value={courseName}
                onChangeText={(text) => setCourseName(text)}
                error={nameError ? true : false}
              />
              {nameError ? <Text style={{ color: 'red' }}>{nameError}</Text> : null}
              <TextInput
                label="Course Code"
                value={courseCode}
                onChangeText={(text) => setCourseCode(text)}
                error={codeError ? true : false}
              />
              {codeError ? <Text style={{ color: 'red' }}>{codeError}</Text> : null}
              <TextInput
                label="Credit Hour"
                value={creditHour}
                onChangeText={(text) => setCreditHour(text)}
                error={hourError ? true : false}
              />
              {hourError ? <Text style={{ color: 'red' }}>{hourError}</Text> : null}
              <TextInput
                label="Year"
                value={year}
                onChangeText={(text) => setYear(text)}
                error={yearError ? true : false}
              />
              {yearError ? <Text style={{ color: 'red' }}>{yearError}</Text> : null}
              <Button mode="contained" onPress={saveCourse}>
                Save
              </Button>
              </View>
            </Card.Content>
          </Card>
        </Modal>
      </Portal>
    </ScrollView>
  );
};

export default Schedules
