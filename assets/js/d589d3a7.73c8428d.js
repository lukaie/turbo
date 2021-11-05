(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(88)),l={title:"Getting Started",slug:"/"},s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"How To Use",source:"@site/docs/getting-started.md",slug:"/",permalink:"/",editUrl:"https://github.com/AugurProject/turbo/edit/dev/augur.sh/docs/getting-started.md",version:"current",sidebar:"docs",next:{title:"Hardhat Tasks",permalink:"/tasks"}},c=[],i={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"how-to-use"},"How To Use"),Object(o.b)("p",null,"First get dependencies and build everything.\n(Everything. Contracts, generated files, then finally the typescript itself.)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yarn && yarn build\n")),Object(o.b)("p",null,"Now if you want to, run all the tests:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yarn test\n")),Object(o.b)("p",null,"Want to test deploying?\nFirst start a local ethereum node:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yarn smart ethereumNode\n")),Object(o.b)("p",null,"Then in another terminal:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yarn smart contracts:deploy --network localhost\n")),Object(o.b)("p",null,"Want to deploy to kovan?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"PRIVATE_KEY=$yourPrivateKeyHere yarn smart contracts:deploy --network kovan\n")),Object(o.b)("p",null,"Oh, now you want to verify your contracts on etherscan?\nYou will need an etherscan api key, so get one.\nThen run this bad boy:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"ETHERSCAN_API_KEY=$yourEtherscanAPIKeyHere yarn smart contracts:verify --network kovan $contractAddress $firstConstructorArg $secondConstructorArg\n")),Object(o.b)("p",null,"(This process will be automated further, to apply to most or all of the deployed contracts without needing to know their constructor arguments.)"),Object(o.b)("h1",{id:"want-to-write-code"},"Want To Write Code"),Object(o.b)("p",null,"This repo uses eslint with a few options and prettier with 120 columns.\nBefore committing any code, please run prettier:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yarn format:write\n")),Object(o.b)("p",null,"Then run the linter:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yarn lint\n")))}u.isMDXComponent=!0}}]);