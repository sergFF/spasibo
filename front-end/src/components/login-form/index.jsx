import LoginForm from './login-form';
import getUser from '../../actions/login-action';

const mapStateToProps = store => ({
  user: store.user
})

const mapDispatchToProps = dispatch => {
  getUser: (login, password) => dispatch(getUser(login, password))
}
