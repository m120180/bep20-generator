<template>
    <div>
        <b-jumbotron text-variant="white"
                     header="Token Generator"
                     class="mb-0 wiretap-gradient"
                     fluid>
            <template #lead>
                Create your own Smart Contract without coding.
                <br>
                Token Generator is the easiest and fastest way to create your own token on the supported networks. No coding skills are required.
            </template>
            <hr class="my-5">
            <p>
                <b-button to="/create-token/" size="lg" variant="success" class="my-2 py-3 px-5 text-uppercase">
                    Create your Token
                </b-button>
                <a class="btn btn-lg btn-outline-light py-3 px-5 text-uppercase"
                   href="#pricing"
                   v-smooth-scroll="{ duration: 1000, offset: 0, updateHistory: false }">
                    Pricing
                </a>
            </p>
        </b-jumbotron>
        <b-row id="how-it-works" class="mx-0">
            <b-col lg="8" offset-lg="2" class="mb-3">
                <h2 class="p-5 font-weight-lighter text-center text-dark">How it works</h2>
                <h4 class="text-center font-weight-light">
                    Create a token in less than a minute.
                </h4>
                <p class="text-center font-weight-light">
                    Easily deploy Smart Contract for a Standard, Capped, Mintable, Burnable Token.
                    <br>
                    Token Generator is the easiest and fastest way to create your own token on the supported networks. No coding skills are required.
                </p>
                <ui--how-it-works></ui--how-it-works>
            </b-col>
        </b-row>
        <b-row id="pricing" class="aqua-gradient mx-0">
            <b-col lg="12" xl="10" offset-xl="1" class="py-5">
                <h2 class="pt-5 font-weight-lighter text-center text-light">Pricing</h2>
              <b-form-group
                  label-for="network" class="d-flex flex-column align-items-center">
                <b-form-select id="network"
                               v-model="currentNetwork"
                               @input="onChangeNetwork">
                  <option v-for="(n, k) in network.list" :value="k">{{ n.name }}
                  </option>
                </b-form-select>
              </b-form-group>
                <ui--pricing-table :fees="feesByNetwork" :network="currentNetwork" :currencyCode="chainCurrency"/>
            </b-col>
        </b-row>
        <b-row class="bg-dark text-white mx-0">
            <b-col lg="10" offset-lg="1" class="mb-3 text-center">
                <h2 class="pt-5 mb-4 font-weight-lighter text-light">Ready to deploy your token?</h2>
                <p class="font-weight-light">
                    Try building your token in less than a minute. You can try on Test Network before to go live.
                </p>
                <b-button to="/create-token/" size="lg" variant="success" class="my-5 py-3 px-5 text-uppercase">
                    Create Your Token
                </b-button>
            </b-col>
        </b-row>
        <b-row id="features" class="peach-gradient mx-0">
            <b-col lg="12" xl="8" offset-xl="2" class="py-5">
                <h2 class="p-5 font-weight-lighter text-center text-light">Features</h2>
                <ui--features></ui--features>
            </b-col>
        </b-row>
<!--        <b-row class="bg-dark text-white mx-0">-->
<!--            <b-col lg="10" offset-lg="1" class="mb-3 text-center">-->
<!--                <h2 class="pt-5 mb-4 font-weight-lighter text-light">Need a custom development?</h2>-->
<!--                <p class="font-weight-light">-->
<!--                    Open to getting in touch with awesome people and projects.-->
<!--                </p>-->

<!--                <b-button v-b-modal.modal-contact-->
<!--                          size="lg"-->
<!--                          variant="outline-warning"-->
<!--                          class="my-5 py-3 px-5 text-uppercase">-->
<!--                    Let us know-->
<!--                </b-button>-->
<!--                <b-modal id="modal-contact"-->
<!--                         size="lg"-->
<!--                         centered-->
<!--                         hide-footer>-->
<!--                    <b-embed-->
<!--                            type="iframe"-->
<!--                            aspect="16by9"-->
<!--                            src="https://digiswap-core.github.io/bep20-generator/"-->
<!--                            allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"-->
<!--                            allowfullscreen-->
<!--                    ></b-embed>-->
<!--                </b-modal>-->
<!--            </b-col>-->
<!--        </b-row>-->
        <b-row id="faq" class="purple-gradient mx-0">
            <b-col lg="12" xl="8" offset-xl="2" class="py-5">
                <h2 class="p-5 font-weight-lighter text-center text-light">FAQ</h2>
                <ui--faq></ui--faq>
            </b-col>
        </b-row>
        <b-row class="bg-light text-dark mx-0">
            <b-col lg="10" offset-lg="1" class="mb-3 text-center">
                <h2 class="pt-5 mb-4 font-weight-lighter text-dark">Ready to deploy your token?</h2>
                <p class="font-weight-light">
                    Try building your token in less than a minute. You can try on Test Network before to go live.
                </p>
                <b-button to="/create-token/" size="lg" variant="success" class="my-5 py-3 px-5 text-uppercase">
                    Create Your Token
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  import dapp from "../mixins/dapp";

  export default {
    name: 'Home',
    mixins: [dapp],
    data() {
      return {
        currentNetwork: '',
      }
    },
    async mounted() {
      this.currentNetwork = this.network.default;
    },
    methods: {
      async onChangeNetwork() {
        await this.initWeb3(this.currentNetwork)
      },
    },
  };
</script>
