import { connect } from 'react-redux';

import Component from './component';
import { getListAsync, endReached } from '../../store/actions';

function mapStateToProps(state, props) {
  return {
    data: state.AppData.data,
    endReached: state.AppData.endReached,
  };
}

function mapDispatchToProps(dispatch, props) {
  const { navigation } = props;
  return {
    getListAsync: (skip) => {
      dispatch(getListAsync(skip));
    },
    navigateToRoute: (route) => {
      routingActions.navigate(navigation, route);
    },
    onEndReached: (end) => {
      dispatch(endReached(end));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
