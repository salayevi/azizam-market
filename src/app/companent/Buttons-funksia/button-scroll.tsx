"use client"

export default function ScrollButton() {

  const scrollToFooter = () => {

    const footer = document.getElementById("footer")
    if (!footer) return

    const targetPosition = footer.offsetTop
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition

    const duration = 2000 // scroll davomiyligi (millisecond) — 2000 = 2 sekund
    let startTime: number | null = null

    const animation = (currentTime: number) => {

      if (startTime === null) startTime = currentTime

      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      window.scrollTo(0, startPosition + distance * easeInOut(progress))

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    const easeInOut = (t: number) => {
      return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2
    }

    requestAnimationFrame(animation)
  }

  return (
    <button
      onClick={scrollToFooter}
      className="flex flex-col items-center gap-2 mt-10 text-white opacity-80 hover:opacity-100 transition"
    >
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-2 bg-white rounded-full mt-1 animate-bounce"></div>
      </div>

      <span className="text-sm tracking-wide">
        Aylantiring
      </span>
    </button>
  )
}