import { connect } from 'react-redux';
import UserList, { mapStateToProps } from './UserList.jsx';

export default connect(mapStateToProps)(UserList);