import { useRef, useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import GitKoftaVideo from "../assets/projects/git-kofta.mp4"
import GitKoftaThumbnail from "../assets/projects/git-kofta.png"

const formatTime = (s: number): string => {
  if (!isFinite(s)) return "0:00"
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, "0")}`
}

const Featured = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume] = useState(1)
  const [showControls, setShowControls] = useState(true)
  const [fullscreen, setFullscreen] = useState(false)
  const [buffered, setBuffered] = useState(0)

  const scheduleHide = useCallback(() => {
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => {
      if (playing) setShowControls(false)
    }, 2500)
  }, [playing])

  const handleMouseMove = () => {
    setShowControls(true)
    scheduleHide()
  }

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    const onMeta = () => setDuration(vid.duration)
    const onTime = () => {
      setCurrentTime(vid.currentTime)
      setProgress(vid.currentTime / vid.duration || 0)
      if (vid.buffered.length) {
        setBuffered(vid.buffered.end(vid.buffered.length - 1) / vid.duration)
      }
    }
    const onEnded = () => setPlaying(false)

    vid.addEventListener("loadedmetadata", onMeta)
    vid.addEventListener("timeupdate", onTime)
    vid.addEventListener("ended", onEnded)
    return () => {
      vid.removeEventListener("loadedmetadata", onMeta)
      vid.removeEventListener("timeupdate", onTime)
      vid.removeEventListener("ended", onEnded)
    }
  }, [])

  useEffect(() => {
    const onFs = () => setFullscreen(!!document.fullscreenElement)
    document.addEventListener("fullscreenchange", onFs)
    return () => document.removeEventListener("fullscreenchange", onFs)
  }, [])

  const togglePlay = () => {
    const vid = videoRef.current
    if (!vid) return
    if (vid.paused) { vid.play(); setPlaying(true) }
    else { vid.pause(); setPlaying(false) }
    scheduleHide()
  }

  const toggleMute = () => {
    const vid = videoRef.current
    if (!vid) return
    vid.muted = true     
    // vid.muted = !muted
    // setMuted(!muted)
  }

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const vid = videoRef.current
    if (!vid) return
    const rect = e.currentTarget.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
    vid.currentTime = ratio * duration
    setProgress(ratio)
  }

  const handleVolume = () => {
    const vid = videoRef.current
    if (!vid) return
    setMuted(true)
    // const v = parseFloat(e.target.value)
    // vid.volume = v
    // vid.muted = v === 0
    // setVolume(v)
    // setMuted(v === 0)
  }

  const toggleFullscreen = () => {
    const container = containerRef.current
    if (!container) return
    if (!document.fullscreenElement) container.requestFullscreen()
    else document.exitFullscreen()
  }

  return (
    <section
      id="featured"
      className="experience-radial relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        <div className="inline-block">
          <h1 className="mt-32 text-4xl font-bold md:mt-32">Featured</h1>
          <motion.div
            className="bg-accent mt-2 h-1 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
          />
        </div>
        <p className="mt-6 max-w-5xl px-6 text-center text-lg md:text-2xl">
          <a href="https://git-kofta.vercel.app/" rel="noopener noreferrer" target="_blank" className="underline-offset-4 hover:underline decoration-accent">
            <span className="font-extrabold">GIT<span className="text-accent">KOFTA</span> </span>
          </a>
          <br />
          is a playful yet insightful frontend analysis of your GitHub identity. See how your repository names, commit messages, and development patterns align with personas like
        </p>
      </div>

      {/* Player */}
      <div className="relative z-10 mt-10 flex items-center justify-center px-4 pb-20">
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => playing && setShowControls(false)}
          className="group relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl"
          style={{ backdropFilter: "blur(24px)" }}
        >
          {/* Video */}
          <video
            ref={videoRef}
            src={GitKoftaVideo}
            poster={GitKoftaThumbnail}
            muted
            playsInline
            loop
            onClick={togglePlay}
            className="aspect-video w-full object-cover"
          />

          {/* Big play overlay when paused */}
          <AnimatePresence>
            {!playing && (
              <motion.div
                key="big-play"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
              >
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 cursor-target"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Glassy Controls Bar */}
          <AnimatePresence>
            {showControls && (
              <motion.div
                key="controls"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}
              >
                {/* Progress bar */}
                <div
                  onClick={handleSeek}
                  className="group/bar relative mb-3 h-1 w-full cursor-pointer rounded-full bg-white/20"
                >
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-white/25"
                    style={{ width: `${buffered * 100}%` }}
                  />
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-white transition-all"
                    style={{ width: `${progress * 100}%` }}
                  />
                  <div
                    className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white opacity-0 shadow-lg transition-opacity group-hover/bar:opacity-100"
                    style={{ left: `calc(${progress * 100}% - 6px)` }}
                  />
                </div>

                {/* Bottom controls row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Play/Pause */}
                    <button
                      onClick={togglePlay}
                      className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:text-white"
                    >
                      {playing ? (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 19h4V5H6zm8-14v14h4V5z" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>

                    {/* Mute + Volume */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={toggleMute}
                        className="text-white/80 transition hover:text-white"
                      >
                        {/* {muted || volume === 0 ? (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10l2.45 2.45c.03-.15.05-.3.05-.45zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                          </svg>
                        )} */}
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10l2.45 2.45c.03-.15.05-.3.05-.45zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-3-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
                          </svg>
                      </button>
                      <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                        value={muted ? 0 : volume}
                        onChange={handleVolume}
                        className="h-1 w-16 cursor-pointer accent-white"
                      />
                    </div>

                    {/* Time */}
                    <span className="text-xs tabular-nums text-white/70">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-white/80 transition hover:text-white"
                  >
                    {fullscreen ? (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z" />
                      </svg>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Featured