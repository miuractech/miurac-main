import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PeopleType} from './userDetails'
const initialState:{userDetails : PeopleType | null} = {userDetails:null}

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPerson(state, action: PayloadAction<PeopleType>) {
      state.userDetails = (action.payload)
    },
    removePerson(state) {
       state.userDetails = null
    }
  }
})

export const { addPerson, removePerson } = peopleSlice.actions

export default peopleSlice.reducer
