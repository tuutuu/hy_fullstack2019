import React from 'react'
import { render, cleanup } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

describe('SimpleBlog', () => {
  let blog
  let component

  beforeEach(() => {
    blog = {
      title: "Komponenttitestauksen syvimmät salat",
      author: "Jukka Palmu",
      likes: 1000
    }

    component = render(
      <SimpleBlog blog={blog} />
    )
  })

  test('renders title', () => {
    expect(component.container).toHaveTextContent(
      'Komponenttitestauksen syvimmät salat'
    )
  })

  test('renders author', () => {
    expect(component.container).toHaveTextContent(
      'Jukka Palmu'
    )
  })

  test('renders likes', () => {
    expect(component.container).toHaveTextContent(
      `blog has ${blog.likes} likes`
    )
  })
})