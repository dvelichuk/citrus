import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  detailContainer: {
    width: width,
  },
  topUserImageBox: {
    width: width,
    height: width / 1.56, // aspect ratio
    overflow: 'hidden',
    position: 'relative',
  },
  backImageBox: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
  },
  imageInBg: {
    width: '200%',
    height: '200%',
  },
  userBox: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    top: 0,
  },
  roundAvatar: {
    width: 80,
    height: 80,
    borderRadius: 32,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 80,
  },
  userName: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  chatButtonBox: {
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  chatButton: {
    paddingVertical: 10,
    backgroundColor: '#1cc8bc',
    borderRadius: 32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatButtonText: {
    fontSize: 15,
    color: '#ffffff',
    paddingLeft: 10,
  },
  contenBox: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    alignItems: 'center',
  },
  listBox: {
    width: '90%',
    paddingVertical: 10,
  },

  textBoxWithLabel: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#f6f6f8',
  },
  label: {
    color: '#d6d8df',
    fontSize: 14,
  },
  labelBox: {
    marginBottom: 20,
  },
  link: {
    color: '#1cc8bc',
    fontSize: 16,
  },
  textInList: {
    fontSize: 16,
  },
  backBox: {
    position: 'absolute',
    top: 30,
    left: 16,
    zIndex: 3,
  },
  backButton: {
  },


});
