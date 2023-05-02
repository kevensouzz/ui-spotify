import ChevronButtons from "./ChevronButtons";

export default function Topic(prop: {text: string;}) {
  return (
      <div className={`
        flex items-center justify-between
        mt-8 mb-3
        max-lg:mb-2 max-lg:mt-6
      `}>
        <h1 className={`
          font-semibold text-3xl
          max-lg:text-2xl
          max-[425px]:text-xl
        `}>{prop.text}</h1>
        <ChevronButtons />
      </div>
  )
}