import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Featured Article</Text>

      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200',
          }}
          style={styles.cardImage}
        />

        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>
            Exploring Modern Urban Architecture
          </Text>

          <Text style={styles.bodyText} numberOfLines={4}>
            Discover the beauty of contemporary city landscapes, innovative
            building designs, and how modern architecture is shaping the future
            of urban living. Learn about sustainable construction and emerging
            trends transforming cities worldwide.
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => openWebsite('https://unsplash.com')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  headingText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 16,
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginHorizontal: 16,

    overflow: 'hidden',

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },

  cardImage: {
    width: '100%',
    height: 220,
  },

  contentContainer: {
    padding: 16,
  },

  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 10,
  },

  bodyText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#6B7280',
    marginBottom: 18,
  },

  button: {
    backgroundColor: '#2563EB',
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
