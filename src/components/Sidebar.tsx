import { PencilLine } from "phosphor-react"

export function Sidebar() {
  return (
    <aside className="text-zinc-200 bg-[#202024]  overflow-hidden rounded-lg">
      <img
        className="w-full h-[72px] object-cover"
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
        alt=""
      />

      <div className="flex flex-col items-center">
        <img
          className="w-[calc(3rem+12px)] h-[calc(3rem+12px)] rounded-lg -mt-[calc(2rem-6px)] border-4 border-solid border-[#202024] outline-2 outline outline-green-500 "
          src="https://github.com/JoaoDaGaita.png"
          alt=""
        />
        <strong className="text-zinc-300 text-center mt-4 text-base not-italic font-bold leading-6">
          Joao
        </strong>
        <span className="text-sm not-italic font-normal leading-6 text-right text-zinc-500">
          UI Designer
        </span>
      </div>

      <footer className="border-t border-t-gray-700 mt-6 pt-6 p-8">
        <a
          className=" w-full gap-[10px] text-green-500 py-0 px-6 border rounded-lg bg-transparent
          h-12 border-solid border-green-500 text-xs not-italic font-bold
           no-underline leading-normal flex items-center justify-center duration-300
            hover:bg-green-500 hover:text-white"
          href=""
        >
          <PencilLine size={20} height={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
