import QRCode from "react-native-qrcode-svg";
import { Image, View, Text } from "react-native";
import Button from "../Button/Button";
import { AppTexts } from "../../assets/strings";
import theme from "../../styles/theme";

type QRCodeProps = {
  value: any;
  onClose: () => void;
};

const CustomQRCode = ({ value, onClose }: QRCodeProps) => {
  let logoEasy4U = require("../../assets/img/adaptive-icon.svg");

  return (
    <View style={{ justifyContent: "center", alignItems: "center", gap: 10 }}>
      <QRCode
        value={JSON.stringify(value)}
        logo={logoEasy4U}
        logoSize={100}
        size={250}
      />
      <Button
        text={AppTexts.Close}
        fontFamily={theme.FONTS.Popp700}
        background={theme.COLORS.OrangeFF6C44}
        width={150}
        height={30}
        borderRadius={48}
        fontSize={14}
        onPress={onClose}
      />
    </View>
  );
};

export default CustomQRCode;
