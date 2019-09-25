import React from "react"

export default ({ closeIntro }) => {
  return (
    <section className="til-intro-component">
      <div className="til-intro-component-inner">
        <button onClick={closeIntro}>
          <div className="til-intro-close-button">
            <p className="til-intro-close-button-link">Close</p>
          </div>
        </button>
        <h2>TIL stands for "Today I learnt"</h2>
        <p>I'm recording little snippets (or sometimes longer snippets) of what I'm learning for several reason:</p>
        <ul>
          <li>I've noticed that I retain knowledge better and understand matters better when I explain them to others, i.e. write about them in the style of blog posts</li>
          <li>It might be useful for others</li>
          <li>
            As a reference for myself. Sometimes I remember that I learnt something but forget the details.
            Now I can go back to the article and have myself explain it to me.
            Who else would be better at explaining stuff to me than myself?
          </li>
          <li>
            I work remotely and across timezones. That means that sometimes I don't have people around me to discuss stuff with.
            So I just write about it instead.
            "Dear diary..."
          </li>
        </ul>
        <p>
          I'm making this public to encourage myself to write more.
          External motivation drives me, so the pressure of wanting to keep this going on my website is helping!
        </p>
    </div>
  </section>
  )
}
