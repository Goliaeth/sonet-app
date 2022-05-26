import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator,
} from "./profileReducer"
const state = {
  posts: [
    {
      id: 1,
      message: "Hello!",
      likesCount: 10,
    },
    {
      id: 2,
      message: "How are you?",
      likesCount: 15,
    },
    {
      id: 3,
      message: "Bla-bla-bla",
      likesCount: 7,
    },
  ],
}

it("after adding length of posts should be incremented", () => {
  // 1. prepare start test data
  const action = addPostActionCreator("test")
  // 2. do some action
  const newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(4)
})

it("text of new post should be 'test'", () => {
  // 1. prepare start test data
  const action = addPostActionCreator("test")
  // 2. do some action
  const newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts[3].message).toBe("test")
})

it("after deleting length of posts should be decremented", () => {
  // 1. prepare start test data
  const action = deletePostActionCreator(1)
  // 2. do some action
  const newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(3)
})

it("after deleting length of posts shouldn't be decremented if id is incorrect", () => {
  // 1. prepare start test data
  const action = deletePostActionCreator(1000)
  // 2. do some action
  const newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(3)
})
