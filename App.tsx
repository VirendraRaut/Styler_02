import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import { SafeAreaView } from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
