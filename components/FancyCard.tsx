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
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    margin: 14,
  },
  elevatedCard: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 150,
    marginBottom: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardBody: {},
  cardTitle: { color: 'black' },
  cardLabel: { color: 'black' },
  cardDescription: { color: 'black' },
  cardFooter: { color: 'black' },
});
