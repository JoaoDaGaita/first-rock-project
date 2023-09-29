import { Trash } from 'phosphor-react'

export function Comment() {
  return (
    <div className="w-full shrink-0 flex gap-4">
      <img
        className="w-[50px] h-[50px] rounded-lg border-solid border-zinc-800"
        src="https://github.com/JoaoDaGaita.png"
        alt=""
      />
      <div className="flex-1">
        <div className="bg-[#29292E] rounded-lg p-4">
          <header className="flex justify-between items-center">
            <div className="flex flex-col">
              <strong>João</strong>
              <time>Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>afadsad</p>
        </div>
        <footer>
          <button>aplaudir</button>
        </footer>
      </div>
    </div>
  )
}
