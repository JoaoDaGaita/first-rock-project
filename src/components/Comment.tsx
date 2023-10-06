import { ThumbsUp, Trash } from "phosphor-react"
import { MouseEventHandler, useState } from "react"

interface CommentProps {
  content: string
  onDeleteComment: (
    comment: string
  ) => MouseEventHandler<HTMLButtonElement> | void
}
export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => state + 1)
  }

  return (
    <div className="shrink-0 flex gap-4">
      <img
        className="w-[50px] h-[50px] rounded-lg border-solid border-zinc-800"
        src="https://github.com/JoaoDaGaita.png"
        alt=""
      />
      <div className="flex-1 mb-[26px]">
        <div className="bg-[#29292E] rounded-lg p-4">
          <header className="flex justify-between items-center">
            <div className="flex flex-col">
              <strong className="text-[#E1E1E6] text-sm not-italic font-bold leading-6">
                João
              </strong>
              <time className="text-[#8D8D99] text-xs not-italic font-normal leading-5">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} className="hover:text-[#F75A68] flex-shrink-0" />
            </button>
          </header>
          <p className="text-[#C4C4CC] mt-4 mb-[25px] text-sm not-italic font-normal leading-6">
            {content}
          </p>
        </div>

        <footer className="mt-4 group">
          <button
            className={`group-hover:text-[#E1E1E6] focus:border-0 gap-[10px]
               flex items-center text-sm not-italic text-[#8D8D99] font-bold leading-normal
                ${
                  likeCount > 0
                    ? "text-green-500 group-hover:text-green-300"
                    : ""
                }
              `}
            onClick={handleLikeComment}
          >
            <ThumbsUp size={20} className="flex-shrink-0" />
            Aplaudir • <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
