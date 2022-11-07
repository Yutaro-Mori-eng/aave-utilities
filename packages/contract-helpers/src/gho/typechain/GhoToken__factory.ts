/* Autogenerated file. Do not edit manually. */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type { GhoToken, GhoTokenInterface, IGhoToken } from './GhoToken';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'facilitatorsAddresses',
        type: 'address[]',
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'maxCapacity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'level',
                type: 'uint128',
              },
            ],
            internalType: 'struct IGhoToken.Bucket',
            name: 'bucket',
            type: 'tuple',
          },
          {
            internalType: 'string',
            name: 'label',
            type: 'string',
          },
        ],
        internalType: 'struct IGhoToken.Facilitator[]',
        name: 'facilitatorsConfig',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'facilitatorAaddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldLevel',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newLevel',
        type: 'uint256',
      },
    ],
    name: 'BucketLevelChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'facilitatorAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'label',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'initialBucketCapacity',
        type: 'uint256',
      },
    ],
    name: 'FacilitatorAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'facilitatorAaddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'oldCapacity',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'newCapacity',
        type: 'uint256',
      },
    ],
    name: 'FacilitatorBucketCapacityUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'facilitatorAddress',
        type: 'address',
      },
    ],
    name: 'FacilitatorRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'facilitatorsAddresses',
        type: 'address[]',
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'maxCapacity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'level',
                type: 'uint128',
              },
            ],
            internalType: 'struct IGhoToken.Bucket',
            name: 'bucket',
            type: 'tuple',
          },
          {
            internalType: 'string',
            name: 'label',
            type: 'string',
          },
        ],
        internalType: 'struct IGhoToken.Facilitator[]',
        name: 'facilitatorsConfig',
        type: 'tuple[]',
      },
    ],
    name: 'addFacilitators',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'facilitator',
        type: 'address',
      },
    ],
    name: 'getFacilitator',
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: 'uint128',
                name: 'maxCapacity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'level',
                type: 'uint128',
              },
            ],
            internalType: 'struct IGhoToken.Bucket',
            name: 'bucket',
            type: 'tuple',
          },
          {
            internalType: 'string',
            name: 'label',
            type: 'string',
          },
        ],
        internalType: 'struct IGhoToken.Facilitator',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'facilitator',
        type: 'address',
      },
    ],
    name: 'getFacilitatorBucket',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'maxCapacity',
            type: 'uint128',
          },
          {
            internalType: 'uint128',
            name: 'level',
            type: 'uint128',
          },
        ],
        internalType: 'struct IGhoToken.Bucket',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getFacilitatorsList',
    outputs: [
      {
        internalType: 'address[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'v',
        type: 'uint8',
      },
      {
        internalType: 'bytes32',
        name: 'r',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: 's',
        type: 'bytes32',
      },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'facilitators',
        type: 'address[]',
      },
    ],
    name: 'removeFacilitators',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'facilitator',
        type: 'address',
      },
      {
        internalType: 'uint128',
        name: 'newCapacity',
        type: 'uint128',
      },
    ],
    name: 'setFacilitatorBucketCapacity',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60e06040523480156200001157600080fd5b5060405162002fcb38038062002fcb8339810160408190526200003491620007d2565b604080518082018252600981526823b437902a37b5b2b760b91b60208083019182528351808501909452600384526247484f60e81b908401528151919291601291620000849160009190620004c0565b5081516200009a906001906020850190620004c0565b5060ff81166080524660a052620000b0620000d7565b60c05250620000c3915033905062000173565b620000cf8282620001c5565b5050620009c5565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200010b9190620008ed565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80518251146200020c5760405162461bcd60e51b815260206004820152600d60248201526c1253959053125117d253941555609a1b60448201526064015b60405180910390fd5b60005b81518110156200026c576200026383828151811062000232576200023262000991565b60200260200101518383815181106200024f576200024f62000991565b60200260200101516200027160201b60201c565b6001016200020f565b505050565b6001600160a01b03821660009081526007602052604090206001810180546200029a90620008b0565b159050620002eb5760405162461bcd60e51b815260206004820152601a60248201527f464143494c495441544f525f414c52454144595f455849535453000000000000604482015260640162000203565b600082602001515111620003325760405162461bcd60e51b815260206004820152600d60248201526c1253959053125117d310509153609a1b604482015260640162000203565b8151602001516001600160801b031615620003905760405162461bcd60e51b815260206004820152601c60248201527f494e56414c49445f4255434b45545f434f4e46494755524154494f4e00000000604482015260640162000203565b6020808301518051620003aa9260018501920190620004c0565b50815180516020918201516001600160801b03908116600160801b029116178255620003e4906008908590620013ab6200044e821b17901c565b508160200151604051620003f99190620009a7565b6040519081900381208351516001600160801b03168252906001600160a01b038516907ff27320e83f88f912f4441ed1db7432165eab17cb2eeac6c08848b857172707ae9060200160405180910390a3505050565b600062000465836001600160a01b0384166200046e565b90505b92915050565b6000818152600183016020526040812054620004b75750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915562000468565b50600062000468565b828054620004ce90620008b0565b90600052602060002090601f016020900481019282620004f257600085556200053d565b82601f106200050d57805160ff19168380011785556200053d565b828001600101855582156200053d579182015b828111156200053d57825182559160200191906001019062000520565b506200054b9291506200054f565b5090565b5b808211156200054b576000815560010162000550565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620005a157620005a162000566565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620005d257620005d262000566565b604052919050565b60006001600160401b03821115620005f657620005f662000566565b5060051b60200190565b80516001600160801b03811681146200061857600080fd5b919050565b60005b838110156200063a57818101518382015260200162000620565b838111156200064a576000848401525b50505050565b6000601f83818401126200066357600080fd5b825160206200067c6200067683620005da565b620005a7565b82815260059290921b850181019181810190878411156200069c57600080fd5b8287015b84811015620007c65780516001600160401b0380821115620006c25760008081fd5b90890190601f19828c038101606080821215620006df5760008081fd5b620006e96200057c565b604080841215620006fa5760008081fd5b620007046200057c565b9350620007138b880162000600565b84526200072281880162000600565b848c01529281528582015192858411156200073f57600092508283fd5b83870196508f603f8801126200075757600093508384fd5b8a87015193508584111562000770576200077062000566565b620007818b868f87011601620005a7565b95508386528f818589010111156200079b57600094508485fd5b620007ac848c8801838a016200061d565b50808a0194909452505050845250918301918301620006a0565b50979650505050505050565b60008060408385031215620007e657600080fd5b82516001600160401b0380821115620007fe57600080fd5b818501915085601f8301126200081357600080fd5b81516020620008266200067683620005da565b82815260059290921b840181019181810190898411156200084657600080fd5b948201945b838610156200087d5785516001600160a01b03811681146200086d5760008081fd5b825294820194908201906200084b565b918801519196509093505050808211156200089757600080fd5b50620008a68582860162000650565b9150509250929050565b600181811c90821680620008c557607f821691505b60208210811415620008e757634e487b7160e01b600052602260045260246000fd5b50919050565b600080835481600182811c9150808316806200090a57607f831692505b60208084108214156200092b57634e487b7160e01b86526022600452602486fd5b818015620009425760018114620009545762000983565b60ff1986168952848901965062000983565b60008a81526020902060005b868110156200097b5781548b82015290850190830162000960565b505084890196505b509498975050505050505050565b634e487b7160e01b600052603260045260246000fd5b60008251620009bb8184602087016200061d565b9190910192915050565b60805160a05160c0516125d6620009f56000396000610707015260006106d70152600061024901526125d66000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c80637ecebe00116100e3578063aa02f94a1161008c578063d505accf11610066578063d505accf14610425578063dd62ed3e14610438578063f2fde38b1461046357600080fd5b8063aa02f94a1461035e578063af93df57146103f2578063d46ec0ed1461040557600080fd5b8063941b7554116100bd578063941b75541461033057806395d89b4114610343578063a9059cbb1461034b57600080fd5b80637ecebe00146102d55780638238da3d146102f55780638da5cb5b1461030857600080fd5b8063313ce5671161014557806342966c681161011f57806342966c681461029a57806370a08231146102ad578063715018a6146102cd57600080fd5b8063313ce567146102445780633644e5151461027d57806340c10f191461028557600080fd5b80631ec90f2e116101765780631ec90f2e146101f557806323b872dd1461020a57806330adf81f1461021d57600080fd5b806306fdde031461019d578063095ea7b3146101bb57806318160ddd146101de575b600080fd5b6101a5610476565b6040516101b29190611d81565b60405180910390f35b6101ce6101c9366004611dbd565b610504565b60405190151581526020016101b2565b6101e760025481565b6040519081526020016101b2565b6101fd61057e565b6040516101b29190611de7565b6101ce610218366004611e41565b61058f565b6101e77f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b61026b7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016101b2565b6101e76106d3565b610298610293366004611dbd565b610729565b005b6102986102a8366004611e7d565b610919565b6101e76102bb366004611e96565b60036020526000908152604090205481565b6102986109ec565b6101e76102e3366004611e96565b60056020526000908152604090205481565b610298610303366004612123565b610a79565b60065460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101b2565b61029861033e3660046121e3565b610b08565b6101a5610bcb565b6101ce610359366004611dbd565b610bd8565b6103e561036c366004611e96565b60408051808201909152600080825260208201525073ffffffffffffffffffffffffffffffffffffffff166000908152600760209081526040918290208251808401909352546fffffffffffffffffffffffffffffffff8082168452700100000000000000000000000000000000909104169082015290565b6040516101b29190612258565b610298610400366004612285565b610c5d565b610418610413366004611e96565b610e22565b6040516101b291906122b8565b610298610433366004612304565b610f4f565b6101e7610446366004612377565b600460209081526000928352604080842090915290825290205481565b610298610471366004611e96565b61127b565b60008054610483906123a1565b80601f01602080910402602001604051908101604052809291908181526020018280546104af906123a1565b80156104fc5780601f106104d1576101008083540402835291602001916104fc565b820191906000526020600020905b8154815290600101906020018083116104df57829003601f168201915b505050505081565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061056c9086815260200190565b60405180910390a35060015b92915050565b606061058a60086113d4565b905090565b73ffffffffffffffffffffffffffffffffffffffff831660009081526004602090815260408083203384529091528120547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610623576105f18382612424565b73ffffffffffffffffffffffffffffffffffffffff861660009081526004602090815260408083203384529091529020555b73ffffffffffffffffffffffffffffffffffffffff851660009081526003602052604081208054859290610658908490612424565b909155505073ffffffffffffffffffffffffffffffffffffffff808516600081815260036020526040908190208054870190555190918716907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906106c09087815260200190565b60405180910390a3506001949350505050565b60007f000000000000000000000000000000000000000000000000000000000000000046146107045761058a6113e1565b507f000000000000000000000000000000000000000000000000000000000000000090565b336000908152600760205260409020546fffffffffffffffffffffffffffffffff16806107b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f494e56414c49445f464143494c495441544f520000000000000000000000000060448201526064015b60405180910390fd5b3360009081526007602052604081205470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff16906107f8848361243b565b905080831015610889576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f464143494c495441544f525f4255434b45545f43415041434954595f4558434560448201527f454445440000000000000000000000000000000000000000000000000000000060648201526084016107ae565b336000818152600760205260409081902080546fffffffffffffffffffffffffffffffff808616700100000000000000000000000000000000029116179055517e7c7de1f1a34712b17838a180c9c7b2cac4571e6c64cb423373b634636a61ce906109009085908590918252602082015260400190565b60405180910390a2610912858561147b565b5050505050565b3360009081526007602052604081205470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff169061095a8383612424565b336000818152600760205260409081902080546fffffffffffffffffffffffffffffffff80861670010000000000000000000000000000000002911617905551919250907e7c7de1f1a34712b17838a180c9c7b2cac4571e6c64cb423373b634636a61ce906109d59085908590918252602082015260400190565b60405180910390a26109e733846114f4565b505050565b60065473ffffffffffffffffffffffffffffffffffffffff163314610a6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107ae565b610a776000611582565b565b60065473ffffffffffffffffffffffffffffffffffffffff163314610afa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107ae565b610b0482826115f9565b5050565b60065473ffffffffffffffffffffffffffffffffffffffff163314610b89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107ae565b60005b818110156109e757610bc3838383818110610ba957610ba9612453565b9050602002016020810190610bbe9190611e96565b6116b4565b600101610b8c565b60018054610483906123a1565b33600090815260036020526040812080548391908390610bf9908490612424565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600081815260036020526040908190208054850190555133907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061056c9086815260200190565b60065473ffffffffffffffffffffffffffffffffffffffff163314610cde576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107ae565b73ffffffffffffffffffffffffffffffffffffffff821660009081526007602052604081206001018054610d11906123a1565b905011610d7a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f464143494c495441544f525f444f45535f4e4f545f455849535400000000000060448201526064016107ae565b73ffffffffffffffffffffffffffffffffffffffff821660008181526007602090815260409182902080547fffffffffffffffffffffffffffffffff0000000000000000000000000000000081166fffffffffffffffffffffffffffffffff878116918217909355845192909116808352928201529092917fc795c0a4927c3b6645e4e49a5a519af936b3c1c0e4c323a3f7251063f3f4bb0e910160405180910390a2505050565b6040805160808101825260009181018281526060808301939093528152602081019190915273ffffffffffffffffffffffffffffffffffffffff8216600090815260076020908152604091829020825160808101845281546fffffffffffffffffffffffffffffffff8082169583019586527001000000000000000000000000000000009091041660608201529283526001810180549192840191610ec6906123a1565b80601f0160208091040260200160405190810160405280929190818152602001828054610ef2906123a1565b8015610f3f5780601f10610f1457610100808354040283529160200191610f3f565b820191906000526020600020905b815481529060010190602001808311610f2257829003601f168201915b5050505050815250509050919050565b42841015610fb9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064016107ae565b6000610fc36106d3565b73ffffffffffffffffffffffffffffffffffffffff89811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938c166060840152608083018b905260a083019390935260c08083018a90528151808403909101815260e0830190915280519201919091207f190100000000000000000000000000000000000000000000000000000000000061010083015261010282019290925261012281019190915261014201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611122573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81161580159061119d57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611203576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f494e56414c49445f5349474e455200000000000000000000000000000000000060448201526064016107ae565b73ffffffffffffffffffffffffffffffffffffffff90811660009081526004602090815260408083208b8516808552908352928190208a905551898152919350918a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60065473ffffffffffffffffffffffffffffffffffffffff1633146112fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016107ae565b73ffffffffffffffffffffffffffffffffffffffff811661139f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016107ae565b6113a881611582565b50565b60006113cd8373ffffffffffffffffffffffffffffffffffffffff8416611816565b9392505050565b606060006113cd83611865565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516114139190612482565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b806002600082825461148d919061243b565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91015b60405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526003602052604081208054839290611529908490612424565b909155505060028054829003905560405181815260009073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016114e8565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8051825114611664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f494e56414c49445f494e5055540000000000000000000000000000000000000060448201526064016107ae565b60005b81518110156109e7576116ac83828151811061168557611685612453565b602002602001015183838151811061169f5761169f612453565b60200260200101516118c1565b600101611667565b73ffffffffffffffffffffffffffffffffffffffff811660009081526007602052604090205470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff161561178d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f464143494c495441544f525f4255434b45545f4c4556454c5f4e4f545f5a455260448201527f4f0000000000000000000000000000000000000000000000000000000000000060648201526084016107ae565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600760205260408120818155906117c36001830182611c34565b506117d19050600882611b24565b5060405173ffffffffffffffffffffffffffffffffffffffff8216907fa8fe5b89f35f2ebd6f3f95a7ef215f4bd89179e10c101073ae76cffad14734cf90600090a250565b600081815260018301602052604081205461185d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610578565b506000610578565b6060816000018054806020026020016040519081016040528092919081815260200182805480156118b557602002820191906000526020600020905b8154815260200190600101908083116118a1575b50505050509050919050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526007602052604090206001810180546118f5906123a1565b15905061195e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f464143494c495441544f525f414c52454144595f45584953545300000000000060448201526064016107ae565b6000826020015151116119cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f494e56414c49445f4c4142454c0000000000000000000000000000000000000060448201526064016107ae565b8151602001516fffffffffffffffffffffffffffffffff1615611a4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f494e56414c49445f4255434b45545f434f4e46494755524154494f4e0000000060448201526064016107ae565b6020808301518051611a649260018501920190611c6e565b50815180516020909101516fffffffffffffffffffffffffffffffff908116700100000000000000000000000000000000029116178155611aa66008846113ab565b508160200151604051611ab99190612555565b6040519081900381208351516fffffffffffffffffffffffffffffffff1682529073ffffffffffffffffffffffffffffffffffffffff8516907ff27320e83f88f912f4441ed1db7432165eab17cb2eeac6c08848b857172707ae9060200160405180910390a3505050565b60006113cd8373ffffffffffffffffffffffffffffffffffffffff841660008181526001830160205260408120548015611c2a576000611b65600183612424565b8554909150600090611b7990600190612424565b9050818114611bde576000866000018281548110611b9957611b99612453565b9060005260206000200154905080876000018481548110611bbc57611bbc612453565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611bef57611bef612571565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610578565b6000915050610578565b508054611c40906123a1565b6000825580601f10611c50575050565b601f0160209004906000526020600020908101906113a89190611cf2565b828054611c7a906123a1565b90600052602060002090601f016020900481019282611c9c5760008555611ce2565b82601f10611cb557805160ff1916838001178555611ce2565b82800160010185558215611ce2579182015b82811115611ce2578251825591602001919060010190611cc7565b50611cee929150611cf2565b5090565b5b80821115611cee5760008155600101611cf3565b60005b83811015611d22578181015183820152602001611d0a565b83811115611d31576000848401525b50505050565b60008151808452611d4f816020860160208601611d07565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006113cd6020830184611d37565b803573ffffffffffffffffffffffffffffffffffffffff81168114611db857600080fd5b919050565b60008060408385031215611dd057600080fd5b611dd983611d94565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b81811015611e3557835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611e03565b50909695505050505050565b600080600060608486031215611e5657600080fd5b611e5f84611d94565b9250611e6d60208501611d94565b9150604084013590509250925092565b600060208284031215611e8f57600080fd5b5035919050565b600060208284031215611ea857600080fd5b6113cd82611d94565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611f0357611f03611eb1565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611f5057611f50611eb1565b604052919050565b600067ffffffffffffffff821115611f7257611f72611eb1565b5060051b60200190565b80356fffffffffffffffffffffffffffffffff81168114611db857600080fd5b6000601f8381840112611fae57600080fd5b82356020611fc3611fbe83611f58565b611f09565b82815260059290921b85018101918181019087841115611fe257600080fd5b8287015b8481101561211757803567ffffffffffffffff808211156120075760008081fd5b908901907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828c0381016060808212156120415760008081fd5b612049611ee0565b6040808412156120595760008081fd5b612061611ee0565b935061206e8b8801611f7c565b845261207b818801611f7c565b848c015292815285820135928584111561209757600092508283fd5b83870196508f603f8801126120ae57600093508384fd5b8a8701359350858411156120c4576120c4611eb1565b6120d38b868f87011601611f09565b95508386528f818589010111156120ec57600094508485fd5b838188018c8801375060009285018a0192909252508088019290925250845250918301918301611fe6565b50979650505050505050565b6000806040838503121561213657600080fd5b823567ffffffffffffffff8082111561214e57600080fd5b818501915085601f83011261216257600080fd5b81356020612172611fbe83611f58565b82815260059290921b8401810191818101908984111561219157600080fd5b948201945b838610156121b6576121a786611d94565b82529482019490820190612196565b965050860135925050808211156121cc57600080fd5b506121d985828601611f9c565b9150509250929050565b600080602083850312156121f657600080fd5b823567ffffffffffffffff8082111561220e57600080fd5b818501915085601f83011261222257600080fd5b81358181111561223157600080fd5b8660208260051b850101111561224657600080fd5b60209290920196919550909350505050565b60408101610578828480516fffffffffffffffffffffffffffffffff908116835260209182015116910152565b6000806040838503121561229857600080fd5b6122a183611d94565b91506122af60208401611f7c565b90509250929050565b6020808252825180516fffffffffffffffffffffffffffffffff90811684840152910151166040820152600060208301516060808401526122fc6080840182611d37565b949350505050565b600080600080600080600060e0888a03121561231f57600080fd5b61232888611d94565b965061233660208901611d94565b95506040880135945060608801359350608088013560ff8116811461235a57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561238a57600080fd5b61239383611d94565b91506122af60208401611d94565b600181811c908216806123b557607f821691505b602082108114156123ef577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015612436576124366123f5565b500390565b6000821982111561244e5761244e6123f5565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080835481600182811c91508083168061249e57607f831692505b60208084108214156124d7577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b8180156124eb576001811461251a57612547565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00861689528489019650612547565b60008a81526020902060005b8681101561253f5781548b820152908501908301612526565b505084890196505b509498975050505050505050565b60008251612567818460208701611d07565b9190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212209be0e9712b2b9fed4dd3d131949ccca437090267c44589ac784b7a86d5c3b7d164736f6c634300080a0033';

type GhoTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GhoTokenConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GhoToken__factory extends ContractFactory {
  constructor(...args: GhoTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    facilitatorsAddresses: string[],
    facilitatorsConfig: IGhoToken.FacilitatorStruct[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<GhoToken> {
    return super.deploy(
      facilitatorsAddresses,
      facilitatorsConfig,
      overrides || {},
    ) as Promise<GhoToken>;
  }
  override getDeployTransaction(
    facilitatorsAddresses: string[],
    facilitatorsConfig: IGhoToken.FacilitatorStruct[],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      facilitatorsAddresses,
      facilitatorsConfig,
      overrides || {},
    );
  }
  override attach(address: string): GhoToken {
    return super.attach(address) as GhoToken;
  }
  override connect(signer: Signer): GhoToken__factory {
    return super.connect(signer) as GhoToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GhoTokenInterface {
    return new utils.Interface(_abi) as GhoTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): GhoToken {
    return new Contract(address, _abi, signerOrProvider) as GhoToken;
  }
}