import igniteLogo from '../assets/logo.svg'

export function Header() {
  return (
    <div className="flex p-5 justify-center items-center h-20 bg-zinc-800">
      <img className="h-8" src={igniteLogo} alt="" />
    </div>
  )
}
