/* eslint-disable react/no-unstable-nested-components */
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InstanceShow from './InstanceShow';
import IStudents from './Interface';

const ShowData = () => {
  const [msg, setMsg] = useState<string>('');
  const [datastudents, setDatastudents] = useState<any[]>([]);

  const getDataStudents = async () => {
    const config = {
      method: 'get',
      headers: {
        Accept: 'application/json',
      },
    };

    try {
      await InstanceShow(config).then(response => {
        console.log('ini datanya :', response.data.data);
        if (response.data.success === true) {
          setMsg(response.data.message);
          setDatastudents(response.data.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataStudents();
  }, []);

  // const DATA = [
  //   {
  //     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  //     title: 'First Item',
  //   },
  //   {
  //     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //     title: 'Second Item',
  //   },
  //   {
  //     id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //     title: 'Third Item',
  //   },
  // ];

  // type ItemProps = {title: string};

  // const Item = ({title}: ItemProps) => (
  //   <View style={styles.item}>
  //     <Text style={styles.title}>{title}</Text>
  //   </View>
  // );

  // type SiswaProps = {idnumber: number; fullname: string};

  const Siswa = ({
    idnumber,
    fullname,
    address,
    emailaddress,
    gender,
    phone,
  }: IStudents) => (
    <View style={styles.item}>
      <Text style={styles.title}>Id Number : {idnumber}</Text>
      <Text style={styles.title}>Nama : {fullname}</Text>
      <Text style={styles.title}>Alamat : {address}</Text>
      <Text style={styles.title}>E-Mail : {emailaddress}</Text>
      <Text style={styles.title}>Gender : {gender}</Text>
      <Text style={styles.title}>No. HP : {phone}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.item}>{msg}</Text>
      {/* <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      /> */}
      <FlatList
        data={datastudents}
        renderItem={({item}) => (
          <Siswa
            id={0}
            fullname={item.fullname}
            idnumber={item.idnumber}
            phone={item.phone}
            address={item.address}
            emailaddress={item.emailaddress}
            gender={item.gender}
            photo={''}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        // keyExtractor={(item, index) => index.toString()}
        // renderItem={({item}) => (
        //   <View>
        //     <Text>{item.idnumber}</Text>
        //     <Text>{item.fullname}</Text>
        //   </View>
        // )}
      />
    </SafeAreaView>
  );
};

export default ShowData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderRadius: 20,
    backgroundColor: 'green',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'blue',
    fontFamily: 'Cochin',
  },
});
