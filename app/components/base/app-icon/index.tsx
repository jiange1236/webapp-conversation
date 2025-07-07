import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'
import Image from 'next/image'

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  icon,
  background,
  className,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{
        background,
      }}
    >
      {icon && <Image src={icon} alt='icon' className={style.img} width={100} height={100} /> || '🤖'}
    </span>
  )
}

export default AppIcon
