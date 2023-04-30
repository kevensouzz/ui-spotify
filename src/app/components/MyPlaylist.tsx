export default function MyPLaylist(prop: { nome: string;}) {
  return (
      <a href="" className={`
      text-zinc-400 hover:text-zinc-100
      px-2 text-sm
      `}>
        {prop.nome}</a>
  )
}