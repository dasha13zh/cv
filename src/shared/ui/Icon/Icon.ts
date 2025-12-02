import { IconMap, type IconType } from '../../model/iconCore';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  icon: IconType;
  size?: string;
  width?: string;
  height?: string;
};

export const Icon = (props: IconProps) => {
  try {
    return IconMap[props.icon]({
      ...props,
      className: `${props.className ?? ''}`,
      height: props.size ?? '24px',
      width: props.size ?? '24px',
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    console.error(`Image not found:${props.icon}`);
    return IconMap['react']({
      ...props,
      className: `${props.className ?? ''}`,
      height: props.size ?? '24px',
      width: props.size ?? '24px',
    });
  }
};
