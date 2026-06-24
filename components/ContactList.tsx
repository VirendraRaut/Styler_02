import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: '1',
      name: 'Aarav Sharma',
      status: 'Available',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      uid: '2',
      name: 'Priya Patel',
      status: 'Busy',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      uid: '3',
      name: 'Rohan Verma',
      status: 'At work',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      uid: '4',
      name: 'Ananya Singh',
      status: 'Online',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      uid: '5',
      name: 'Karan Mehta',
      status: 'In a meeting',
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      uid: '6',
      name: 'Sneha Joshi',
      status: 'Offline',
      imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      uid: '7',
      name: 'Vikram Rao',
      status: 'Traveling',
      imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      uid: '8',
      name: 'Neha Gupta',
      status: 'Available',
      imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    {
      uid: '9',
      name: 'Arjun Kapoor',
      status: 'Working remotely',
      imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
      uid: '10',
      name: 'Meera Nair',
      status: 'Busy',
      imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    {
      uid: '11',
      name: 'Rahul Desai',
      status: 'Online',
      imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    {
      uid: '12',
      name: 'Pooja Kulkarni',
      status: 'Away',
      imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      uid: '13',
      name: 'Aditya Malhotra',
      status: 'Available',
      imageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
      uid: '14',
      name: 'Kavya Iyer',
      status: 'Studying',
      imageUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
    },
    {
      uid: '15',
      name: 'Siddharth Jain',
      status: 'Offline',
      imageUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {},
  container: {},
  userCard: {},
  userImage: {},
  userName: {},
  userStatus: {},
});
