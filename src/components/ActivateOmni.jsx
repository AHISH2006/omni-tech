import openSound from "../assets/omni-open.mp3"

export default function ActivateOmni() {
  const playSound = () => {
    const audio = new Audio(openSound)
    audio.play()
  }

  return (
    <div className="flex justify-center py-20">
      <button
        onClick={playSound}
        className="w-32 h-32 rounded-full border-8 border-green-400
                   text-green-400 font-bold
                   shadow-[0_0_40px_#22c55e]
                   animate-pulse hover:scale-110 transition"
      >
        ACTIVATE
      </button>
    </div>
  )
}
