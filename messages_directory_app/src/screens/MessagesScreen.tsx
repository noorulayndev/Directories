import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../types/navigation';
import { messageDirectories, Message } from '../data/mockData';

type MessagesScreenProps = NativeStackScreenProps<RootStackParamList, 'Messages'>;

const getAvatarColor = (name: string): string => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

export default function MessagesScreen({ route, navigation }: MessagesScreenProps) {
  const { directoryId } = route.params;
  const directory = messageDirectories.find(dir => dir.id === directoryId);

  useLayoutEffect(() => {
    if (directory) {
      navigation.setOptions({
        title: `${directory.name} Messages`,
      });
    }
  }, [navigation, directory]);

  if (!directory) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.errorContainer}>
          <Ionicons name="folder-open-outline" size={64} color="#CCCCCC" />
          <Text style={styles.errorText}>Directory not found</Text>
          <Text style={styles.errorSubtext}>Please go back and try again</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (directory.messages.length === 0) {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <View style={styles.emptyContainer}>
          <Ionicons name="mail-outline" size={64} color="#CCCCCC" />
          <Text style={styles.emptyText}>No messages found</Text>
          <Text style={styles.emptySubtext}>No messages found in this directory.</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleMessagePress = (message: Message) => {
    console.log('Message pressed:', message.subject);
  };

  const renderAvatar = (name: string) => {
    const initial = name.charAt(0).toUpperCase();
    const backgroundColor = getAvatarColor(name);

    return (
      <View style={[styles.avatar, { backgroundColor }]}>
        <Text style={styles.avatarText}>{initial}</Text>
      </View>
    );
  };

  const renderMessageItem = ({ item }: { item: Message }) => (
    <TouchableOpacity
      style={styles.messageCard}
      onPress={() => handleMessagePress(item)}
      activeOpacity={0.8}
    >
      <View style={styles.messageContent}>
        <View style={styles.leftColumn}>
          {renderAvatar(item.sender)}
        </View>

        <View style={styles.centerColumn}>
          <View style={styles.messageHeader}>
            <Text style={styles.senderName}>{item.sender}</Text>
            <Text style={styles.timestamp}>{item.timestamp}</Text>
          </View>
          <Text style={styles.subject}>{item.subject}</Text>
          <Text style={styles.body} numberOfLines={3}>
            {item.body}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItemSeparator = () => <View style={styles.separator} />;

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <FlatList
        data={directory.messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={renderItemSeparator}
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
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  messageCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  messageContent: {
    flexDirection: 'row',
  },
  leftColumn: {
    marginRight: 12,
  },
  centerColumn: {
    flex: 1,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  senderName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
    flex: 1,
  },
  timestamp: {
    fontSize: 12,
    color: '#888888',
    marginLeft: 8,
  },
  subject: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C2C2C',
    marginBottom: 6,
    lineHeight: 20,
  },
  body: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  separator: {
    height: 12,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  errorText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666666',
    marginTop: 16,
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666666',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
  },
});