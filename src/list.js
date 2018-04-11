const list = [
  {
    id: 1,
    name: '耐毒珠',
    py: 'naidu',
    rank: 5
  },
  {
    id: 2,
    name: '耐麻珠',
    py: 'naima',
    rank: 5
  },
  {
    id: 3,
    name: '毒珠',
    py: 'du',
    rank: 5
  },
  {
    id: 4,
    name: '毒瓶珠',
    py: 'duping',
    rank: 5
  },
  {
    id: 5,
    name: '耐火珠',
    py: 'naihuo',
    rank: 5
  },
  {
    id: 6,
    name: '痹瓶珠',
    py: 'bipin',
    rank: 7
  },
  {
    id: 7,
    name: '匠珠',
    py: 'jiang',
    rank: 8
  }
]

export const getAlchemyName = _id => {
  let tempName = ''
  list.some(({id, name}) => {
    if(_id === id){
      tempName = name
      return true
    }
  })
  return tempName
}

export default list