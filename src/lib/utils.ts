import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import {
  type DocumentElementWithFullscreen,
  type DocumentWithFullscreen
} from '@/types'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify (str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

export const capitalize = (text: string): string => (
  `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`
)

export function absoluteUrl (path: string = '/') {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function isFullScreen (): boolean {
  const doc = document as DocumentWithFullscreen
  return !!(doc.fullscreenElement ||
      doc.mozFullScreenElement ||
      doc.webkitFullscreenElement ||
      doc.msFullscreenElement)
}

export function requestFullScreen (element: DocumentElementWithFullscreen) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  }
}

export function exitFullScreen (doc: DocumentWithFullscreen) {
  if (doc.exitFullscreen) {
    doc.exitFullscreen()
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen()
  } else if (doc.webkitExitFullscreen) {
    doc.webkitExitFullscreen()
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen()
  }
}

export function toogleFullScreen (): void {
  if (isFullScreen()) {
    requestFullScreen(document.documentElement)
  } else {
    exitFullScreen(document)
  }
}
