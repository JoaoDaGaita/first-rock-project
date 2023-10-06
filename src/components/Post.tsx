import { FormEvent, useState } from "react"
import { Comment } from "./Comment"

interface PostProps {
  id: string
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  content: { type: string; content: string }[]
  publishedAt: Date
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["1"])
  const [newCommentText, setNewCommentText] = useState("")

  function handleCreateComment(e: FormEvent) {
    e.preventDefault()
    console.log(comments.length)

    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    )

    setComments(commentsWithoutDeletedOne)
  }

  function handleNewCommentInvalid(event: FormEvent<HTMLTextAreaElement>) {
    console.log(event.currentTarget)
    event.currentTarget.setCustomValidity("Esse campo é obrigatório!")
  }

  // function handleNewCommentInput(event: FormEvent<HTMLTextAreaElement>) {
  //   event.currentTarget.setCustomValidity("")
  // }

  function handleCreateCommentChange(event: FormEvent<HTMLTextAreaElement>) {
    event.currentTarget.setCustomValidity("")
    setNewCommentText(event.currentTarget.value)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className="bg-[#202024] rounded-lg p-10 shrink-0">
      <header className="flex items-center justify-between flex-wrap">
        <div className="flex gap-4 items-center">
          <img
            className="w-[calc(3rem+12px)] h-[calc(3rem+12px)] rounded-lg border-4 border-solid border-zinc-800 outline-2 outline outline-green-500 "
            src={author.avatarUrl}
            alt=""
          />
          <div>
            <strong className="block text-zinc-200 text-base not-italic font-bold leading-6">
              {author.name}
            </strong>
            <p className="block not-italic font-normal text-sm leading-5 text-zinc-500">
              {content[0].content}
            </p>
          </div>
        </div>
        <time
          className="text-sm not-italic font-normal leading-5 text-[#8D8D99]"
          title={publishedAt.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            hour: "2-digit",
            minute: "numeric",
            hour12: false,
          })}
          dateTime="2022-05-11 08:13:30"
        >
          {new Date(Date.now() - publishedAt.getDate()).toLocaleDateString(
            "pt-BR",
            {
              dateStyle: "medium",
            }
          )}
        </time>
      </header>

      <div className="leading-normal mt-6">
        <p className="text-zinc-400 text-base">Fala galeraa 👋</p>
        <p className="text-zinc-400 text-base">
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <a className="text-green-400">👉jane.design/doctorcare</a>
        <p className="text-green-400"> #novoprojeto #nlw #rocketseat</p>
      </div>
      {/* [&>footer]:focus-within:visible  [&>footer]:focus-within:max-h-none */}

      <form
        onSubmit={handleCreateComment}
        className="border-t border-t-gray-700 mt-6 pt-6"
      >
        <strong className="text-[#E1E1E6] text-base not-italic font-bold leading-6">
          Deixe seu feedback
        </strong>
        {/* className="[&>footer]:focus-within:visible [&>footer]:focus-within:max-h-none" */}
        <div className="group">
          <textarea
            value={newCommentText}
            onChange={handleCreateCommentChange}
            className="w-full h-[96px] p-4 text-zinc-300 resize-none text-base not-italic font-normal leading-5 flex mt-4 
            items-center flex-shrink-0 rounded-lg border-0 border-solid bg-[#121214] focus:shadow-ignite            
             "
            required
            onInvalid={handleNewCommentInvalid}
            // onInput={handleNewCommentInput}
          />

          <footer className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-none">
            <button
              id="publicar"
              type="submit"
              disabled={isNewCommentEmpty}
              className="text-base cursor-pointer text-white not-italic font-bold leading-normal inline-flex px-6 pt-4 pb-[14px] 
                          justify-center items-center gap-[10px] rounded-lg bg-igniteGreenMid mt-4 hover:bg-igniteGreenLight 
                          disabled:opacity-[0.7] disabled:hover:bg-green-300 disabled:cursor-not-allowed"
            >
              Publicar
            </button>
          </footer>
        </div>
      </form>

      <div className="mt-8">
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
