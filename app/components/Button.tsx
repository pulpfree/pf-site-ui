import { Link } from 'react-router'
import clsx from 'clsx'

type ButtonProps = {
  invert?: boolean
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { to?: undefined })
)

export function Button({ invert = false, className, children, ...props }: ButtonProps) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-slate-950 hover:bg-neutral-200'
      : 'bg-slate-950 text-white hover:bg-neutral-800',
  )

  // console.log('props: ', props)

  const inner = <span className='relative top-px'>{children}</span>

  if (typeof props.to === 'undefined') {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    )
  }

  return (
    // <Link className={className} {...props}>
    <Link className={className} to={(props as React.ComponentPropsWithoutRef<typeof Link>).to}>
      {inner}
    </Link>
  )
}

export default Button
