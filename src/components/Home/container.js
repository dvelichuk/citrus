import { connect } from 'react-redux';

import Component from './component';
import { getListAsync } from '../../store/actions';

function mapStateToProps(state, props) {
  return {
    data: state.AppData.data,
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
