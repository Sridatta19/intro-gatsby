import React from "react"
import Image from "gatsby-image"

import useInstagram from "../hooks/useInstagram"

const Insta = () => {
  const data = useInstagram()
  return (
    <>
      <h2 className="text-center font-bold text-3xl leading-relaxed tracking-wider">
        Instagram Posts from Gatsbyjs
      </h2>
      <div className="flex flex-col items-center">
        {data.map(post => {
          return (
            <div
              key={post.id}
              className="max-w-sm w-full lg:max-w-full lg:flex m-4"
            >
              <div className="lg:w-full bg-yellow-300 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <p className="text-gray-700 text-base mb-4">{post.caption}</p>
                  <div className="text-gray-900 font-semibold text-xl mb-2">
                    {post.likes} Likes ❤️ & {post.comments} Comments 💕
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <a
        className="text-center text-purple-800"
        href="https://www.instagram.com/gatsbyjs/"
      >
        See More on Instagram
      </a>
    </>
  )
}

export default Insta
