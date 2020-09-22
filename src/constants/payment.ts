import BNILogo from "../images/bank/bni-logo.png";
import BCALogo from "../images/bank/bca-logo.png";
import BRILogo from "../images/bank/bri-logo.png";
import BTNLogo from "../images/bank/btn-logo.png";
import BTPNLogo from "../images/bank/btpn-logo.png";
import permataLogo from "../images/bank/permata-logo.png";
import paninLogo from "../images/bank/panin-logo.png";
import mandiriLogo from "../images/bank/mandiri-logo.png";

import akulakuLogo from "../images/paymentService/akulaku-logo.png";
import alfamartLogo from "../images/paymentService/alfamart-logo.png";
import bcaVALogo from "../images/paymentService/bca-logo.png";
import binPromoLogo from "../images/paymentService/bin-promo-logo.png";
import bniVALogo from "../images/paymentService/bni-logo.png";
import creditCardLogo from "../images/paymentService/credit-card-logo.png";
import creditInstallmentLogo from "../images/paymentService/credit-installment-logo.png";
import dokuLogo from "../images/paymentService/doku-logo.png";
import gopayLogo from "../images/paymentService/gopay-logo.png";
import indomaretLogo from "../images/paymentService/indomaret-logo.png";
import jcbLogo from "../images/paymentService/jcb-logo.png";
import lainnyaLogo from "../images/paymentService/lainnya-logo.png";
import linePayLogo from "../images/paymentService/line-pay-logo.png";
import mandiriVALogo from "../images/paymentService/mandiri-logo.png";
import masterCardLogo from "../images/paymentService/mastercard-logo.png";
import midtransLogo from "../images/paymentService/midtrans-logo.png";
import paypalLogo from "../images/paymentService/paypal-logo.png";
import permataVALogo from "../images/paymentService/permata-logo.png";
import visaLogo from "../images/paymentService/visa-logo.png";

export const BANK_LOGO: {
  [key: string]: string;
} = {
  MANDIRI: mandiriLogo,
  BCA: BCALogo,
  BNI: BNILogo,
  BRI: BRILogo,
  PANIN: paninLogo,
  BTPN: BTPNLogo,
  PERMATA: permataLogo,
  BTN: BTNLogo,
};

export enum PaymentGatewayType {
  MIDTRANS = "midtranssnap",
  DOKU = "doku",
  PAYPAL = "paypal",
  CREDIT_CARD = "cc",
  BIN_PROMO = "bin",
  BCA_VA = "bca",
  MANDIRI_BILL = "mandiri",
  BNI_VA = "bni",
  LINE_PAY = "linePay",
  INDOMARET = "indomaret",
  GOPAY = "gopay",
  CREDIT_INSTALLMENT = "creditInstallment",
  ALFAMART = "alfamart",
  AKULAKU = "akulaku",
  VISA = "visa",
  MASTER_CARD = "masterCard",
  JCB = "jcb",
  PERMATA_VA = "permata",
  LAINNYA = "other",
}

export const PAYMENT_GATEWAY_LOGO: {
  [key: string]: string;
} = {};
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.MIDTRANS] = midtransLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.DOKU] = dokuLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.PAYPAL] = paypalLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.CREDIT_CARD] = creditCardLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.BIN_PROMO] = binPromoLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.BCA_VA] = bcaVALogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.MANDIRI_BILL] = mandiriVALogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.BNI_VA] = bniVALogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.LINE_PAY] = linePayLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.INDOMARET] = indomaretLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.GOPAY] = gopayLogo;
PAYMENT_GATEWAY_LOGO[
  PaymentGatewayType.CREDIT_INSTALLMENT
] = creditInstallmentLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.ALFAMART] = alfamartLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.AKULAKU] = akulakuLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.VISA] = visaLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.MASTER_CARD] = masterCardLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.JCB] = jcbLogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.PERMATA_VA] = permataVALogo;
PAYMENT_GATEWAY_LOGO[PaymentGatewayType.LAINNYA] = lainnyaLogo;
