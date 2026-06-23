import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000',
          }}
          style={[styles.cardImage]}
        />
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Lake</Text>
        <Text style={styles.cardLabel}>Germany</Text>
        <Text style={styles.cardDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          culpa.
        </Text>
        <Text style={styles.cardFooter}>CardFooter</Text>
      </View>
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
  card: {},
  elevatedCard: {},
  cardImage: {
    height: 150,
  },
  cardBody: {},
  cardTitle: { color: 'white' },
  cardLabel: { color: 'white' },
  cardDescription: { color: 'white' },
  cardFooter: { color: 'white' },
});
