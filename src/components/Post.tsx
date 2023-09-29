import { Comment } from './Comment'

interface PostProps {
  author: string
  content: string
}

export function Post({ author, content }: PostProps) {
  return (
    <article className="bg-zinc-800 rounded-lg px-10 py-10">
      <header className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <img
            className="w-[calc(3rem+12px)] h-[calc(3rem+12px)] rounded-lg border-4 border-solid border-zinc-800 outline-2 outline outline-green-500 "
            src="https://github.com/JoaoDaGaita.png"
            alt=""
          />
          <div>
            <strong className="block text-zinc-200 text-base not-italic font-bold leading-6">
              {author}
            </strong>
            <p className="block not-italic font-normal text-sm leading-5 text-zinc-500">
              {content}
            </p>
          </div>
        </div>
        <time
          className="text-zinc-700 text-right text-sm not-italic font-normal leading-5"
          title="11 de Maio às 08:13h"
          dateTime="2022-05-11 08:13:30"
        >
          Publicado hpa 1h
        </time>
      </header>

      <div>
        <p className="text-zinc-400">Fala galeraa 👋</p>
        <p className="text-zinc-400">
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <a className="text-green-400">👉jane.design/doctorcare</a>
        <p className="text-green-400"> #novoprojeto #nlw #rocketseat</p>
      </div>
      {/* [&>footer]:focus-within:visible  [&>footer]:focus-within:max-h-none */}

      <div className="border-t border-t-gray-700 mt-6 focus-within:visible focus-within:max-h-none [&>*:nth-child(3)]:focus-within:visible  [&>*:nth-child(3)]:focus-within:max-h-none">
        <strong className="text-[#E1E1E6] text-base not-italic font-bold leading-6 mt-6">
          Deixe seu feedback
        </strong>
        <textarea
          className="w-full h-[96px] p-4 text-zinc-300 resize-none text-base not-italic font-normal leading-5 flex mt-4 
            items-center flex-shrink-0 rounded-lg border-0 border-solid bg-[#121214] focus:shadow-ignite
             "
        />

        <footer className="invisible max-h-0">
          <button
            type="submit"
            className="text-base cursor-pointer text-white not-italic font-bold leading-normal inline-flex px-6 pt-4 pb-[14px] 
                    justify-center items-center gap-[10px] rounded-lg bg-igniteGreenMid mt-4 hover:bg-igniteGreenLight "
          >
            Publicar
          </button>
        </footer>

        <div className="mt-8">
          <Comment />
          <Comment />
        </div>
      </div>
    </article>
  )
}
