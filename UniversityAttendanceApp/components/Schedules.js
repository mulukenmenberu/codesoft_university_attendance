import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Portal, Modal, TextInput, Button, Provider } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse, getCourse, resetState } from '../redux/reducers/courseReducer';
import { getUserInfoFromDB } from '../DB/DB';
const DaysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

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
  const [currentCourse, setCurrentCourse] = useState('');

  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const toggleSecondModal = () => {
    setSecondModalVisible(!secondModalVisible);
    // You can reset any input fields or state related to the second modal here.
  };

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
  const [scheduleData, setScheduleData] = useState({
    Monday: '',
    Tuesday: '',
    Wednesday: '',
    Thursday: '',
    Friday: '',
  });

  const handleInputChange = (day, text) => {
    setScheduleData((prevData) => ({
      ...prevData,
      [day]: text,
    }));
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
const manageRedirect = (title)=>{
  setCurrentCourse(title)
  toggleSecondModal()
}
// open another modal here
// the modal should have the title of the clicked card, and two fields, date selectbox from monday to friday and time input textbox. thier should be a plus icon to add dynamically this two field groups. then save button to save records   

  const renderItem = ({ item }) => (
    <Card style={{ backgroundColor: '#fff' }} onPress={()=>manageRedirect(item.course_name)}>
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
      {userdata.role==2?
      <>
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
      <View style={{height:20}}>

      </View>
      </>
: ''}
      <Portal>
        <Modal visible={modalVisible} onDismiss={toggleModal}>
          <Card style={{backgroundColor:'white'}}>
            <Card.Content>
              <Title>Add New Course</Title>
              <View style={{paddingTop:10}}>
              <TextInput
                label="Course Name"
                value={courseName}
                style={{backgroundColor:'white'}}
                onChangeText={(text) => setCourseName(text)}
                error={nameError ? true : false}
              />
              {nameError ? <Text style={{ color: 'red' }}>{nameError}</Text> : null}
              <TextInput
                label="Course Code"
                value={courseCode}
                style={{backgroundColor:'white'}}
                onChangeText={(text) => setCourseCode(text)}
                error={codeError ? true : false}
              />
              {codeError ? <Text style={{ color: 'red' }}>{codeError}</Text> : null}
              <TextInput
                label="Credit Hour"
                value={creditHour}
                style={{backgroundColor:'white'}}
                onChangeText={(text) => setCreditHour(text)}
                error={hourError ? true : false}
              />
              {hourError ? <Text style={{ color: 'red' }}>{hourError}</Text> : null}
              <TextInput
                label="Year"
                value={year}
                style={{backgroundColor:'white'}}
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
   
      <Portal>
      <Modal  visible={secondModalVisible} onDismiss={toggleSecondModal}>
        <Card style={{backgroundColor:'white'}}>
          <Card.Content>
            <Title>{currentCourse}</Title>
            <View style={styles.table}>
              {DaysOfWeek.map((day, index) => (
                <View key={index} style={styles.row}>
                  <Text style={styles.dayText}>{day}:</Text>
                  <TextInput
                    label="Type Time (eg 2PM - 4PM)"
                    value={scheduleData[day]}
                    onChangeText={(text) => handleInputChange(day, text)}
                    style={styles.textInput}
                  />
                </View>
              ))}
            </View>
            <Button mode="contained" >
              Save
            </Button>
          </Card.Content>
        </Card>
      </Modal>
    </Portal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  table: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dayText: {
    marginRight: 10,
    width: 60, // Adjust this width as needed
  },
  textInput: {
    flex: 1,
    backgroundColor:'white'
  },
});
export default Schedules
