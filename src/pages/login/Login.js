import React, { PureComponent } from "react";
import { LoginModal } from "../../components";
import { ModalType } from "../../constant";
class Login extends PureComponent {
  constructor(props) {
    super(props);
    const { openModal, modalRoute } = props;
    modalRoute();
    openModal(ModalType.LOGIN);
  }
  render() {
    return <LoginModal />;
  }
}

export default Login;
