import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

import React, {useState} from 'react';


const Notification = () => {
    
  const [refreshing, setRefreshing] = useState(false);

  const pullDown = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const notifications = [
    {
      id: 1,
      title:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      read: false,
    },
    {
      id: 2,
      title: 'There are many variations of passages of Lorem Ipsum available',
      read: false,
    },
    {
      id: 3,
      title:
        'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      read: true,
    },
    {
      id: 4,
      title:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      read: true,
    },
    {
      id: 5,
      title:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. ',
      read: true,
    },
    {
      id: 6,
      title:
        'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
      read: true,
    },
    {
      id: 7,
      title:
        'simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      read: true,
    },
    {
      id: 8,
      title:
        'available, but the majority have suffered alteration in some form, by injected humour.',
      read: true,
    },
  ];

  return (
    <SafeAreaView style={styles.notificationContainer}>
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={pullDown} />
        }
        renderItem={({item}) => {
          return (
            <TouchableOpacity>
              <View
                style={[
                  styles.notificationRow,
                  {backgroundColor: !item.read && '#fff'},
                ]}>
                <Text style={styles.notificationText}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'column',
    marginTop: 30,
    paddingBottom:70,
    marginHorizontal: 20,
  },
  notificationRow: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  notificationText: {
    fontSize: 14,
    lineHeight: 25,
  },
});
