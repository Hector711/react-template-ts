import { IconProps } from '@/types';

export default function ChangeIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icons icons-fill"
      id="change-icon"
      {...props}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M18 14a4 4 0 11-3.995 4.2L14 18l.005-.2A4 4 0 0118 14zM16.707 2.293a1 1 0 01.083 1.32l-.083.094L15.414 5H19a3 3 0 012.995 2.824L22 8v3a1 1 0 01-1.993.117L20 11V8a1 1 0 00-.883-.993L19 7h-3.585l1.292 1.293a1 1 0 01-1.32 1.497l-.094-.083-3-3a.98.98 0 01-.28-.872l.036-.146.04-.104c.058-.126.14-.24.245-.334l2.959-2.958a1 1 0 011.414 0zM3 12a1 1 0 01.993.883L4 13v3a1 1 0 00.883.993L5 17h3.585l-1.292-1.293a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083l.094.083 3 3a.98.98 0 01.28.872l-.036.146-.04.104a1.02 1.02 0 01-.245.334l-2.959 2.958a1 1 0 01-1.497-1.32l.083-.094L8.584 19H5a3 3 0 01-2.995-2.824L2 16v-3a1 1 0 011-1zM6 2a4 4 0 11-3.995 4.2L2 6l.005-.2A4 4 0 016 2z" />
    </svg>
  )
}