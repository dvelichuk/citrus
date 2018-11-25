import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, RefreshControl, Text, Dimensions, ActivityIndicator } from 'react-native';
import Card from '../Card';
import styles from './styles';


class Home extends Component {
  componentDidMount() {
    const { getListAsync } = this.props;
    getListAsync(0);
  }

  renderItem = ({ item, index }) => {
    const { navigateToRoute, navigation } = this.props;
    return (
      <Card {...item}
        {...navigation}
        />
    );
  };

  renderFooter = () => {
    const { data, onEndReached } = this.props;
    const dataLength = data ? data.length : 0;
    if (dataLength >= 300) {
      onEndReached(true);
    }
    else {
      onEndReached(false);
    };
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator
          animating={true}
          size={0}
        />
      </View>
    );
  };

  onEndReached = () => {
    const { data, getListAsync } = this.props;
    const dataLength = data ? data.length : 0;
    if (dataLength <= 275) {
      getListAsync(dataLength);
    }
  }

  render() {
    const { data, endReached } = this.props;
    console.log('endReached', endReached)
    const window = Dimensions.get('window');
    const threshold = window.height * 2;
    if (!data) { return null };
    return (
      <View style={styles.mainContainer}>
          <FlatList
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="always"
            keyExtractor={(item, index) => index.toString()}
            enableEmptySections={true}
            data={data}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={50}
            removeClippedSubviews={false}
            renderItem={this.renderItem}
            ListFooterComponent={this.renderFooter}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={this.onRefresh}
                colors={['#cacaca', '#bbbbbb']}
                progressBackgroundColor={'#ffffff'}
              />
            }
          />
      </View>
    );
  }
}

Home.propTypes = {
  navToRoute: PropTypes.func,
  items: PropTypes.array,

};

Home.defaultProps = {
  totalCount: null,
  hasMoreItems: false,
};

export default Home;
