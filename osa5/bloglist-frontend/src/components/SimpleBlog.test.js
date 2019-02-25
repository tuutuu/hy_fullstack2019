import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

describe('SimpleBlog', () => {
  let blog
  let component
  let mockHandler

  beforeEach(() => {
    mockHandler = jest.fn()

    blog = {
      title: "Komponenttitestauksen syvimmät salat",
      author: "Jukka Palmu",
      likes: 1000
    }

    component = render(
      <SimpleBlog blog={blog} onClick={mockHandler} />
    )
  })

  it('renders title', () => {
    expect(component.container).toHaveTextContent(
      'Komponenttitestauksen syvimmät salat'
    )
  })

  it('renders author', () => {
    expect(component.container).toHaveTextContent(
      'Jukka Palmu'
    )
  })

  it('renders likes', () => {
    expect(component.container).toHaveTextContent(
      `blog has ${blog.likes} likes`
    )
  })


  it('clicking the like button twice calls event handler twice', async () => {
    const button = component.getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})
