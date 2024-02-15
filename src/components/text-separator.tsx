interface TextSeparatorProps {
    text: string
    separator: string
}

const TextSeparator = ({ text, separator }: TextSeparatorProps) => {
  const words = text.split(separator)
  return words.map((word, key) => (
    <span className='txts-container' key={key}>
      <span className='txts-word'>{word}</span>{(key < words.length - 1) && <span className='txts-separator'>{separator}</span>}
    </span>
  ))
}

export default TextSeparator
