import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types/navigation';
import { messageDirectories, MessageDirectory } from '../data/mockData';

type DirectoryScreenProps = NativeStackScreenProps<RootStackParamList, 'Directory'>;

const getCardColor = (directoryId: string): string => {
  const colors = {
    home: '#FFF3E0',
    love: '#FCE4EC',
    family: '#F3E5F5',
    friends: '#E8F5E8',
    school: '#E3F2FD'
  };
  return colors[directoryId as keyof typeof colors] || '#F5F5F5';
};

const getAccentColor = (directoryId: string): string => {
  const colors = {
    home: '#FF9800',
    love: '#E91E63',
    family: '#9C27B0',
    friends: '#4CAF50',
    school: '#2196F3'
  };
  return colors[directoryId as keyof typeof colors] || '#757575';
};

export default function DirectoryScreen({ navigation }: DirectoryScreenProps) {
  const handleDirectoryPress = (directory: MessageDirectory) => {
    navigation.navigate('Messages', { directoryId: directory.id });
  };

  const renderDirectoryItem = ({ item }: { item: MessageDirectory }) => (
    <TouchableOpacity
      style={[styles.directoryCard, { backgroundColor: getCardColor(item.id) }]}
      onPress={() => handleDirectoryPress(item)}
      activeOpacity={0.8}
    >
      <View style={styles.cardContent}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={item.icon as any}
            size={32}
            color={getAccentColor(item.id)}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.directoryName}>{item.name}</Text>
          <Text style={styles.messageCount}>
            {item.messages.length} message{item.messages.length !== 1 ? 's' : ''}
          </Text>
        </View>

        <View style={styles.chevronContainer}>
          <Ionicons
            name="chevron-forward"
            size={20}
            color={getAccentColor(item.id)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>My Messages</Text>
        <Text style={styles.subtitle}>Stay connected with the people you care about</Text>
      </View>

      <FlatList
        data={messageDirectories}
        renderItem={renderDirectoryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    lineHeight: 22,
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  directoryCard: {
    marginBottom: 16,
    borderRadius: 16,
    padding: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  directoryName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  messageCount: {
    fontSize: 14,
    color: '#666666',
  },
  chevronContainer: {
    marginLeft: 8,
  },
});