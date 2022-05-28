import TestRenderer from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = TestRenderer.create(<ProfileStatus status='hello' />)
    const instance = component.root
    expect(instance.props.status).toBe("hello")
  })

  test("span should be displayed after creation", () => {
    const component = TestRenderer.create(<ProfileStatus status='hello' />)
    const instance = component.root
    const span = instance.findByType("span")
    expect(span).not.toBeNull()
  })

  test("input shouldn't be displayed after creation", () => {
    const component = TestRenderer.create(<ProfileStatus status='hello' />)
    const instance = component.root
    expect(() => {
      const input = instance.findByType("input")
    }).toThrow()
  })

  test("span text should be 'hello'", () => {
    const component = TestRenderer.create(<ProfileStatus status='hello' />)
    const instance = component.root
    const span = instance.findByType("span")
    expect(span.children[0]).toBe("hello")
  })

  test("input instead of span should be displayed in editMode", () => {
    const component = TestRenderer.create(<ProfileStatus status='hello' />)
    const instance = component.root
    const span = instance.findByType("span")
    span.props.onDoubleClick()
    const input = instance.findByType("input")
    // console.log(span)
    expect(input).not.toBeNull()
    expect(() => {
      const spanAfter = instance.findByType("span")
    }).toThrow()
  })

  test("calback should be called", () => {
    const mockCallback = jest.fn()
    const component = TestRenderer.create(
      <ProfileStatus status='hello' updateUserStatus={mockCallback} />
    )
    const instance = component.root
    const span = instance.findByType("span")
    span.props.onDoubleClick()
    const input = instance.findByType("input")
    input.props.onBlur()
    expect(mockCallback.mock.calls.length).toBe(1)
  })
})
