import { configureStore } from '@reduxjs/toolkit'
import userReduser from "../MIDL/employeeAuth/redux-slice";
// import departmentReduser from "../MIDL/department/slice";
// import emailTemplatesReduser from "./emailTemplatesSlice"

export const store = configureStore({
  reducer: {
    user: userReduser,
    // department: departmentReduser,
    // templates:emailTemplatesReduser
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch