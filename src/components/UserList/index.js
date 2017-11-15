import { connect } from 'react-redux';
import UserList, { mapStateToProps, mapDispatchToProps } from './UserList.jsx';

export default connect(mapStateToProps, mapDispatchToProps)(UserList);