import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <ElevatedCards />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
