import BukalapakIcon from "../images/salesChannel/bklp-logo.png";
import BlibliIcon from "../images/salesChannel/blib-logo.png";
import EleveniaIcon from "../images/salesChannel/elvn-logo.png";
import JDIcon from "../images/salesChannel/jdid-logo.png";
import LazadaIcon from "../images/salesChannel/lzda-logo.png";
import ShopeeIcon from "../images/salesChannel/shpe-logo.png";
import SircloIcon from "../images/salesChannel/srcl-logo.png";
import TokopediaIcon from "../images/salesChannel/tkpd-logo.png";
import ZaloraIcon from "../images/salesChannel/zlra-logo.png";
import ZilingoIcon from "../images/salesChannel/zlgo-logo.png";

export enum SalesChannelTypes {
  BLIBLI = "blib",
  BUKALAPAK = "bklp",
  ELEVENIA = "elvn",
  JDID = "jdid",
  LAZADA = "lzda",
  SHOPEE = "shpee",
  SIRCLO_STORE = "srcl",
  TOKOPEDIA = "tkpd",
  ZALORA = "zlra",
  ZILINGO = "zlgo",
}

// translated channelId
export const SALESCHANNEL: {
  [key: string]: { name: string; icon: string; guideLink: string };
} = {};
SALESCHANNEL[SalesChannelTypes.BLIBLI] = {
  name: "Blibli.com",
  icon: BlibliIcon,
  guideLink:
    "https://sirclo.zendesk.com/hc/en-us/articles/360000394186-Integrasi-dengan-Blibli",
};
SALESCHANNEL[SalesChannelTypes.BUKALAPAK] = {
  name: "Bukalapak",
  icon: BukalapakIcon,
  guideLink:
    "https://sirclo.zendesk.com/hc/en-us/articles/360000394723-Integrasi-dengan-Bukalapak",
};
SALESCHANNEL[SalesChannelTypes.ELEVENIA] = {
  name: "Elevenia",
  icon: EleveniaIcon,
  guideLink:
    "https://sirclo.zendesk.com/hc/en-us/articles/115004765426-Integrasi-dengan-Elevenia",
};
SALESCHANNEL[SalesChannelTypes.JDID] = {
  name: "JD.ID",
  icon: JDIcon,
  guideLink:
    "https://sirclo.zendesk.com/hc/en-us/articles/900000779303-Integrasi-dengan-JD-ID",
};
SALESCHANNEL[SalesChannelTypes.LAZADA] = {
  name: "Lazada",
  icon: LazadaIcon,
  guideLink:
    "https://sirclo.zendesk.com/hc/en-us/articles/115004746283-Integrasi-dengan-Lazada",
};
SALESCHANNEL[SalesChannelTypes.SHOPEE] = {
  name: "Shopee",
  icon: ShopeeIcon,
  guideLink:
    "https://sirclo.zendesk.com/hc/en-us/articles/115004746323-Integrasi-dengan-Shopee",
};
SALESCHANNEL[SalesChannelTypes.SIRCLO_STORE] = {
  name: "SIRCLO",
  icon: SircloIcon,
  guideLink:
    "https://sirclo.zendesk.com/hc/en-us/articles/360014547891-Integrasi-dengan-SIRCLO-Store",
};
SALESCHANNEL[SalesChannelTypes.TOKOPEDIA] = {
  name: "Tokopedia",
  icon: TokopediaIcon,
  guideLink: "",
};
SALESCHANNEL[SalesChannelTypes.ZALORA] = {
  name: "Zalora",
  icon: ZaloraIcon,
  guideLink:
    "https://sirclo.zendesk.com/hc/en-us/articles/360023569912-Integrasi-dengan-Zalora",
};
SALESCHANNEL[SalesChannelTypes.ZILINGO] = {
  name: "Zilingo",
  icon: ZilingoIcon,
  guideLink:
    "https://sirclo.zendesk.com/hc/en-us/articles/360025445392-Integrasi-dengan-Zilinggo",
};
