const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let total = blogs.reduce((acc, cur) => {
    return acc + cur.likes
  }, 0)
  return total
}

const favoriteBlog = (blogs) => {
  let favorite = blogs.reduce((acc, cur) => {
    return(
      acc.likes > cur.likes
        ? acc
        : cur
    )
  })
  return favorite
}

module.exports = {
  dummy, totalLikes, favoriteBlog
}