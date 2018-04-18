export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const GET_STORE = 'GET_STORE'

interface ITAction {
  type: string
  value: any
}

export const createAction = (name: string, value: any): ITAction => ({
  type: name,
  value
})
