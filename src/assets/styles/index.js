import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  contactAvatar: {
    height: 48,
    width: 48,
    borderRadius: 48,
    marginRight: 20,
  },
  contactName: {
    fontSize: 17,
  },
  contactAvatarPlaceholder: {
    backgroundColor: '#E1E1E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactAvatarPlaceholderText: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputText: {
    borderWidth: 2,
    borderColor: '#E1E1E1',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 15,
  },
  button: {
    height: 45,
  },
});
