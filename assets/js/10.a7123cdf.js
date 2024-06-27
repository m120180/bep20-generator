(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{267:function(e,t,a){"use strict";a.r(t);var n={name:"Faq"},o=a(16),r=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"faq-table",attrs:{itemscope:"",itemtype:"https://schema.org/FAQPage"}},[t("b-row",[t("b-col",[t("b-card",{staticClass:"mb-4",attrs:{"bg-variant":"light"}},[t("h3",{staticClass:"font-weight-light"},[e._v("Token Generator")]),e._v(" "),t("p",{staticClass:"font-weight-light"},[e._v("\n                        Create your own Smart Contract without coding. Token Generator is the easiest and fastest way to create your own token on the supported networks. No coding skills are required.\n                    ")])])],1)],1),e._v(" "),t("b-row",[t("b-col",[t("h5",{staticClass:"font-weight-light text-white"},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#about-token-features"},on:{click:function(e){e.preventDefault()}}},[t("b-icon-caret-down-fill"),e._v(" Token Features\n                    ")],1)]),e._v(" "),t("b-collapse",{staticClass:"mt-4",attrs:{id:"about-token-features",visible:"",accordion:"main-accordion"}},[t("div",{staticClass:"accordion mb-3",attrs:{role:"tablist"}},[t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#difference-between-fixed-capped"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        What's the difference between 100k, Fixed, Capped and Unlimited Supply?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"difference-between-fixed-capped",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[t("b",[e._v("100k")]),t("br"),e._v("\n                                        Your token supply will be 100.000.\n                                        The entire token supply will be generated during deploy and sent to Token Owner\n                                        wallet. You can't increase or reduce supply later."),t("br"),t("br"),e._v(" "),t("b",[e._v("Fixed Supply")]),t("br"),e._v("\n                                        The entire token supply will be generated during deploy and sent to Token Owner\n                                        wallet. You can't increase or reduce supply later."),t("br"),t("br"),e._v(" "),t("b",[e._v("Capped Supply")]),t("br"),e._v("\n                                        You can define an initial supply to sent to Token Owner's wallet. You can\n                                        increase or reduce supply later by minting or burning tokens (if allowed).\n                                        You won't be able to generate more tokens than the defined supply cap."),t("br"),t("br"),e._v(" "),t("b",[e._v("Unlimited Supply")]),t("br"),e._v("\n                                        You can define an initial supply to sent to Token Owner's wallet. You can\n                                        increase or reduce supply later by minting or burning tokens (if allowed).\n                                        You will be able to generate unlimited tokens without an upper limit.\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#difference-between-access"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        What's the difference between None, Ownable and Role Based Access?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"difference-between-access",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[t("b",[e._v("None")]),t("br"),e._v("\n                                        Your Token doesn't need an access type because of there are not actions that\n                                        needs privileges."),t("br"),t("br"),e._v(" "),t("b",[e._v("Ownable")]),t("br"),e._v("\n                                        Your Token will have an Owner. The account you use to deploy your Token will be\n                                        owner by default and will be able to mint new tokens or call the finish minting\n                                        function. You can transfer token ownership to addresses or Smart Contract.\n                                        "),t("br"),t("br"),e._v(" "),t("b",[e._v("Role Based")]),t("br"),e._v('\n                                        Your Token will have Roles. Accounts with "MINTER" role will be able to mint new\n                                        tokens. Accounts with "ADMIN" role will be able to add or remove roles to\n                                        minters or other admins. The account you use to deploy your Token will be ADMIN\n                                        and MINTER by default. In addition your Token will have the Ownable behaviour\n                                        too.\n                                    ')])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#who-can-mint-burn"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Who can mint or burn tokens?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"who-can-mint-burn",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[t("b",[e._v("Mint")]),t("br"),e._v("\n                                        It depends on your Token Access Type. If you choose Ownable Access only Token\n                                        Owner will be able to mint new tokens. If you choose Role Based Access only\n                                        addresses with MINTER role will be able to mint new tokens.\n                                        In both cases, if you choose a Capped supply you won't be able to mint more\n                                        tokens than the defined cap. By choosing Unlimited supply instead, you will be\n                                        able to generate unlimited tokens."),t("br"),t("br"),e._v(" "),t("b",[e._v("Burn")]),t("br"),e._v("\n                                        Everyone will be able to burn tokens he held. A third party can burn tokens from\n                                        other addresses only after an approval. Nobody, not even the Token Owner,\n                                        will be able to burn tokens from other addresses without approval.\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#what-is-operable"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        What is Operable Token?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"what-is-operable",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                        There is no way to execute code after a transfer or approval (i.e.\n                                        making a payment), so to make an action it is required to send another\n                                        transaction and pay GAS twice. Operable Token makes token payments easier and\n                                        working without the use of any other listener. It allows to make a callback\n                                        after a transfer or approval in a single transaction."),t("br"),e._v("\n                                        There are many proposed uses of Smart Contracts that can accept payments."),t("br"),e._v("\n                                        Examples could be:\n                                        "),t("ul",[t("li",[e._v("\n                                                to create a token payable crowdsale\n                                            ")]),e._v(" "),t("li",[e._v("\n                                                selling services for tokens\n                                            ")]),e._v(" "),t("li",[e._v("\n                                                paying invoices\n                                            ")]),e._v(" "),t("li",[e._v("\n                                                making subscriptions\n                                            ")])])])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#what-is-token-recover"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        What is Token Recover?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"what-is-token-recover",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                        There are lots of tokens lost forever into Smart Contracts. Each contract is a potential token trap for tokens.\n                                        They can't be recovered so it means money losses for end users."),t("br"),e._v("\n                                        TokenRecover allows the contract owner to recover any token sent into the\n                                        contract for error.\n")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#will-copyright-be-an-issue"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Will be having Token Generator Copyright an issue?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"will-copyright-be-an-issue",accordion:"features-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v('\n                                        No. Token Generator code is released under MIT License so,using Test or Simple for FREE,\n                                        you will have a view method in your Smart Contract named\n                                        "generator" showing a link to this page.\n                                        You will also have a disclaimer in source code.\n                                        This is not a problem for you, as your token will be fully compatible with the network definition you will create.\n                                        You can remove it by choosing a token type with remove Copyright feature.\n                                    ')])])],1)],1)],1)]),e._v(" "),t("h5",{staticClass:"font-weight-light text-white"},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#about-token-behaviours"},on:{click:function(e){e.preventDefault()}}},[t("b-icon-caret-down-fill"),e._v(" Token Behaviours\n                    ")],1)]),e._v(" "),t("b-collapse",{staticClass:"mt-4",attrs:{id:"about-token-behaviours",accordion:"main-accordion"}},[t("div",{staticClass:"accordion mb-3",attrs:{role:"tablist"}},[t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#where-is-my-token-address"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Where is my Token address?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"where-is-my-token-address",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                        Once you confirm your transaction you will receive transaction hash (first) and\n                                        Token address (when transaction is confirmed). If your transaction will take\n                                        some time to be confirmed due to network status, you can monitor it and your\n                                        Token will be visible in transaction page. Watch the above video tutorial for\n                                        details.\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#who-will-be-token-owner"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Who will be Token Owner?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"who-will-be-token-owner",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                        Once your Token will be deployed you (your MetaMask address) will be the only\n                                        owner.\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#where-token-supply-will-go"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Where will token supply go after deploy?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"where-token-supply-will-go",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                        The initial token supply will be held by the address used to deploy the token\n                                        (your MetaMask address). This address will be Token Owner and will be able to\n                                        generate new tokens (in case you selected a token type with Mintable behaviour).\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#which-wallet-support"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Which wallet will my Token be supported by?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"which-wallet-support",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                        Your token will be fully compatible with the network you will create.\n                                        Any wallet with the same network will be your token.\n                                    ")])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#how-to-mint-new-tokens"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        How to mint new tokens?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"how-to-mint-new-tokens",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v('\n                                        To generate new tokens you must use the "mint" function using token owner\n                                        wallet. You can doing this by using the Contract/Write tab on your BscScan\n                                        token page.'),t("br"),e._v(" "),t("small",[e._v("\n                                            Note: remember that your tokens has a number of decimals (usually 18), so\n                                            you must use the entire number with decimals."),t("br"),e._v("I.e. if you need to\n                                            generate 500 additional tokens, call the mint function by inserting\n                                            500000000000000000000.\n                                        ")])])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#will-my-token-be-verified"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Will my Token Source Code be verified on BscScan?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"will-my-token-be-verified",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v('\n                                        Yes, your token source code will be already verified by "Similar Match".\n                                        It means that your source code is similar to other tokens deployed using this\n                                        generator.\n                                    ')])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#can-i-add-logo"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        Can I add logo and information to my token on BscScan?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"can-i-add-logo",accordion:"bep20-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                        Once your token will be deployed you will be able to add information on BscScan\n                                        using their procedure.\n                                    ")])]),e._v(" "),t("b-link",{staticClass:"card-link",attrs:{href:"https://bscscan.freshdesk.com/support/solutions/articles/67000221190-how-to-update-token-information-on-bscscan-",target:"_blank"}},[e._v("\n                                    Update Token Information\n                                ")])],1)],1)],1)]),e._v(" "),t("h5",{staticClass:"font-weight-light text-white"},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#about-bsc"},on:{click:function(e){e.preventDefault()}}},[t("b-icon-caret-down-fill"),e._v(" Smart Chain and Ecosystem\n                    ")],1)]),e._v(" "),t("b-collapse",{staticClass:"mt-4",attrs:{id:"about-bsc",accordion:"main-accordion"}},[t("div",{staticClass:"accordion mb-3",attrs:{role:"tablist"}},[t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#what-is-a-dapp"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        What is a DApp?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"what-is-a-dapp",accordion:"bsc-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v("\n                                        DApp is an abbreviated form for decentralized application."),t("br"),e._v("\n                                        A DApp has its backend code running on a decentralized peer-to-peer network.\n                                        Contrast this with an app where the backend code is running on centralized\n                                        servers."),t("br"),e._v("\n                                        A DApp can have frontend code and user interfaces written in any language (just\n                                        like an app) that can make calls to its backend. Furthermore, its frontend can\n                                        be hosted on decentralized storage such as Swarm or IPFS."),t("br"),e._v("\n                                        For an application to be considered a Dapp (pronounced Dee-app, similar to\n                                        Email) it must meet the following criteria:\n                                        "),t("ul",[t("li",[e._v("\n                                                The application must be completely open-source, it must operate\n                                                autonomously, and with no entity controlling the majority of its tokens.\n                                                The application may adapt its protocol in response to proposed\n                                                improvements and market feedback but all changes must be decided by\n                                                consensus of its users.\n                                            ")]),e._v(" "),t("li",[e._v("\n                                                The application's data and records of operation must be\n                                                cryptographically stored in a public, decentralized blockchain in order\n                                                to avoid any central points of failure.\n                                            ")]),e._v(" "),t("li",[e._v("\n                                                The application must use a cryptographic token (bitcoin or a token\n                                                native to its system) which is necessary for access to the application\n                                                and any contribution of value from (miners / farmers) should be rewarded\n                                                in the application’s tokens.\n                                            ")]),e._v(" "),t("li",[e._v("\n                                                The application must generate tokens according to a standard\n                                                crytptographic algorithm acting as a proof of the value nodes are\n                                                contributing to the application (Bitcoin uses the Proof of Work\n                                                Algorithm).\n                                            ")])])])])],1)],1),e._v(" "),t("b-card",{attrs:{"no-body":"","bg-variant":"light",itemscope:"",itemprop:"mainEntity",itemtype:"https://schema.org/Question"}},[t("b-card-header",{attrs:{role:"tab"}},[t("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle"}],staticClass:"btn-block text-reset text-decoration-none",attrs:{href:"#what-is-gas"},on:{click:function(e){e.preventDefault()}}},[t("span",{attrs:{itemprop:"name"}},[e._v("\n                                        What is GAS and how to set Gas price?\n                                    ")])])]),e._v(" "),t("b-collapse",{staticClass:"p-4",attrs:{id:"what-is-gas",accordion:"bsc-accordion"}},[t("b-card-text",{attrs:{itemscope:"",itemprop:"acceptedAnswer",itemtype:"https://schema.org/Answer"}},[t("span",{attrs:{itemprop:"text"}},[e._v('\n                                      It measures how much "work" an action or set of actions takes to perform.\n                                      Every operation that can be performed by a transaction or contract on the platform costs a certain number of gas,\n                                      with operations that require more computational resources costing more gas than operations that require few\n                                      computational resources.\n                                      '),t("br"),e._v("\n                                      The reason gas is important is that it helps to ensure an appropriate fee is\n                                      being paid by transactions submitted to the network. By requiring that a\n                                      transaction pay for each operation it performs (or causes a contract to\n                                      perform), we ensure that network doesn't become bogged down with performing\n                                      a lot of intensive work that isn't valuable to anyone.\n                                    ")])])],1)],1)],1)])],1)],1),e._v(" "),t("b-row",[t("b-col",[t("b-alert",{staticClass:"mt-4",attrs:{show:"",variant:"warning"}},[t("h4",{staticClass:"alert-heading"},[e._v("DISCLAIMER")]),e._v(" "),t("p",[e._v("\n                        Token Generator and its author are free of any liability regarding Tokens built using\n                        this App, and the use that is made of them. Tokens built on Token Generator, their\n                        projects, their teams, their use of Token (as well as anything related to Token) are in no way\n                        connected to Token Generator or its author.\n                    ")]),e._v(" "),t("hr"),e._v(" "),t("small",[e._v("\n                        Token Generator's code is provided under MIT License. Anyone can use it as per their\n                        needs. The App's purpose is to make people able to tokenize their ideas without coding or\n                        paying large amounts for it. Source code is public and well tested and continuously updated to\n                        reduce risk of bugs and introduce language optimizations. Anyway the purchase of tokens\n                        involves a high degree of risk. Before acquiring tokens, it is recommended to carefully weighs\n                        all the information and risks detailed in Token owner's Conditions.\n                    ")])])],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);