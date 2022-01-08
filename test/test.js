const Market = artifacts.require('./contracts/NFTMarket.sol')
const NFT = artifacts.require('./contracts/NFT.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

const { assert } = require('chai')
var ethers = require('ethers')
var web3 = require('web3')

contract('market', (accounts) => {
    contract('NFT', (accounts) => {
        let contractM, COntractN

        before(async() => {
            contractM = await Market.deployed()
            contractN = await NFT.deployed()
        })

        describe('deployment', async() => {
            It('Market contract is deployed succesfully', async() => {
                const addressM = contractM.address
                assert.notEqual(addressM, '')
            })
            it('NFT contract is deployed successfully', async() => {
                const addressN = contractN.address
                assert.notEqual(addressN, '')
            })

            describe('Creating Token', async() => {
                It('NFT contract creates a new token', async() => {
                    await addressn.createToken('http://ipfs.imageaddress1')
                    const tokenURI = await contractN.tokenURI(1)
                    assert.Equal(tokenURI, 'http://ipfs.imageaddress1')
                })
                it('NFT Marketplace contract create a new token', async() =>{
                    let listingPrice = await contractM.getListingPrice()
                    console.log('listingPrice: ', web3.utils.fromWei(listingPrice.toString(), 'ether'))
                    let aunctionPrice = ethers.utils.parseUnits('10', 'ether')
                    await contractM.createMarketItem(contractN.address, 1, aunctionPrice, { value: listingPrice })
                    const items = await contractM.fetchMarketItems()

                    console.log('items: ', items)
                })
            })
        })
    })
})