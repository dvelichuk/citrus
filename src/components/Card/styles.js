import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e1e7e9',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginBottom: 8,
    shadowOpacity: 0.65,
    shadowRadius: 4,
    shadowColor: '#cacaca',
    elevation: 5,
    shadowOffset: { height: 4, width: 0 },
  },
  imgBox: {
    padding: 8,
    width: '25%',
  },
  textTopBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textBox: {
    padding: 8,
    width: '70%',
  },
  userName: {
    width: '50%',
  },
  messageButton: {
    borderRadius: 5,
    padding: 3,
    borderWidth: 1,
    borderColor: '#e1e7e9',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  messageButtonText: {
    fontSize: 11,
    paddingHorizontal: 5,
    lineHeight: 14,
  },
  roundAvatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 80,
  },
  textBottomBox: {
    paddingTop: 10,
  },
  companyBoxText: {
    color: '#abb4b5',
    fontSize: 12,
  },
  descBox: {
    paddingVertical: 10,
  },
  dateBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dateBoxText: {
    color: '#abb4b5',
    fontSize: 12,
    paddingLeft: 5,
  },
});
