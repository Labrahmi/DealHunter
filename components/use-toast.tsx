import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

interface ToastProps {
  title: string
  description?: string
  duration?: number
}

const Toast = ({ title, description, duration = 3000 }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
    </div>
  )
}

export const toast = ({ title, description, duration = 3000 }: ToastProps) => {
  const toastContainer = document.createElement('div')
  document.body.appendChild(toastContainer)

  const root = createRoot(toastContainer)
  root.render(
    <Toast title={title} description={description} duration={duration} />
  )

  setTimeout(() => {
    root.unmount()
    document.body.removeChild(toastContainer)
  }, duration + 500) // Adding a little delay to ensure the unmount happens after the toast is hidden
}

export const useToast = () => {
  return { toast }
}
