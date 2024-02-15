export interface Title { title: string }

export interface Description {
  description: string | string[]
}

export interface Label {
  label: string
}

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface ImageData {
  image: ImageProps
}

export type Heading = Title & Description

export type HeadingWithOptinalDescription = Title & Partial<Description>

export type HeadingWithLabel = Heading & Partial<Label>

export type HeadingWithImage = Heading & ImageData

export type HeadingWithImageLabel = HeadingWithImage & Partial<Label>

export interface NavItem extends Title {
  href: string
}

export interface Nav {
  items: NavItem[]
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export type NavItemWithOptionalChildren = NavItem & Partial<Pick<NavItemWithChildren, 'items'>>

export type MainNavItem = NavItemWithOptionalChildren

export interface Item extends HeadingWithImageLabel {
  slug?: string
}

export type ItemOptional = Omit<Item, 'image' | 'description'> & Partial<ImageData & Description>

export interface Article extends ItemOptional {
  items: string[]
}

export interface Section extends ItemOptional {
  items: ItemOptional[]
}

export interface Subcategory extends ItemOptional {
  items?: ItemOptional[]
}

export interface Category extends ItemOptional {
  items: Subcategory[]
}

export interface DocumentWithFullscreen extends Document {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}

export interface DocumentElementWithFullscreen extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}
