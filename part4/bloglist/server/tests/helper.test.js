const listHelper = require('../utils/list_helper')

const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2
  },
]

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  const listWithNoBlogs = []

  test('returns total likes of the blogs', () => {
    const result = listHelper.totalLikes(listWithNoBlogs)

    expect(result).toBe(0)
  })

  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5
    },
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })


  test('Of bigger list its calculated right', () => {
    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(36)
  })
})


describe('Favorite blog', () => {
    test('Return the blog object with most likes', () => {
        const result = listHelper.favoriteBlog(blogs)

        expect(result).toEqual({
          _id: '5a422b3a1b54a676234d17f9',
          title: 'Canonical string reduction',
          author: 'Edsger W. Dijkstra',
          url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
          likes: 12
        })
    })

})

describe('Author who has the largest amount of blogs', () => {
  test('if it is a empty list, return null', () => {
    const result = listHelper.mostBlogs([])
    expect(result).toEqual(null)
  })

  test('when list has one blog', () => {
    const blog = blogs[0]
    const mostBlogs = listHelper.mostBlogs([blog])
    expect(mostBlogs).toEqual({
      author: blog.author,
      blogs: 1
    })
  })

  test('when there is bigger list calculate right', () => {
    const mostBlogs = listHelper.mostBlogs(blogs)
    expect(mostBlogs).toEqual({
      author: 'Robert C. Martin',
      blogs: 3
    })
  })
})

describe('Author whose blog posts have the largest amount of likes', () => {
  test('of empty list is null', () => {
    const result = listHelper.mostLikes([])
    expect(result).toEqual(null)
  })

  test('when list has only one blog equals to the author of that blog', () => {
    const blog = blogs[0]
    const mostLikedBlogs = listHelper.mostLikes([blog])
    expect(mostLikedBlogs).toEqual({
      author: blog.author,
      likes: 7,
    })
  })

  test('of a bigger list is calculated right', () => {
    const mostLikedBlogs = listHelper.mostLikes(blogs)
    expect(mostLikedBlogs).toEqual({
      author: 'Edsger W. Dijkstra',
      likes: 17,
    })
  })
})