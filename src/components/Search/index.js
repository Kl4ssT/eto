import { connect } from 'react-redux';
import Search, { mapStateToProps, mapDispatchToProps } from './Search.jsx';

export default connect(mapStateToProps, mapDispatchToProps)(Search);