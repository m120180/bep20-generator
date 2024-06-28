import config from '../config';
import utils from './utils';

import Hello from '../abi/token/HelloBEP20.json';
import Simple from '../abi/token/SimpleBEP20.json';
import Standard from '../abi/token/StandardBEP20.json';
import Burnable from '../abi/token/BurnableBEP20.json';
import Mintable from '../abi/token/MintableBEP20.json';
import Common from '../abi/token/CommonBEP20.json';
import Unlimited from '../abi/token/UnlimitedBEP20.json';
import Amazing from '../abi/token/AmazingBEP20.json';

import ServiceReceiverArtifact from '../abi/service/ServiceReceiver.json';
import {networks} from "../constants/networks";
import {networkIds, networkNames} from "../constants/networkIds";

export default {
  mixins: [
    utils,
  ],
  data () {
    return {
      web3: null,
      web3Provider: null,
      metamask: {
        installed: false,
        netId: null,
      },
      network: {
        default: config.defaultNetwork,
        current: null,
        map: {
          [networkIds.BitciMain]: networkNames.BitciMain,
          [networkIds.BitciTest]: networkNames.BitciTest,
        },
        list: config.isProd ? this.filterNetworks(networks) :networks,
      },
      serviceReceiver: config.serviceReceiver,
      tokenList: {
        Hello,
        Simple,
        Standard,
        Burnable,
        Mintable,
        Common,
        Unlimited,
        Amazing,
      },
      contracts: {
        token: null,
        service: null,
      },
    };
  },
  computed: {
    feesByNetwork() {
      return this.network.current?.fees;
    },
    chainCurrency() {
      return this.network.current?.mainCurrency
    }
  },
  methods: {
    async initWeb3 (network, checkWeb3) {
      if (!Object.prototype.hasOwnProperty.call(this.network.list, network)) {
        throw new Error(
          `Failed initializing network ${network}. Allowed values are ${Object.keys(this.network.list)}.`,
        );
      }

      if (checkWeb3 && (typeof window.ethereum !== 'undefined')) {
        console.log('injected bsc'); // eslint-disable-line no-console
        this.web3Provider = window.ethereum;

        this.web3 = new Web3(this.web3Provider);
        this.metamask.installed = this.web3Provider.isMetaMask;

        const netId = await this.promisify(this.web3.eth.getChainId);
        this.metamask.netId = netId;

        if (netId !== this.network.list[network].id) {
          this.network.current = this.network.list[this.network.map[netId]];
          await this.initWeb3(network, false);
        }
      } else {
        console.log('provided bsc'); // eslint-disable-line no-console
        this.network.current = this.network.list[network];
        this.web3Provider = new Web3.providers.HttpProvider(this.network.list[network].web3Provider);
        this.web3 = new Web3(this.web3Provider);
      }
    },
    initService (network) {
      this.contracts.service = new this.web3.eth.Contract(
        ServiceReceiverArtifact.abi,
        this.serviceReceiver[network],
      );
    },
    initToken (tokenType) {
      this.contracts.token = this.tokenList[tokenType];
      this.contracts.token.stringifiedAbi = JSON.stringify(this.contracts.token.abi);
    },
  },
};
