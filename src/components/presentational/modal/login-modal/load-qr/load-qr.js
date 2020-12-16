import React, { PureComponent } from "react";
import { get } from "lodash";
import { CircularProgress } from "@material-ui/core";
import { isSafari } from "react-device-detect";
import { URL } from "../../../../../api";
import { ModalType } from "../../../../../constant";
import "./load-qr.scss";
import qrIcon from "../../../../../assets/images/qr-scan.svg";

class LoadQR extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { qrCode: "" };
    this.loadQRCode();
  }
  loadQRCode = () => {
    const { setAuth, history, isContentDetailOpen, closeModal } = this.props;
    const source = new EventSource(URL.QRCODE_API());
    source.onmessage = event => {
      const response = JSON.parse(event.data);
      if (get(response, "data.token", "")) {
        setAuth(get(response, "data.user", {}));
        closeModal(ModalType.LOGIN);
        if (!isContentDetailOpen) {
          history.push("/");
        }
      }
      if (get(response, "data.fileBase64String", "")) {
        const b64Data = get(response, "data.fileBase64String", "");
        if (isSafari) {
          const b64toBlob = require("b64-to-blob");
          const blob = b64toBlob(b64Data, "image/png");
          const blobUrl = window.URL.createObjectURL(blob);
          this.setState({
            qrCode: blobUrl
          });
        } else
          this.setState({
            qrCode: `data:image/png;base64 ,${b64Data}`
          });
      } else {
        this.setState({ qrCode: null });
      }
    };
  };
  render() {
    const { qrCode } = this.state;
    return (
      <div className="withScan">
        <h3 className="scanTitle">Scan with tymoff app</h3>
        <div className="scanQr">{qrCode ? <img src={qrCode} width={200} height={200} alt="" /> : <CircularProgress color="secondary" />}</div>
        <div className="noAccountlink">
          <img src={qrIcon} alt="" style={{ width: 35 }} />
          {/* <img src={sendIcon} alt="sendIcon" class="send-icon" onClick={this.onCommentSubmit}/> */}

          {/* <img src={qrCode} alt="" style={{ width: 35 }} /> */}
          <div style={{ paddingLeft: 10, textAlign: "left" }}>Open tymoff app, go to setting and scan the code.</div>
        </div>
      </div>
    );
  }
}

export default LoadQR;
