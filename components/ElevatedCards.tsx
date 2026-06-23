import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>🚀</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: { padding: 8 },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8,
  },
  elevatedCard: {
    backgroundColor: '#CAD5E2',
    elevation: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowColor: '#e4e124',
  },
});
