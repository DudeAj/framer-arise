export interface cardBodyProps {
  title: string;
  desc: string;
  icon?: JSX.Element;
}

export interface Feature {
  icon: JSX.Element | string;
  title: string;
  description: string;
  tag?: string | JSX.Element;
  isLink?: string;
}

export interface WebDesignCardProps {
  features: Array<{
    icon: JSX.Element;
    text: string;
  }>;
  title: string;
  description: string;
  buttonText: string;
}

export interface BrandLogoProps {
  src: string;
  alt: string;
}

export interface SectionTitleProps {
  label: string;
  className?: string;
}
