<template>
    <div class="features-table">
        <b-row class="mb-5">
            <b-col lg="10" offset-lg="1">
                <h4 class="text-center font-weight-light text-light">
                    You will be able to choose between several features.
                </h4>
                <p class="text-center font-weight-light text-light">
                    What are your Token requirements?
                </p>
            </b-col>
        </b-row>
        <b-card-group deck>
            <b-card class="mb-3" sub-title="Detailed">
                <b-card-text>
                  Your token will be fully compatible with the network definition you create and
                  will be compatible with any wallet using the same network anywhere in the world.
                  It will have a name, a symbol and a decimal amount.
                </b-card-text>
            </b-card>
            <b-card class="mb-3" sub-title="Capped">
                <b-card-text>
                    You won't be able to generate more tokens than the defined token cap.
                    This ensure people that you will not generate more tokens than declared.
                </b-card-text>
            </b-card>
            <b-card class="mb-3" sub-title="Mintable">
                <b-card-text>
                    You will be able to generate tokens by minting them.
                    Only token owner will be able to mint.
                    You can also disable minting if you don’t want to generate tokens anymore.
                </b-card-text>
            </b-card>
        </b-card-group>
        <b-card-group deck>
            <b-card class="mb-3" sub-title="Burnable">
                <b-card-text>
                    Your Token can be burnt.
                    It means that you can choose to reduce the circulating supply by destroying some of your
                    tokens.
                </b-card-text>
            </b-card>
            <b-card class="mb-3" sub-title="Ownable Access">
                <b-card-text>
                    Your Token will have an Owner.
                    Token owner will be able to mint new tokens or to call the finish minting function.
                </b-card-text>
            </b-card>
            <b-card class="mb-3" sub-title="Role Based Access">
                <b-card-text>
                    Your Token will have Roles.
                    You can add or remove ADMIN or MINTER role to addresses. Your token will be Ownable too.
                </b-card-text>
            </b-card>
        </b-card-group>
        <b-card-group deck>
            <b-card class="mb-3" sub-title="Operable Token (ERC1363)">
                <b-card-text>
                  The Operable Token is a compatible Token that can make a
                  callback on the receiver contract to notify token transfers or token approvals.
                </b-card-text>
            </b-card>
            <b-card class="mb-3" sub-title="Token Recover">
                <b-card-text>
                    There are lots of tokens lost forever into Smart Contracts.
                  It allows the contract owner to recover an token sent into the contract for error.
                </b-card-text>
            </b-card>
        </b-card-group>
        <b-row>
            <b-col lg="12">
                <b-alert class="mb-3" variant="warning" show>
                    <h4 class="alert-heading">Copyright</h4>
                    <p>
                        Deploying Hello or Simple contract for FREE, a link pointing to this page will be added to
                        your contract.
                        Your token will be fully compatible with the standard of the network you are creating and you will be able to use it seamlessly.
                        It is only a little credit to advertis Token Generator.
                        You can remove it by choosing an advanced Token type.
                    </p>
                </b-alert>
            </b-col>
            <b-col lg="6" offset-lg="3" class="mt-4">
                <p class="text-center text-light">
                    Learn more in
                    <a href="#faq"
                       class="text-reset"
                       v-smooth-scroll="{ duration: 1000, offset: 0, updateHistory: false }">
                        Frequently Asked Questions
                    </a>
                </p>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  export default {
    name: 'Features',
  };
</script>
