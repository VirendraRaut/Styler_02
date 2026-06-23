import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function FancyCard() {
  return (
    // ScrollView ensures the page is scrollable if the cards exceed the screen height
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.headingText}>Trending Places</Text>

      {/* Card 1 */}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000',
          }}
          style={styles.cardImage}
          resizeMode="cover" // Ensures the image fills the space beautifully without stretching
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Lake Eibsee</Text>
          <Text style={styles.cardLabel}>📍 Bavaria, Germany</Text>
          <Text style={styles.cardDescription} numberOfLines={3}>
            A stunning glacial lake located at the foot of the Zugspitze
            mountain. Known for its crystal-clear turquoise water and
            breathtaking alpine scenery.
          </Text>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.cardFooter}>Explore Destination</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1000',
          }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Königssee</Text>
          <Text style={styles.cardLabel}>📍 Berchtesgaden, Germany</Text>
          <Text style={styles.cardDescription} numberOfLines={3}>
            Often cited as Germany's cleanest lake, its emerald-green waters are
            surrounded by steep mountain walls, creating a fjord-like
            atmosphere.
          </Text>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.cardFooter}>Explore Destination</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Soft, modern off-white background
  },
  contentContainer: {
    paddingBottom: 30, // Adds space at the bottom so the last card isn't cut off
  },
  headingText: {
    color: '#1A1A1A',
    fontSize: 26,
    fontWeight: '700',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
    letterSpacing: -0.5, // Tighter letter spacing for a modern headline look
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    // iOS Shadows
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    // Android Shadow
    elevation: 6,
    overflow: 'hidden', // Crucial: keeps the image corners rounded inside the card
  },
  cardImage: {
    width: '100%',
    height: 180,
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    color: '#1A1A1A',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#6B7280', // Subtle gray for secondary information
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
  },
  cardDescription: {
    color: '#4B5563',
    fontSize: 14,
    lineHeight: 22, // Increased line height for better readability
    marginBottom: 16,
  },
  footerButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#EFF6FF', // Very light blue background for the button
    borderRadius: 8,
    alignSelf: 'flex-start', // Makes the button only as wide as its text
  },
  cardFooter: {
    color: '#2563EB', // Professional, vibrant blue
    fontSize: 14,
    fontWeight: '600',
  },
});
