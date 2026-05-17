export type RootStackParamList = {
  Directory: undefined;
  Messages: {
    directoryId: string;
  };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}