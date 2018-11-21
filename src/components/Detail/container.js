import { connect } from 'react-redux';

import Component from './component';

function mapStateToProps(state) {
  return {
    props: !!state.nav.routes[1] ? state.nav.routes[1].params : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
