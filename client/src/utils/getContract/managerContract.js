const ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "listenerAccount",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "listenerAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "name",
                "type": "string"
            }
        ],
        "name": "ListenerCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "songID",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "title",
                "type": "string"
            }
        ],
        "name": "NewSong",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "buySong",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "registerArtist",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "registerListener",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_ipfsHash",
                "type": "address"
            },
            {
                "name": "_title",
                "type": "string"
            }
        ],
        "name": "registerSong",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "accountToArtistAddr",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "accountToListenerAddr",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "allArtistsAddrs",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "artistAccountToSongCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getAllArtistsAddrs",
        "outputs": [
            {
                "name": "",
                "type": "address[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_acc",
                "type": "address"
            }
        ],
        "name": "getArtistByArtistAcc",
        "outputs": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "id",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_idx",
                "type": "uint256"
            }
        ],
        "name": "getArtistNameByIndex",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "songID",
                "type": "uint256"
            }
        ],
        "name": "getSongBySongID",
        "outputs": [
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "uint256"
            },
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_idx",
                "type": "uint256"
            }
        ],
        "name": "getSongIDsByArtistID",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "getSongIDsByArtistName",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "listenerAccountToSongCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "songIDToArtistAccount",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "songs",
        "outputs": [
            {
                "name": "ipfsHash",
                "type": "address"
            },
            {
                "name": "artistName",
                "type": "string"
            },
            {
                "name": "title",
                "type": "string"
            },
            {
                "name": "artistID",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

const address = '0xcef824405b4f82eabd181172a48e695e708d0c00'

export { ABI, address }
