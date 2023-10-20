import QRCode from 'react-native-qrcode-svg';
type QRCodeProps = {
    value: any
}

const CustomQRCode = ({value}: QRCodeProps) => {
    let logoEasy4U = require('../../assets/img/adaptive-icon.svg');
    
    return (
      <QRCode
        value={JSON.stringify(value)}
        logo={logoEasy4U}
        logoSize={30}
      />
    );
}

export default CustomQRCode;
