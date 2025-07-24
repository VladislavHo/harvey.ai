import React, { useEffect, useState } from 'react'

export default function VideoVault({ image, video }: { image: string, video: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  useEffect(() => {
    if (isModalOpen) {
      // Отключаем скролл
      document.body.style.overflow = 'hidden'
    } else {
      // Включаем скролл обратно
      document.body.style.overflow = 'unset'
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])
  return (
    <>
      <section className='max-w-default flex flex-col items-center gap-3 p-0'>
        <figure>
          <img src={image} alt="intro" />
        </figure>
        <button
          className='btn-default flex gap-1 items-center pointer-events-auto'
          onClick={openModal}
        >
          <img style={{ fill: "#fff" }} src="/video/play.svg" alt="play" />
          <span>Watch Product Video</span>
        </button>
      </section>

      {/* Модальное окно */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Кнопка закрытия */}
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/75 transition-all z-10"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Видео */}
            <div className="relative aspect-video">
              <video
                className="w-full h-full"
                controls
                playsInline
                src={video}
                preload='false'
              // poster='/video/intro.jpeg'
              >
                Ваш браузер не поддерживает видео.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}