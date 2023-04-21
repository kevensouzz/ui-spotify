import ChevronButtons from "./ChevronButtons";

export default function Topic(prop : {text: string}) {
  return (
      <div className="flex items-center justify-between mt-8 mb-3">
        <h1 className="font-semibold text-3xl">{prop.text}</h1>
        <ChevronButtons />
      </div>
  )
}