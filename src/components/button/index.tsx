import { ButtonVariants } from '../../types/button.types'
import styles from './Button.module.css'
import classNames from 'classnames'

type ButtoProps = {
  onClick(v: string | undefined): void
  text: string
  value?: string
  variant?: ButtonVariants
}

const Button: React.FC<ButtoProps> = ({
  text,
  value,
  variant = ButtonVariants.basic,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={classNames(styles.btn, {
        [styles.advanced]: variant === 'advanced',
        [styles.equal]: variant === 'equal',
      })}
    >
      {text}
    </button>
  )
}

export default Button
